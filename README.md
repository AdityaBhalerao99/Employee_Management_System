# Employee Management System

A full-stack **Employee Management System** built using **React** for the frontend and **Spring Boot** for the backend.  
This project performs basic **CRUD (Create, Read, Update, Delete)** operations on employee records and is intended for learning and demonstration purposes.

---

## 🚀 Features

- Add new employees
- View all employees
- Update employee details
- Delete employee records
- RESTful API integration
- Simple and clean UI
- Backend validation and database persistence

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript (ES6)
- HTML5
- CSS3
- Axios (for API calls)

### Backend
- Java
- Spring Boot
- Spring Data JPA
- REST APIs
- Maven

### Database
- MySQL (can be replaced with H2/PostgreSQL)

---

## 📂 Project Structure
Employee-Management-System
│
├── frontend (React)
│ ├── src
│ │ ├── components
│ │ ├── services
│ │ ├── App.js
│ │ └── index.js
│
├── backend (Spring Boot)
│ ├── controller
│ ├── service
│ ├── repository
│ ├── model
│ └── EmployeeManagementApplication.java
│
└── README.md


---

## ⚙️ API Endpoints (Backend)

| Method| Endpoint             | Description              |
|-------|----------------------|--------------------------|
| POST  | `/api/employees`     | Add new employee         |
| GET   | `/api/employees`     | Get all employees        |
| GET   | `/api/employees/{id}`| Get employee by ID       |
| PUT   | `/api/employees/{id}`| Update employee details  |
| DELETE| `/api/employees/{id}`| Delete employee          |

---

## ▶️ How to Run the Project

### Backend (Spring Boot)

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/employee-management-system.git

2. Open backend in IDE (STS / IntelliJ / Eclipse)

3. Configure application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update

4. Run the Spring Boot application
   http://localhost:8080

### Frontend (React)

1. Navigate to frontend folder
cd frontend

2. Install dependencies
npm install

3. Start React app
npm start

4. Open in browser
http://localhost:3000



📌 Future Enhancements

* Search and filter employees
* Pagination
* Authentication & Authorization (JWT)
* Role-based access
* Improved UI with Material UI / Bootstrap


