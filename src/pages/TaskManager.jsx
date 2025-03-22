import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  const editTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} editTask={editTask} taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <TaskList tasks={tasks} deleteTask={deleteTask} setTaskToEdit={setTaskToEdit} />
    </div>
  );
};

export default TaskManager;
