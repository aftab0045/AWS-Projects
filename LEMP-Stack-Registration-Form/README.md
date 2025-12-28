#  Registration Form Deployment using Nginx, PHP & MariaDB (LEMP Stack)

##  Project Overview
This project demonstrates the deployment of a **web-based registration form** using the **LEMP stack** (Linux, Nginx, MariaDB, PHP).  
Users can submit their details through a signup form, and the data is securely stored in a MariaDB database using PHP backend logic.

The project focuses on **real-world deployment concepts**, including:
- Web server configuration
- PHP processing with PHP-FPM
- Database integration using MySQL connector
- End-to-end data flow from browser to database

---

##  Tech Stack Used
- **Operating System:** Linux (Amazon Linux / RHEL-based)
- **Web Server:** Nginx
- **Backend Language:** PHP 8.4
- **PHP Handler:** PHP-FPM
- **Database:** MariaDB
- **Connector:** php-mysqlnd
- **Architecture Style:** LEMP Stack

---

##  Architecture Diagram
![](./img/Architecture%20Dig.png)


## ⚙️ How the Application Works
1. User opens the **signup form** in the browser.
2. Form data is submitted via **HTTP POST**.
3. **Nginx** receives the request and forwards PHP files to **PHP-FPM**.
4. **PHP-FPM** executes `submit.php`.
5. PHP connects to **MariaDB** using `php-mysqlnd`.
6. User data is inserted into the **student** table.
7. Success or error response is returned to the user.

## Project Structure
```bash
/usr/share/nginx/html/
│
├── signup.php    # User registration form
├── submit.php    # PHP backend processing
```


##  Database Design

### Database Name : registratnForm

### Table Structure
```sql
CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(15),
    email VARCHAR(50) UNIQUE,
    website VARCHAR(300),
    comment VARCHAR(300),
    gender VARCHAR(15)
);
```
##  Step-by-Step Deployment Guide

### 1️. Update System
```bash
sudo yum update -y
```
### 2. Install Nginx , PHP 8.4, MariaDB
```
sudo yum install nginx mariadb105-server php -y
sudo systemctl start nginx mariadb php-fpm
sudo systemctl enable nginx mariadb php-fpm
```
### 3. Install PHP MySQL Connector
```
sudo yum install php8.4-mysqlnd.x86_64 -y
```
### 4. Create Database & Table
Login to MariaDB:
```
mysql -u root -p
```
Create database and table:
```sql
CREATE DATABASE registratnForm;
USE registratnForm;

CREATE TABLE student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(15),
    email VARCHAR(50) UNIQUE,
    website VARCHAR(300),
    comment VARCHAR(300),
    gender VARCHAR(15)
);
```

### 5. Add Project Files
```
cd /usr/share/nginx/html
sudo nano signup.php
sudo nano submit.php
```
Ensure database configuration in submit.php:
```php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "registratnForm";
```

## Access the Application
### Signup Page
```
http://<SERVER-IP>/signup.php
```

![](./img/Screenshot%202025-12-28%20190005.png)
### Verify Data Insertion
```bash
mysql -u root -p
```
```sql
USE registratnForm;
SELECT * FROM student;
```
![](./img/Screenshot%202025-12-28%20190140.png)

##  Conclusion

This project successfully demonstrates the **deployment of a complete web-based registration system** using the **LEMP stack (Linux, Nginx, MariaDB, PHP)**. It covers the full lifecycle of a web application from serving the frontend form to processing backend logic and securely storing user data in a relational database.

Through this project, we implemented:
- Nginx as a high-performance web server
- PHP with PHP-FPM for backend processing
- MariaDB for reliable data storage
- End-to-end form handling using HTTP POST requests




