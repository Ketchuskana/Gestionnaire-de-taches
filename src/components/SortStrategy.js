// src/components/SortStrategy.js
class SortStrategy {
    static sortByCompletion(tasks) {
      return [...tasks].sort((a, b) => a.completed - b.completed);
    }
  
    static sortAlphabetically(tasks) {
      return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    }
  }
  
  export default SortStrategy;
  