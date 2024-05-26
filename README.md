# To-Do List Application

This is a simple To-Do List application built with React for the frontend and Express.js for the backend. The application allows users to create, read, update, and delete tasks.

## Features

- Create new tasks
- View a list of all tasks
- Edit existing tasks
- Delete tasks
- Tasks have a title, description, status, and due date

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (Node package manager, comes with Node.js)

## Getting Started

Follow these steps to set up and run the application on your local machine.

### Backend Setup

1. Clone the repository.

2. Install backend dependencies:

npm install

3. Start the backend server:

node server.js

The backend server will start on 'http://localhost:5000'.

### Frontend Setup

1. Open a new terminal and navigate to the 'todo-app' directory:

cd ../todo-app

2. Install frontend dependencies:

npm install

3. Start the frontend development server:

npm start

The frontend application will start on 'http://localhost:3000'.

#### Directory Structure

/backend
├── server.js
/todo-app
├── src
├── components
├── TaskForm.js
├── TaskList.js
├── App.js
├── package.json
├── public
├── README.md
├── .gitignore
README.md

##### Using the Application

1. View Tasks: Navigate to http://localhost:3000 to see the list of all tasks.
2. Create Task: Click on "Create New Task" to add a new task.
3. Edit Task: Click on "Edit" next to a task to update its details.
4. Delete Task: Click on "Delete" next to a task to remove it.

###### Technical Details

1. Frontend
   ├── Built with React
   ├── Uses React Router v6 for navigation
   ├── Axios for making HTTP requests

2. Backend
   ├── Built with Express.js
   ├── In-memory data storage for tasks
   ├── CORS enabled for cross-origin requests
   ├── RESTful API endpoints

3. API Endpoints
   ├── 'GET/tasks': Retreive all tasks
   ├── 'GET/tasks/:id': Retreive a single task by ID.
   ├── 'POST/tasks': Create a new task.
   ├── 'PUT/tasks/:id': Update an existing task by ID.
   ├── 'DELETE/tasks/:id': Delete a task by ID.
