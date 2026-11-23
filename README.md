# CABO Backend API

Backend API for a Solar Carbon Credit Marketplace built using Node.js, Express.js and MongoDB.

## Project Overview

This repository contains the backend development of CABO, a platform designed to support a solar-based carbon credit marketplace by connecting buyers and sellers through API services.

The backend handles database connectivity, buyer registration, buyer login, buyer data retrieval and other API operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- CORS
- dotenv

## Project Structure

```text
cabo-backend-api/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── health.controller.js
│   │   ├── info.controller.js
│   │   └── buyer.controller.js
│   ├── middleware/
│   │   ├── notFound.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Buyer.js
│   └── routes/
│       ├── health.routes.js
│       ├── info.routes.js
│       └── buyer.routes.js
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sharmaparth2502/cabo-backend-api.git
```

### 2. Navigate to the project folder

```bash
cd cabo-backend-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB connection string with your own MongoDB Atlas connection string.

**Note:** Do not upload the `.env` file or database credentials to GitHub.

### 5. Start the server

```bash
npm start
```

The server runs on port `5000` by default.

## Available API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Checks backend server status |
| GET | `/api/info` | Returns API information |
| POST | `/api/buyers/register` | Registers a new buyer |
| POST | `/api/buyers/login` | Verifies buyer login credentials |
| GET | `/api/buyers` | Retrieves registered buyer records |

## Buyer Registration API

**Endpoint:** `POST /api/buyers/register`

Example request body:

```json
{
    "company": "Test Solar Pvt Ltd",
    "email": "testbuyer@example.com",
    "contact": "Rahul Sharma",
    "phone": "9876543210",
    "password": "test123",
    "procurementTarget": "10,000 tCO2e",
    "companyType": "Private"
}
```

The API validates the required fields, checks the email and phone number, hashes the password using bcrypt and stores the buyer details in MongoDB.

## Buyer Login API

**Endpoint:** `POST /api/buyers/login`

Example request body:

```json
{
    "email": "testbuyer@example.com",
    "password": "test123"
}
```

The API checks the buyer's email and verifies the password using bcrypt.

## Get All Buyers API

**Endpoint:** `GET /api/buyers`

This API retrieves registered buyer records from MongoDB and returns their organisation details, email, contact information, procurement target and company type.

Password fields are excluded from the response.

## Current Features

- Express server setup
- MongoDB Atlas database connection using Mongoose
- Buyer database model
- Buyer registration API
- Buyer login API
- Buyer listing API
- Password hashing using bcrypt
- Email and phone number validation
- Duplicate buyer email checking
- JSON request parsing
- CORS configuration for frontend integration
- Frontend and backend integration for buyer registration and login
- Environment variable configuration using dotenv
- 404 response for undefined routes
- Centralized error handling middleware

## Future Development

- Seller management APIs
- Carbon credit management and CRUD operations
- Transaction management APIs
- Further authentication and authorization features

## Repository

GitHub: https://github.com/sharmaparth2502/cabo-backend-api