# CABO Backend API

Backend API for a Solar Carbon Credit Marketplace using Node.js, Express.js and MongoDB.

## Project Overview

This repository contains the backend development of CABO, a platform designed to support a solar-based carbon credit marketplace by connecting buyers and sellers through API services.

## Technologies Used

- Node.js
- Express.js
- MongoDB (planned integration)
- CORS
- dotenv

## Project Structure

```text
cabo-backend-api/
├── src/
│   ├── controllers/
│   │   ├── health.controller.js
│   │   └── info.controller.js
│   ├── middleware/
│   │   ├── notFound.js
│   │   └── errorHandler.js
│   └── routes/
│       ├── health.routes.js
│       └── info.routes.js
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

### 4. Start the server

```bash
npm start
```

For development mode with automatic server restart:

```bash
npm run dev
```

The server runs on port `5000` by default.

## Available API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Checks backend server status |
| GET | `/api/info` | Returns API information and available endpoints |

## Current Features

- Express server setup
- Health check API
- API information endpoint
- JSON request parsing
- CORS configuration for frontend integration
- Environment variable configuration using dotenv
- 404 response for undefined routes
- Centralized error handling middleware
- Start and development scripts

## Future Development

- MongoDB database integration
- Buyer and seller management APIs
- User authentication
- Carbon credit management
- Frontend API integration
