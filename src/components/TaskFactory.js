// src/components/TaskFactory.js
export default class TaskFactory {
    static createTask(title, description) {
      return {
        id: Date.now(),
        title,
        description,
        completed: false,
      };
    }
  }
  