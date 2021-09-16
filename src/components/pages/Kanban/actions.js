import { LOAD_TASKS, SET_IS_LOADING } from './actionTypes';

const loadTasks = (tasks) => ({
  type: LOAD_TASKS,
  payload: {
    tasks,
  },
});
const setIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: {
    isLoading,
  },
});

export default {
  loadTasks,
  setIsLoading,
};
