class SortStrategy {
    // trier par statut(tache terminée ou non)
    static sortByCompletion(tasks) {
      return [...tasks].sort((a, b) => a.completed - b.completed);
    }
  
      // trier par ordre alphabétique
    static sortAlphabetically(tasks) {
      return [...tasks].sort((a, b) => a.title.localeCompare(b.title));
    }
  }
  
  export default SortStrategy;
  