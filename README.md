# 🏃‍♂️ Activity Booking API

A simple backend API for user registration, login, listing activities, and booking them — built with **Node.js**, **Express**, and **MongoDB**.

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **JWT Authentication**
- **bcrypt** for password hashing
- **express-validator** for input validation

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/activity-booking-api.git
cd activity-booking-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
```

### 4. Start the Server

```bash
npm run dev
```

Server will be running at:  
📍 `http://localhost:5000`

---

## 🧪 API Endpoints

### ✅ Auth

#### `POST /api/auth/register`  
Register a user  
**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "password": "your_password"
}
```

#### `POST /api/auth/login`  
Login and get a token  
**Body:**
```json
{
  "email": "john@example.com",
  "password": "your_password"
}
```

---

### 📅 Activities

#### `GET /api/activity/getActivities`  
Get a list of all public activities

#### `POST /api/activity/createActivity`  
Create a new activity (authorized users only)  
**Headers:**  
`Authorization: Bearer <token>`  
**Body:**
```json
{
  "title": "Yoga Session",
  "description": "A relaxing yoga class",
  "location": "Community Center",
  "date": "2025-06-01",
  "time": "10:00 AM"
}
```

---

### 📖 Bookings

#### `POST /api/booking/book/:activityId`  
Book an activity  
**Headers:**  
`Authorization: Bearer <token>`

#### `GET /api/booking/myBookings`  
List the user's booked activities  
**Headers:**  
`Authorization: Bearer <token>`

---

## ✅ Bonus Features

- 🔐 Passwords securely hashed with **bcrypt**
- 🛡 JWT token-based authentication
- 📥 Input validation via **express-validator**
- 🧹 Clean, modular code structure

---

## 📁 Folder Structure

```
📦 project-root
├── controllers/
├── models/
├── routes/
├── middleware/
├── validators/
├── config/
├── server.js
├── .env
└── README.md
```
