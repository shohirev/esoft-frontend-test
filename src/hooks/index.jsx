import { useSelector } from 'react-redux';
import { selectTasks } from '../features/tasksSlice';
import { selectFilter } from '../features/uiStateSlice';

const filterByStatus = (tasks, taskStatus) => {
  switch(taskStatus) {
    case 'onlyActive':
      return tasks.filter((task) => task.isCompleted === false);
    case 'onlyCompleted':
      return tasks.filter((task) => task.isCompleted === true);
    default:
     return tasks;
  }
};

const filterByName = (tasks, name) => tasks.filter((task) => task.name.includes(name));

const filterByExecutionDate = (tasks, date) => {
  if (date !== '') {
    
    return tasks.filter((task) => task.expiration === date);
  }
  return tasks;
};

const useFilter = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilter);
  const filterParams = Object.entries(filter);

  const filteredTasks = filterParams.reduce((acc, param) => {
    const [attribute, key] = param;

    let filteredTasks;

    if (attribute === 'status') {
      filteredTasks = filterByStatus(acc, key);
    }
    if (attribute === 'name') {
      filteredTasks = filterByName(acc, key);
    }
    if (attribute === 'executionDate') {
      filteredTasks = filterByExecutionDate(acc, key);
    }

    return filteredTasks;
  }, [...tasks]);

  return filteredTasks;
};

export default useFilter;
