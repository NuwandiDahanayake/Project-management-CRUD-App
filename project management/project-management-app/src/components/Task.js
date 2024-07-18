import React from "react";

const Task = ({
  task,
  completeTask,
  setEditingTask,
  confirmDeleteTask,
  setViewingTask,
}) => {
  return (
    <div className={`task ${task.complete ? "complete" : ""}`}>
      <span onClick={() => completeTask(task.id)}>{task.text}</span>
      <button onClick={() => setViewingTask(task)}>View</button>
      <button onClick={() => setEditingTask(task)}>Edit</button>
      <button className="delete" onClick={() => confirmDeleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
