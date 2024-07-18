import React, { useState } from "react";

const EditTaskModal = ({ task, updateTask, setEditingTask }) => {
  const [newText, setNewText] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      updateTask(task.id, newText);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Edit task"
          />
          <button type="submit">Update Task</button>
          <button type="button" onClick={() => setEditingTask(null)}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
