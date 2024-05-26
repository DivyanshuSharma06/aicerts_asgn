// src/components/TaskList.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the server when the component mounts
  useEffect(() => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Handle deleting a task
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(() => setTasks(tasks.filter((task) => task.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/tasks/new">Create New Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span>
              {task.title} - {task.status} - {task.dueDate}
            </span>
            <Link to={`/tasks/edit/${task.id}`}>Edit</Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
