const getTasks = async () => {
  const response = await fetch('http://localhost:8080/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

const createTask = async () => {};
const deleteTask = async () => {};

export default {
  getTasks,
  createTask,
  deleteTask,
};
