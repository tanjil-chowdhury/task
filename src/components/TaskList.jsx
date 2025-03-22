const TaskList = ({ tasks, deleteTask, setTaskToEdit }) => {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? <p>No tasks yet. Add one!</p> : null}
      {tasks.map((task) => (
        <li key={task.id} className={`task-item ${task.priority.toLowerCase()}`}>
          <h3>{task.title}</h3>
          <p>Category: {task.category}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={() => setTaskToEdit(task)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
