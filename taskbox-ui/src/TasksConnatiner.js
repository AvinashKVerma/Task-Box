import React, { useState, useEffect } from "react";
import axios from "axios";
import TasksList from "./TasksList";

const TasksConnatiner = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3033/api/tasks")
      .then((response) => {
        const result = response.data;
        setTasks(result);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);
  return (
    <div>
      {tasks.length === 0 ? (
        <>
          <h2>No Tasks Found</h2>
          <p>Add your first task</p>
        </>
      ) : (
        <TasksList tasks={tasks} />
      )}
    </div>
  );
};

export default TasksConnatiner;
