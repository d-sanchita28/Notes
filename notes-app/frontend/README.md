# Notes App Frontend

This is the frontend part of the Notes App, built using React. It allows users to create, view, update, and delete notes. The frontend communicates with the backend API to manage notes data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the frontend directory:
   ```
   cd notes-app/frontend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

## Folder Structure

```
frontend
├── public
│   └── index.html         # Main HTML file
├── src
│   ├── components         # React components
│   │   └── Note.jsx      # Component for displaying a single note
│   ├── App.jsx            # Main application component
│   ├── index.js           # Entry point for the React application
│   └── style.css          # Styles for the application
└── package.json           # Configuration file for the frontend
```

## Technologies Used

- React
- CSS
- Axios (for API calls)
- Font Awesome (for icons)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.