import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import ViewTaskModal from "./components/ViewTaskModal";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [deletingTask, setDeletingTask] = useState(null);
  const [viewingTask, setViewingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, complete: false }]);
  };

  const completeTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task
      )
    );
  };

  const updateTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
    setEditingTask(null);
  };

  const confirmDeleteTask = (taskId) => {
    setDeletingTask(taskId);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id !== deletingTask));
    setDeletingTask(null);
  };

  return (
    <div className="App">
      <h1>Project Management App</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        completeTask={completeTask}
        setEditingTask={setEditingTask}
        confirmDeleteTask={confirmDeleteTask}
        setViewingTask={setViewingTask}
      />
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          updateTask={updateTask}
          setEditingTask={setEditingTask}
        />
      )}
      {deletingTask && (
        <ConfirmDeleteModal
          deleteTask={deleteTask}
          setDeletingTask={setDeletingTask}
        />
      )}
      {viewingTask && (
        <ViewTaskModal task={viewingTask} setViewingTask={setViewingTask} />
      )}
    </div>
  );
};

export default App;
