export const setDatabase = (database) => {
  localStorage.setItem('tasksDatabase', JSON.stringify(database));
};

export const getDatabase = () => {
  const tasksDatabase = localStorage.getItem('tasksDatabase');
  return JSON.parse(tasksDatabase);
};
