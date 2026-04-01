# School Library Management API

A RESTful API for managing a school library system built with Node.js, Express.js and MongoDB.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)

## Setup Steps

1. Clone the repository
git clone <your github repo link here>

2. Install dependencies
npm install

3. Create a `.env` file in the root folder and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Run the server
npm run dev

## API Documentation

### Authors
- POST /authors - Create author
- GET /authors - Get all authors
- GET /authors/:id - Get single author
- PUT /authors/:id - Update author
- DELETE /authors/:id - Delete author

### Books
- POST /books - Create book
- GET /books - Get all books
- GET /books/:id - Get single book
- PUT /books/:id - Update book
- DELETE /books/:id - Delete book
- POST /books/:id/borrow - Borrow book
- POST /books/:id/return - Return book

### Students
- POST /students - Create student
- GET /students - Get all students
- GET /students/:id - Get single student

### Attendants
- POST /attendants - Create attendant
- GET /attendants - Get all attendants