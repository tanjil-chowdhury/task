import { useState, useEffect } from "react";

const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState({ title: "", category: "", priority: "Low" });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim() === "") return;

    if (taskToEdit) {
      editTask(task); // Update existing task
    } else {
      addTask({ ...task, id: Date.now() }); // Add new task
    }

    setTask({ title: "", category: "", priority: "Low" });
    setTaskToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={task.category}
        onChange={(e) => setTask({ ...task, category: e.target.value })}
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">{taskToEdit ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
