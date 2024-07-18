import React from "react";
import Task from "./Task";

const TaskList = ({
  tasks,
  completeTask,
  setEditingTask,
  confirmDeleteTask,
  setViewingTask,
}) => {
  return (
    <div>
      {tasks.length === 0 && <p>No tasks available.</p>}
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          completeTask={completeTask}
          setEditingTask={setEditingTask}
          confirmDeleteTask={confirmDeleteTask}
          setViewingTask={setViewingTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
