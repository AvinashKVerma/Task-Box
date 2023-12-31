import React, { useState } from "react";
import axios from "axios";

import TaskForm from "./TaskForm";

const AddTask = (props) => {
  const { addItem } = props;
  const [isSaved, setIsSaved] = useState(false);

  const formSubmit = (formData) => {
    axios
      .post("http://localhost:3033/api/tasks", formData)
      .then((response) => {
        const result = response.data;
        addItem(result);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const toggleIsSaved = () => {
    setIsSaved(false);
  };

  return (
    <div>
      <h2>Add Tasks</h2>
      <TaskForm
        formSubmit={formSubmit}
        isSaved={isSaved}
        toggleIsSaved={toggleIsSaved}
      />
    </div>
  );
};

export default AddTask;
