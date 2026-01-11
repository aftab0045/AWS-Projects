# Personal Portfolio - Aftab Attar

## Project Overview

This is my **personal portfolio website**, built using **ReactJS** and **Vite**.  
It showcases my projects, resume, skills, and contact information. The website is **hosted on AWS S3** with a custom domain `aftabattar.cloud` using **Route 53** for DNS management.  

This project demonstrates:
- Static site deployment on AWS S3
- Domain management via AWS Route 53
- ReactJS frontend development
- Tailwind CSS for styling


---

## Features

- Fully responsive portfolio website
- Sections: Home, About, Skills, Projects, Resume, Contact
- Downloadable resume (PDF)
- Optimized assets (JS, CSS, images)
- SEO optimized (`robots.txt`, meta tags)
- Smooth animations and transitions
- Hosted with a custom domain

---

## Project Structure
```
Port/
├── src/ # React source code
│ ├── components/ # UI components
│ └── App.tsx # Main app layout
├── public/ # Static public files
├── package.json # Project dependencies
└── vite.config.ts # Vite configuration
```

After building, the `dist/` folder is generated for deployment:

```
dist/
├── index.html
├── favicon.ico
├── placeholder.svg
├── resume.pdf
├── robots.txt
├── assets/
│ ├── *.js
│ └── *.css
└── lovable-uploads/
├── images
```
---
## Local Setup

1. Clone the repository:
```bash
git clone <your-repo-link>
cd AftabDevPortfolio
```
2. Install dependencies:
```
npm install
```
3. Start development server:
```
npm run dev
```
4. Open browser at:
```
http://localhost:5173
```
---
## Build for Production
1. Run build command:
```
npm run build
```
2. This generates the `dist/` folder containing:
- `index.html` (main entry file)
- `assets/` (JS & CSS)
- `favicon.ico`, `resume.pdf`, `robots.txt`

---

## Deployment on AWS S3
Step 1: Create S3 Bucket
- Bucket name: `www.aftabattar.cloud`
- Region: choose your preferred AWS region

- Bucket type: General purpose

- Block all public access: ❌ Unchecked

Step 2: Upload Files
- Upload all contents inside dist/ (not the folder itself)

- Final bucket structure:

```
www.aftabattar.cloud
 ├── index.html
 ├── favicon.ico
 ├── resume.pdf
 ├── placeholder.svg
 ├── robots.txt
 ├── assets/
```
Step 3: Enable Static Website Hosting
- Properties → Static website hosting → Enable

- Index document: index.html

- Error document: index.html

Step 4: Set Bucket Policy

- Go to Permissions → Bucket Policy

- Paste:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::www.aftabattar.cloud/*"
    }
  ]
}
```

---

## Domain Setup via Route 53

- Create a hosted zone for aftabattar.cloud

- Copy the NS records provided by AWS

- Go to Hostinger → Domain → Nameservers → Replace with AWS NS records

- Create a record in Route 53:

    - Type: A (Alias)

    - Name: www

    - Alias Target: Select S3 website endpoint

- Wait for DNS propagation (typically 15 min – 24 hours)

- Test the website:
```
http://www.aftabattar.cloud
```

---
## Conclusion

This project represents my journey of building and deploying a modern, responsive personal portfolio using ReactJS and AWS cloud services. From purchasing a custom domain to configuring DNS with Route 53 and hosting the final build on Amazon S3, every step was implemented with real-world best practices in mind.

The portfolio not only highlights my technical skills and projects but also demonstrates my understanding of frontend development, cloud deployment, and domain management. By using AWS services, the website achieves high availability, scalability, and cost efficiency, making it suitable for professional and production-level use.

This project reflects my commitment to continuous learning, clean implementation, and building solutions that are both visually appealing and technically sound. It serves as a strong foundation for future enhancements such as CloudFront integration, HTTPS, CI/CD automation, and performance optimization.