const getTasks = (store) => JSON.stringify(store.kanbanReducer.tasks);
const getIsLoading = (store) => store.kanbanReducer.isLoading;

export default {
  getTasks,
  getIsLoading,
};
