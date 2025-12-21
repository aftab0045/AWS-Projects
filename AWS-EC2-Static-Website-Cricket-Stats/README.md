# 🏏 Hosting My Cricket Stats Website on AWS EC2 (Ubuntu, Port 90)

Hey everyone 
Recently, I decided to host a small static HTML page that displays **All international runs of Indian cricket legends**  *Virat Kohli, Rohit Sharma, MS Dhoni, and Sachin Tendulkar*  on an **AWS EC2 instance (Ubuntu)**.  

It was a fun experience where I learned about server setup, port configuration, and Nginx hosting. Here’s a short walkthrough of what I did 👇  

---

##  Step 1: Creating EC2 Instance

I started by launching an **Ubuntu** EC2 instance from the AWS Management Console.  
- Selected **Free Tier (t2.micro)** instance.  
- Created and downloaded a new **key pair (.pem)** file.  
- Configured the **Security Group** to allow SSH (port 22).  

![](./img/Screenshot%202025-10-10%20182543.png)

---

##  Step 2: Connect Using SSH

Once the instance was running, I connected from my terminal using SSH:

```bash
ssh -i "mykey.pem" ubuntu@<your-public-ip>
```
![](./img/Screenshot%202025-10-10%20182348.png)


## Step 3: Install Nginx and Start the Server
After connecting, I installed and started Nginx:
```bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```
![](./img/Screenshot%202025-10-10%20182434.png)

## Step 4: Deploy My Cricket Website
I created an HTML file called cricket.html inside /var/www/html and added player stats.
```bash
sudo nano /var/www/html/cricket.html
```
Then, I modified the Nginx configuration to use port 90 instead of the default port 80:
```bash
sudo nano /etc/nginx/sites-available/default
# Change listen 80; → listen 90;
```
After saving changes, I reloaded the Nginx service:
```bash
sudo systemctl reload nginx
```

## Step 5: Access the Hosted Page
Finally, I opened my browser and visited:
```bash
http://<public-ip>:90
```
And there it was my HTML page showing All International Runs of the players hosted successfully on EC2.

![](./img/Screenshot%202025-10-10%20183021.png)

## Final Thoughts
This project taught me:
- How to configure Nginx manually on Ubuntu

- How to open and use custom ports (90) in AWS Security Groups

- Basics of deploying static sites on cloud servers

It’s a small project, but a great step toward understanding server hosting, port management, and deployment.
