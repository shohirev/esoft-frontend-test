const paginate = (tasks, pageSize = 15) => {
  if (tasks.length <= pageSize) {
    return [tasks];
  }
  const chunk = tasks.slice(0, pageSize);
  const rest = tasks.slice(pageSize, tasks.length);

  return [chunk, ...paginate(rest, pageSize)];
};

export default paginate;
