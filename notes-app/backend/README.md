# Notes App Backend

## Overview
This is the backend for the Notes App, a full-stack application that allows users to create, manage, and delete notes. The backend is built using Node.js and Express, and it connects to a MongoDB database using Mongoose.

## Features
- Create, read, update, and delete notes.
- RESTful API for managing notes.
- MongoDB for data storage.

## Technologies Used
- Node.js
- Express
- Mongoose
- MongoDB

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd notes-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Configuration
1. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   ```

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints

### Notes
- **GET /api/notes**: Retrieve all notes.
- **POST /api/notes**: Create a new note.
- **GET /api/notes/:id**: Retrieve a note by ID.
- **PUT /api/notes/:id**: Update a note by ID.
- **DELETE /api/notes/:id**: Delete a note by ID.

## License
This project is licensed under the MIT License. See the LICENSE file for details.