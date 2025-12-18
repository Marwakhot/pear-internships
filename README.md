# PEAR Internships Platform

A full-stack web application that connects students with companies for internship opportunities. PEAR (Pair up with your dream company) provides a comprehensive platform for managing internship applications, postings, and user profiles.

---

## Features

### Student Side
- **User Authentication** - Secure signup/login with password validation
- **Browse Internships** - Search and filter by category, location, type, and payment
- **Apply to Internships** - Submit applications with CV upload and cover letter
- **Application Tracking** - Monitor application status (Pending/Shortlisted/Accepted/Rejected)
- **Profile Management** - Update personal information and change password

### Company Side
- **Company Authentication** - Separate login system for companies
- **Post Internships** - Create detailed internship listings with multiple fields
- **Manage Listings** - Edit or delete posted internships
- **View Applications** - Access all student applications with CV download
- **Update Status** - Change application status (Shortlist/Accept/Reject)
- **Company Profile** - Manage company information and credentials

### Core Functionality
- Role-based dashboards (Student vs Company)
- Real-time search and filter system
- File upload handling for CVs
- Responsive design for all devices
- Form validation on client and server side
- Grouped application views by internship

---

## Tech Stack

**Frontend:**
- HTML5, CSS3
- Vanilla JavaScript
- Google Fonts (Poppins)

**Backend:**
- Node.js
- Express.js v5.1.0
- MySQL2 v3.14.1

**Key Dependencies:**
- `express-fileupload` - File handling
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management

---

## Prerequisites

Before running this project, ensure you have:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) (v5.7 or higher)
- A code editor (VS Code recommended)
- Git

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Marwakhot/pear-internships.git
cd pear-internships
```

### 2. Install Backend Dependencies
```bash
cd pear_backend
npm install
```

### 3. Set Up MySQL Database

**a) Create the database:**
```sql
CREATE DATABASE pear;
USE pear;
```

**b) Run the SQL schema:**
- Open `pear_backend/sql.sql`
- Execute all queries in your MySQL client or command line:
```bash
mysql -u root -p pear < pear_backend/sql.sql
```

### 4. Configure Database Connection

**Option A: Update db.js directly (Not Recommended)**
Edit `pear_backend/db.js`:
```javascript
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'YOUR_PASSWORD',  // Change this
  database: 'pear'
});
```

**Option B: Use Environment Variables (Recommended)**
Create `.env` file in `pear_backend/`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=pear
PORT=3000
```

Then update `db.js` to use environment variables.

### 5. Start the Backend Server
```bash
cd pear_backend
node server.js
```

You should see:
```
Connected to MySQL Database!
Server running at http://localhost:3000
```

### 6. Launch the Frontend
- Open `pear_frontend/home.html` in your browser
- Or use Live Server extension in VS Code for better experience

---

## Project Structure

```
pear-internships/
├── pear_backend/
│   ├── db.js                 # Database connection
│   ├── server.js             # Express server & API routes
│   ├── sql.sql               # Database schema
│   ├── package.json          # Backend dependencies
│   └── uploads/              # CV file storage
│
├── pear_frontend/
│   ├── CSS/
│   │   ├── home-style.css
│   │   ├── login-signup-style.css
│   │   ├── company-student-style.css
│   │   └── student-forms-style.css
│   │
│   ├── student_side_html/
│   │   ├── student-login.html
│   │   ├── student-signup.html
│   │   ├── student-dashboard.html
│   │   ├── student-application.html
│   │   ├── student-profile.html
│   │   └── student-internship-form.html
│   │
│   ├── student_side_java/
│   │   ├── student-login-java.js
│   │   ├── student-signup-java.js
│   │   ├── student-dashboard-java.js
│   │   ├── student-application-java.js
│   │   ├── student-profile-java.js
│   │   └── student-internship-form-java.js
│   │
│   ├── Company_side_html/
│   │   ├── company-login.html
│   │   ├── company-signup.html
│   │   ├── company-dashboard.html
│   │   ├── company-internship.html
│   │   ├── company-application.html
│   │   └── company-profile.html
│   │
│   ├── Company_side_java/
│   │   ├── company-login-java.js
│   │   ├── company-signup-java.js
│   │   ├── company-dashboard-java.js
│   │   ├── company-internship-java.js
│   │   ├── company-application-java.js
│   │   └── company-profile-java.js
│   │
│   ├── home.html
│   └── assets/               # Images & logos
│
└── README.md
```

---

## API Endpoints

### Student Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/signup` | Register new student |
| POST | `/login` | Student login |
| GET | `/student/:id` | Get student profile |
| PUT | `/student/:id` | Update student profile |
| PUT | `/student/:id/password` | Change password |
| GET | `/applications/student-email/:email` | Get student applications |
| POST | `/apply/:internshipId` | Submit application |

### Company Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/company/signup` | Register new company |
| POST | `/company-login` | Company login |
| GET | `/company/:id` | Get company profile |
| PUT | `/company/:id` | Update company profile |
| PUT | `/company/:id/password` | Change company password |
| POST | `/company/:id/internship` | Create internship |
| GET | `/internships/:companyId` | Get company internships |
| PUT | `/company/internships/:id` | Edit internship |
| DELETE | `/company/internships/:id` | Delete internship |
| GET | `/company/applications/:companyId` | Get all applications |
| PUT | `/application/:id/status` | Update application status |

### Public Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/internships` | Get all internships |

---

## Database Schema

### Students Table
```sql
- id (Primary Key)
- name
- email (Unique)
- phone
- major
- university
- dob
- password
- role (Default: 'student')
- created_at
```

### Companies Table
```sql
- id (Primary Key)
- name
- email (Unique)
- address
- phone
- password
- created_at
```

### Internships Table
```sql
- id (Primary Key)
- company_id (Foreign Key)
- title
- description
- duration
- location
- category
- paid (ENUM: 'paid', 'unpaid')
- type (ENUM: 'fulltime', 'parttime')
```

### Applications Table
```sql
- id (Primary Key)
- student_name
- student_email
- phone
- cover_letter
- cv_filename
- internship_id (Foreign Key)
- status (Default: 'Pending')
- created_at
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
