import React from "react";

const ConfirmDeleteModal = ({ deleteTask, setDeletingTask }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this task?</p>
        <button className="delete" onClick={deleteTask}>
          Yes, Delete
        </button>
        <button className="cancel" onClick={() => setDeletingTask(null)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
