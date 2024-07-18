import React from "react";

const ViewTaskModal = ({ task, setViewingTask }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Task Details</h2>
        <p>{task.text}</p>
        <button onClick={() => setViewingTask(null)}>Close</button>
      </div>
    </div>
  );
};

export default ViewTaskModal;
