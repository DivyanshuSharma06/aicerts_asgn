// backend/server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

let tasks = [];
let currentId = 1;

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Get a single task by ID
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

// Create a new task
app.post("/tasks", (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const task = { id: currentId++, title, description, status, dueDate };
  tasks.push(task);
  res.status(201).json(task);
});

// Update an existing task by ID
app.put("/tasks/:id", (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (task) {
    task.title = title;
    task.description = description;
    task.status = status;
    task.dueDate = dueDate;
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
});

// Delete a task by ID
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
