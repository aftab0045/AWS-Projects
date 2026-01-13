#  EC2 to DynamoDB Database Migration

##  Project Overview

This project demonstrates how to migrate a database from an **Amazon EC2 instance** to **AWS DynamoDB** using the **AWS CLI Batch Write operation**.

The migration process follows real-world cloud practices by:

- Launching an EC2 instance
- Configuring IAM permissions
- Using DynamoDB as a fully managed NoSQL database
- Migrating structured JSON data efficiently

This project is ideal for **AWS Cloud interviews**, **hands-on practice**, and **resume building**.

---

##  Technologies & Services Used

- Amazon EC2  
- Amazon DynamoDB  
- IAM Roles  
- AWS CLI  
- Git & GitHub  
- Linux (Amazon Linux 2)

---

##  Architecture Overview
![](./img/EC2%20to%20DynamoDB%20Migration%20Archi.png)


- EC2 acts as the **source environment**
- DynamoDB acts as the **target NoSQL database**
- IAM Role enables secure access **without hardcoded credentials**

---

##  Step-by-Step Implementation


###  Step 1: Create an EC2 Instance

1. Login to the **AWS Management Console**
2. Launch an **EC2 instance**
   - AMI: Amazon Linux 2
   - Instance Type: `t3.micro` (Free Tier)
3. Configure Security Group
   - Allow **SSH (Port 22)** from your IP
4. Launch the instance using a key pair


- EC2 instance **running state** with instance details

---

###  Step 2: Connect to EC2 Using SSH

```bash
ssh -i your-key.pem ec2-user@<public-ip>
```
---
### Step 3: Install Git on EC2
```
sudo yum update -y
sudo yum install git -y
```
Verify installation:
```
git --version
```

---

### Step 4: Clone the Sample DynamoDB Repository
```
git clone https://github.com/iamtruptimane/Dynamodb-sample-file
cd Dynamodb-sample-file
```
This repository contains the Forum.json file used for DynamoDB batch insertion.

---
### Step 5: Create a DynamoDB Table
- Open DynamoDB Console

- Click Create table

- Configure:

    - Table name: ForumTable

    - Partition key: ForumName (String)

- Keep default settings and create the table

- DynamoDB table details page showing table name and key schema
---
### Step 6: Attach IAM Role to EC2
To allow EC2 to write data into DynamoDB:

- Create an IAM Role

  - Trusted entity: EC2

  - Policy: AmazonDynamoDBFullAccess

- Attach the role to your EC2 instance

![](./img/Screenshot%202026-01-12%20182548.png)
- IAM role attached to EC2 instance

--- 
### Step 7: Migrate Database Using AWS CLI
Run the following command inside the EC2 instance:
```
aws dynamodb batch-write-item --request-items file://Forum.json
```

![](./img/Screenshot%202026-01-12%20182757.png)

This command:
- Reads structured JSON data

- Inserts multiple records in DynamoDB

- Performs fast and scalable data migration

---
### Step 8: Verify Data in DynamoDB
- Open DynamoDB Console

- Select the table

- Click Explore table items

- Confirm all records from Forum.json are successfully migrated

![](./img/Screenshot%202026-01-12%20182452.png)

- DynamoDB table showing inserted items

##  Conclusion

This project demonstrates a complete and practical approach to migrating data from an Amazon EC2 instance to AWS DynamoDB using the AWS CLI. It highlights the use of IAM roles for secure access, eliminates the need for hardcoded credentials, and shows how DynamoDB can be used as a scalable and fully managed NoSQL database. Overall, this project strengthens hands-on AWS skills and reflects real-world cloud migration practices.
