import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
  const { formSubmit, isSaved, toggleIsSaved } = props;
  const [id, setId] = useState(uuidv4());
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isSaved) {
      setId(uuidv4);
      setTitle("");
      setStatus(false);
      toggleIsSaved();
    }
  }, [isSaved]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      title: title,
      status: status,
    };
    formSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input type="text" onChange={handleTitleChange} value={title} /> <br />
        <input type="checkbox" checked={status} onChange={handleStatusChange} />
        <label>Completed</label>
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default TaskForm;
