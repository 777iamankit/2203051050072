# 🔗 AffordMed URL Shortener Microservice

A simple Node.js microservice to:

- Register and log in users
- Create short URLs for long links
- Redirect to original links using shortcodes
- Retrieve statistics for each shortened link

---

## 📁 Project Structure

project/
├── public/
|-----index.html
│ ├── register.html
│ └── login.html
├── server.js
└── README.md

---

## 🚀 Features

- ✅ User Registration and Login (In-memory)
- ✅ URL Shortening with optional custom shortcode
- ✅ Expiry time for short URLs (default 30 min)
- ✅ Redirection via short URL
- ✅ Retrieve detailed statistics of each short URL

---

## 🛠️ Technologies Used

- Node.js (HTTP core module)
- No external libraries
- In-memory storage (can be extended to use files or databases)

---

## 🖥️ Run the Project

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd project/
```
