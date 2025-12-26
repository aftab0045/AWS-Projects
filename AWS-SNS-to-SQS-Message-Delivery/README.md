#  AWS SNS to SQS Message Delivery Project

##  Project Overview
This project demonstrates how to use **Amazon Simple Notification Service (SNS)** and **Amazon Simple Queue Service (SQS)** together to build a **decoupled, event-driven architecture**.

In this setup:
- A message is published to an **SNS Topic**
- The SNS topic delivers the message to an **SQS Queue**
- The message is then available for processing by a consumer

This architecture is commonly used in **microservices**, **event notifications**, and **asynchronous processing systems**.

---

##  Architecture Diagram

![SNS to SQS Architecture](./img/Architecture%20Dig.png)

---

##  AWS Services Used

- **Amazon SNS** – Message publishing and fan-out service
- **Amazon SQS** – Fully managed message queue
- **AWS IAM** – Permissions (handled automatically by AWS)

---

##  Project Objectives

- Create an SNS topic
- Create an SQS queue
- Subscribe SQS to SNS
- Publish messages to SNS
- Receive messages in SQS
- Understand SNS → SQS message flow

---

##  Architecture Flow

1. Publisher sends a message to SNS
2. SNS receives the message
3. SNS pushes the message to subscribed SQS queue
4. SQS stores the message safely
5. Consumer polls the queue and processes the message

---

##  Step-by-Step Implementation



###  Step 1: Create an SQS Queue

1. Open **AWS Console**
2. Go to **Amazon SQS**
3. Click **Create queue**
4. Select:
   - Queue type: **Standard**
   - Queue name: `SQS-Demo`
5. Keep default settings
6. Click **Create queue**

✅ SQS queue created successfully

---

###  Step 2: Create an SNS Topic

1. Go to **Amazon SNS**
2. Click **Create topic**
3. Select:
   - Type: **Standard**
   - Name: `global`
4. Click **Create topic**

✅ SNS topic created successfully

---

### 🧩 Step 3: Subscribe SQS Queue to SNS Topic

1. Open the **SNS Topic**
2. Go to **Subscriptions**
3. Click **Create subscription**
4. Configure:
   - Protocol: **Amazon SQS**
   - Endpoint: Select **SQS Queue ARN**
5. Click **Create subscription**

![](./img/Screenshot%202025-12-26%20193652.png)

✅ SNS and SQS are now connected

---

### 🧩 Step 4: Verify SQS Access Policy (Important)

SNS must have permission to send messages to SQS.

1. Open **Amazon SQS**
2. Select your queue
3. Go to **Access Policy**
4. Ensure policy allows SNS to send messages

Example policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Allow-SNS-SendMessage",
      "Effect": "Allow",
      "Principal": {
        "Service": "sns.amazonaws.com"
      },
      "Action": "SQS:SendMessage",
      "Resource": "YOUR_SQS_QUEUE_ARN",
      "Condition": {
        "ArnEquals": {
          "aws:SourceArn": "YOUR_SNS_TOPIC_ARN"
        }
      }
    }
  ]
}
```
### Step 5: Publish a Message to SNS

1. Open SNS Topic
2. Click Publish message
3. Enter:
   - Subject: Order Notification
   - Message:
   ```sql
   New order has been placed successfully.
   ```
4. Click Publish

✅ Message sent to SNS topic

### Step 6: Receive Message from SQS

1. Open Amazon SQS
2. Select the queue
3. Click Send and receive messages
4. Click Poll for messages

![](./img/Screenshot%202025-12-26%20193906.png)

🎉 Message published from SNS is now visible in SQS

### Conclusion

This project demonstrates how Amazon SNS and Amazon SQS work together to create a reliable, scalable, and decoupled messaging system.
It is a foundational pattern used in many real-world AWS architectures.