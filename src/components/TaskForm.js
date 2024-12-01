import React, { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAddTask(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="taskTitle" className="form-label">
          Titre de la Tâche
        </label>
        <input
          type="text"
          className="form-control"
          id="taskTitle"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="taskDescription"
          rows="3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter Tâche
      </button>
    </form>
  );
}

export default TaskForm;
