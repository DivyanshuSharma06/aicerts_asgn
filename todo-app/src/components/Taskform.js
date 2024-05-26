// src/components/TaskForm.js

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const TaskForm = () => {
  const { id } = useParams(); // Get task ID from URL params
  const navigate = useNavigate(); // useNavigate hook
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: "",
  });

  // Fetch the task if editing
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:5000/tasks/${id}`)
        .then((response) => setTask(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const method = id ? "put" : "post";
    const url = id
      ? `http://localhost:5000/tasks/${id}`
      : "http://localhost:5000/tasks";

    axios[method](url, task)
      .then(() => navigate("/")) // useNavigate to redirect
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>{id ? "Edit Task" : "Create Task"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            required
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TaskForm;
