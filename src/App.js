import React from "react";
import TaskManager from "./components/TaskManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 text-primary">Gestionnaire de Tâches Collaboratif</h1>
        <p className="lead">Organisez vos tâches facilement et efficacement !</p>
      </div>
      <TaskManager />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;



