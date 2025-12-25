#  Database Migration to AWS RDS (MySQL)

##  Project Overview
This project demonstrates how to migrate a **traditional MySQL database** to **AWS RDS MySQL** using the **mysqldump backup and restore method**.  
The migration is performed manually to understand the core concepts of database migration, networking, and security in AWS.

---

##  Project Objective
- Create a traditional MySQL database
- Take a logical backup using `mysqldump`
- Create an AWS RDS MySQL database
- Restore the backup into RDS
- Verify successful data migration

---

##  Tools & Technologies Used
- AWS EC2 (Traditional Database)
- AWS RDS (MySQL)
- MySQL
- mysqldump
- AWS Console
- Linux (Amazon Linux)

---

##  Architecture Diagram

![RDS Migration Architecture](./img/Architecture%20dig.png)

**Flow:**
Traditional MySQL → Backup (.sql) → AWS RDS MySQL

---

##  Step-by-Step Implementation


### Step 1:  Create Traditional MySQL Database

Login to MySQL on EC2 / Linux server:
```bash
sudo mysql -u root -p
```
Create database:
```bash
CREATE DATABASE myntra;
```
Use database:
``` 
USE myntra;
```
Create table:
```
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  city VARCHAR(10),
  age INT
);
```
Insert sample data:
```
INSERT INTO users VALUES
(1, "rohan", "pune", 23),
(2, "sakshi", "mumbai", 24),
(3, "rahul", "pune", 24)
;
```
Verify data:
```
SELECT * FROM users;
```
![](./img/Screenshot%202025-12-25%20102233.png) 
##  Step 2: Take Backup Using mysqldump

Exit MySQL:
```sql
EXIT;
```
Take backup:
```
sudo mysqldump -u root -p myntra > myntra_bkp.sql
```
Verify backup file:
```
ls
```
![](./img/Screenshot%202025-12-25%20102425.png) 


##  Step 3: Create AWS RDS MySQL Database

Go to **AWS Console → RDS → Create Database**

### Configuration:
- Engine: **MySQL**
- Template: **Free Tier**
- DB Identifier: `myntra-rds`
- Username: `admin`
- Password: `********`

### Additional Configuration:
- Initial database name: `myntra`
- Initial database name set to `myntra`

![](./img/Screenshot%202025-12-25%20103708.png)
 
 ##  Step 4: Configure RDS Connectivity & Security

- Public access: **No**
- VPC: **Same as EC2**
- Security Group:
  - Allow **MySQL (3306)** from **EC2 Security Group**

- RDS inbound rule allowing port **3306**
- RDS endpoint visible

![](./img/Screenshot%202025-12-25%20103426.png)

 
  ## Step 5: Connect to RDS MySQL
  ```
  sudo mysql -h <RDS-ENDPOINT> -u admin -p
  ```
![](./img/Screenshot%202025-12-25%20103547.png) 

## Step 6: Restore Backup into RDS:
Exit MySQL:
```
EXIT;
```
Restore database:
```
sudo mysql -h <RDS-ENDPOINT> -u admin -p myntra < myntra_bkp.sql
```


## Step 7: Verify Data Migration Login again:
```
sudo mysql -h <RDS-ENDPOINT> -u admin -p
```
Verify data:
```
USE myntra;
SELECT * FROM users;
```
![](./img/Screenshot%202025-12-25%20104133.png)

### Tip 
> If the MySQL connection hangs, ensure that the RDS security group allows inbound MySQL (3306) traffic from the EC2 security group.

## Conclusion

This project demonstrates a manual MySQL database migration to AWS RDS, a core skill for cloud developers. The mysqldump method is simple, reliable, and perfect for small databases or learning purposes. Using AWS RDS provides scalability, reliability, and automated backups, eliminating the overhead of managing your own database server.