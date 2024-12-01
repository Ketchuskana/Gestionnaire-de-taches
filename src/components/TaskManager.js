import React, { useState } from "react";
import TaskFactory from "./TaskFactory";
import NotificationSystem from "./NotificationSystem";
import SortStrategy from "./SortStrategy";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [sortMethod, setSortMethod] = useState("default");

  const addTask = (title, description) => {
    const newTask = TaskFactory.createTask(title, description);
    setTasks([...tasks, newTask]);
    NotificationSystem.notify("Tâche ajoutée !");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    NotificationSystem.notify("Tâche supprimée !");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    NotificationSystem.notify("Tâche mise à jour !");
  };

  const sortedTasks =
    sortMethod === "completed"
      ? SortStrategy.sortByCompletion(tasks)
      : sortMethod === "alphabetical"
      ? SortStrategy.sortAlphabetically(tasks)
      : tasks;

  return (
    <div>
      <h1>Gestionnaire de Tâches</h1>
      <button onClick={() => setSortMethod("completed")}>Tri par statut</button>
      <button onClick={() => setSortMethod("alphabetical")}>Tri alphabétique</button>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={sortedTasks}
        onRemoveTask={removeTask}
        onToggleCompletion={toggleTaskCompletion}
      />
    </div>
  );
}

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

function TaskList({ tasks, onRemoveTask, onToggleCompletion }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title} - {task.description}
          </span>
          <button onClick={() => onToggleCompletion(task.id)}>
            {task.completed ? "Non terminé" : "Terminé"}
          </button>
          <button onClick={() => onRemoveTask(task.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskManager;
