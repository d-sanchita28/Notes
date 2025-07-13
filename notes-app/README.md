# Notes App

## Overview
The Notes App is a full-stack application that allows users to create, read, update, and delete notes. It consists of a backend built with Node.js and Express, and a frontend developed using React. This project demonstrates the integration of a RESTful API with a modern frontend framework, showcasing skills in both backend and frontend development.

## Features
- User authentication (optional)
- Create, read, update, and delete notes
- Responsive design for mobile and desktop
- Real-time updates (optional with WebSocket)

## Technologies Used
- **Frontend:**
  - React
  - CSS
  - Font Awesome for icons

- **Backend:**
  - Node.js
  - Express
  - MongoDB (with Mongoose for object modeling)

## Project Structure
```
notes-app
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── app.js
│   │   └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- MongoDB (or a MongoDB Atlas account)

### Backend Setup
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `src/db.js`.
4. Start the server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

## API Endpoints
- `GET /api/notes` - Retrieve all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note by ID
- `DELETE /api/notes/:id` - Delete a note by ID

