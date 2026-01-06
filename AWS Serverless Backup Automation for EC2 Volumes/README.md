#  Automated EBS Snapshot Management using AWS Lambda

##  Project Description

This project implements an **automated EBS snapshot management system** using **AWS Lambda** and other AWS services. The solution automatically identifies **in-use EBS volumes** attached to EC2 instances, creates snapshots, waits until the snapshots are fully completed, applies standardized tags, optionally copies snapshots for disaster recovery purposes, deletes snapshots after a defined lifecycle period (5 minutes for demo), and sends email notifications using Amazon SNS. All execution details are logged in Amazon CloudWatch.  
This project demonstrates **serverless automation, backup lifecycle management, and AWS best practices**, making it suitable for real-world use cases and AWS interview preparation.

---

##  Architecture Diagram

![](./img/AWS%20Serverless%20Backup%20Automation%20for%20EC2%20Volumes.png) 


---

##  AWS Services Used

- **Amazon EC2** – Compute instances and attached EBS volumes  
- **Amazon EBS** – Block storage and snapshots  
- **AWS Lambda** – Serverless automation logic  
- **Amazon EventBridge** – Scheduled or manual triggers  
- **Amazon SNS** – Email notifications  
- **Amazon CloudWatch** – Logs and monitoring  
- **AWS IAM** – Role-based access control  

---

##  End-to-End Workflow
```
EventBridge (Schedule)
        ↓
AWS Lambda Function
        ↓
EC2 → In-use EBS Volumes
        ↓
Create Snapshot
        ↓
Wait until snapshot = completed
        ↓
Tag Snapshot
        ↓
Copy Snapshot to another region
        ↓
Wait 5 minutes (Lifecycle)
        ↓
Delete Snapshot
        ↓
SNS Email Notification
        ↓
CloudWatch Logs

```

---

##  Step-by-Step Implementation

###  Step 1: Launch EC2 Instance

- Launch a **t3.micro** EC2 instance (Amazon Linux)
- Ensure an **EBS volume is attached**


---

###  Step 2: Create SNS Topic

- Create an SNS topic named **`snapshot-alerts`**
- Subscribe your email address
- Confirm the subscription via email



---

###  Step 3: Create IAM Role for Lambda

Create an IAM role with the following permissions,
Attach inline policy with permissions 

```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeVolumes",
        "ec2:CreateSnapshot",
        "ec2:DeleteSnapshot",
        "ec2:CreateTags",
        "ec2:DescribeSnapshots",
        "ec2:CopySnapshot"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": ["sns:Publish"],
      "Resource": "arn:aws:sns:us-east-1:003380494838:snapshot-alerts"
    }
  ]
}

``` 


---

###  Step 4: Create Lambda Function

- Function name: **`ebs-snapshot-automation-lambda`**
- Runtime: **Python 3.14**
- Region: **us-east-1 (N. Virginia)**
- Attach the IAM role created earlier


---

###  Step 5: Add Lambda Code

- Add Python code to:
  - Identify in-use EBS volumes
  - Create snapshots
  - Wait for snapshot completion
  - Apply tags
  - Delete snapshot after lifecycle
  - Send SNS notifications


---

###  Step 6: Test Lambda Function

- Use **Test Event** in Lambda
- Monitor execution status

![](./img/Screenshot%202026-01-06%20120011.png)
---

###  Step 7: Verify Snapshot Creation

- Navigate to **EC2 → Snapshots**
- Verify snapshot creation in **N. Virginia (us-east-1)** by checking the EC2 → Snapshots section and confirming a new snapshot is created for the attached EBS volume.

![](./img/Screenshot%202026-01-06%20115508.png)

- Verify **auto-tagging** by opening the snapshot details and ensuring tags like `CreatedBy=Lambda`, `BackupType=Automated`, and `VolumeId=<volume-id>` are present.

![](./img/Screenshot%202026-01-06%20120200.png)

- Verify **cross-region backup** by switching the AWS region to **Mumbai (ap-south-1)** and confirming that the copied snapshot appears after the original snapshot reaches the `completed` state.

![](./img/Screenshot%202026-01-06%20115914.png)
---

###  Step 8: Verify Snapshot Deletion (Lifecycle)

- Wait **5 minutes**
- Confirm snapshot is automatically deleted


---

###  Step 9: Verify SNS Notification

- Check email for success or failure notification

![](./img/Screenshot%202026-01-06%20115834.png)


  

