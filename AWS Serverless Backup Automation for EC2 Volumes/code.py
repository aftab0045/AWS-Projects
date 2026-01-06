import boto3
import time

# ================== CONFIG ==================
SNS_TOPIC_ARN = "arn:aws:sns:us-east-1:003380494838:snapshot-alerts"  # SNS in Virginia
SOURCE_REGION = "us-east-1"       # Lambda & EC2 in Virginia
DESTINATION_REGION = "ap-south-1" # Mumbai for cross-region copy
DELETE_AFTER_SECONDS = 300         # Snapshot lifecycle tag (5 minutes)
# ============================================

def lambda_handler(event, context):
    sns = boto3.client('sns', region_name=SOURCE_REGION)
    ec2_source = boto3.client('ec2', region_name=SOURCE_REGION)

    snapshots_info = []

    # Only source region for creation
    regions = [SOURCE_REGION]

    for region in regions:
        ec2 = boto3.client('ec2', region_name=region)
        try:
            # List all in-use volumes
            volumes = ec2.describe_volumes(Filters=[{'Name': 'status', 'Values': ['in-use']}])['Volumes']
        except Exception as e:
            sns.publish(
                TopicArn=SNS_TOPIC_ARN,
                Subject=f"Failed to describe volumes in {region}",
                Message=str(e)
            )
            continue

        for volume in volumes:
            volume_id = volume['VolumeId']
            try:
                # 1️⃣ Create snapshot
                snapshot = ec2.create_snapshot(
                    VolumeId=volume_id,
                    Description=f"Lambda automated backup of {volume_id}"
                )
                snapshot_id = snapshot['SnapshotId']

                # 2️⃣ Tag snapshot
                ec2.create_tags(
                    Resources=[snapshot_id],
                    Tags=[
                        {'Key': 'CreatedBy', 'Value': 'Lambda'},
                        {'Key': 'VolumeId', 'Value': volume_id},
                        {'Key': 'BackupType', 'Value': 'Automated'},
                        {'Key': 'DeleteAfter', 'Value': str(int(time.time()) + DELETE_AFTER_SECONDS)}
                    ]
                )

                # 3️⃣ Wait until snapshot is completed
                waiter = ec2.get_waiter('snapshot_completed')
                waiter.wait(SnapshotIds=[snapshot_id], WaiterConfig={'Delay': 15, 'MaxAttempts': 40})

                # 4️⃣ Cross-region copy (to Mumbai)
                if DESTINATION_REGION != SOURCE_REGION:
                    ec2_dest = boto3.client('ec2', region_name=DESTINATION_REGION)
                    ec2_dest.copy_snapshot(
                        SourceRegion=SOURCE_REGION,
                        SourceSnapshotId=snapshot_id,
                        Description=f"Cross-region copy of {snapshot_id}"
                    )

                snapshots_info.append(snapshot_id)

            except Exception as e:
                sns.publish(
                    TopicArn=SNS_TOPIC_ARN,
                    Subject=f"Snapshot Failed for volume {volume_id}",
                    Message=str(e)
                )
                continue

    # 5️⃣ Success Notification
    sns.publish(
        TopicArn=SNS_TOPIC_ARN,
        Subject="Snapshot Backup Completed",
        Message=f"Snapshots processed successfully: {snapshots_info}"
    )

    return {
        "statusCode": 200,
        "body": "Snapshot automation completed successfully."
    }
