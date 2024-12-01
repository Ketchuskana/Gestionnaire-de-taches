import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import NotificationSystem from "./NotificationSystem";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [sortOption, setSortOption] = useState(null); // Null, 'alphabetical', or 'status'

  // Ajouter une tâche
  const addTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false, // Initial status is "not completed"
    };
    setTasks([...tasks, newTask]);
    NotificationSystem.notify("Tâche ajoutée avec succès !");
  };

  // Supprimer une tâche
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    NotificationSystem.notify("Tâche supprimée !");
  };

  // Marquer une tâche comme terminée
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
    NotificationSystem.notify("Tâche marquée comme terminée !");
  };

  // Trier par ordre alphabétique
  const sortAlphabetically = () => {
    setSortOption("alphabetical");
    setTasks([
      ...tasks.sort((a, b) => a.title.localeCompare(b.title)),
    ]);
  };

  // Trier par statut (les tâches terminées en bas)
  const sortByStatus = () => {
    setSortOption("status");
    setTasks([
      ...tasks.sort((a, b) => a.completed - b.completed),
    ]);
  };

  return (
    <div>
      <TaskForm onAddTask={addTask} />
      
      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-secondary"
          onClick={sortAlphabetically}
        >
          Trier par ordre alphabétique
        </button>
        <button className="btn btn-secondary" onClick={sortByStatus}>
          Trier par statut
        </button>
      </div>

      <TaskList
        tasks={tasks}
        onRemoveTask={removeTask}
        onCompleteTask={completeTask}
      />
    </div>
  );
}

export default TaskManager;
