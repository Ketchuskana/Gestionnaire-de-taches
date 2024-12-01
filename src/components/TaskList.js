import React from "react";

function TaskList({ tasks, onRemoveTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.description}
          <button onClick={() => onRemoveTask(task.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
