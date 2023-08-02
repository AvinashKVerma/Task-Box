import React from "react";

const TasksList = (props) => {
  const { tasks } = props;
  return (
    <div>
      {tasks.length === 0 ? (
        <>
          <h2>No Tasks Found</h2>
          <p>Add your first task</p>
        </>
      ) : (
        <div>
          <h2>My Tasks -{tasks.length}</h2>
        </div>
      )}
    </div>
  );
};

export default TasksList;
