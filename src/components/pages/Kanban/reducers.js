/* eslint-disable no-console */
import { LOAD_TASKS, SET_IS_LOADING } from './actionTypes';

const initSate = {
  tasks: [],
  isLoading: false,
};

export const kanbanReducer = (state = initSate, action) => {
  console.log('kanbanReducer', state, action);
  switch (action.type) {
    case LOAD_TASKS: {
      const { tasks } = action.payload;
      return {
        ...state,
        tasks,
      };
    }
    case SET_IS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading,
      };
    }
    default:
      return state;
  }
};
