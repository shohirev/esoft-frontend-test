const sort = (coll, prop) => [...coll].sort((a, b) => {
  if (a[prop] < b[prop]) {
    return -1;
  }
  if (a[prop] > b[prop]) {
    return 1;
  }
  return 0;
});

const sortTasksBy = (tasks, order) => {
  switch(order) {
    case 'name':
      return sort(tasks, 'name');
    case 'beginning':
      return sort(tasks, 'beginning');
    default:
      return tasks;
  }
};

export default sortTasksBy;
