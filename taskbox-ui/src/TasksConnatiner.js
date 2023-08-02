import React, { useState, useEffect } from "react";
import axios from "axios";

import TasksList from "./TasksList";
import AddTask from "./AddTask";

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

  const addItem = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
    console.log(tasks);
  };

  return (
    <div>
      <TasksList tasks={tasks} />
      <AddTask addItem={addItem} />
    </div>
  );
};

export default TasksConnatiner;
