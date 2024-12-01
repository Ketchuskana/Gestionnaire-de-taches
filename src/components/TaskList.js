import React from "react";

function TaskList({ tasks, onRemoveTask, onCompleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            task.completed ? "bg-light" : ""
          }`}
        >
          <div>
            <h5 className={`mb-1 ${task.completed ? "text-decoration-line-through" : ""}`}>
              {task.title}
            </h5>
            <p className="mb-0 text-muted">{task.description}</p>
          </div>
          <div>
            {!task.completed && (
              <button
                className="btn btn-success btn-sm me-2"
                onClick={() => onCompleteTask(task.id)}
              >
                Terminer
              </button>
            )}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onRemoveTask(task.id)}
            >
              Supprimer
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
