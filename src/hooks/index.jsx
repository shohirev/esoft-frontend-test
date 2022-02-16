import { useSelector } from 'react-redux';
import { selectTasks } from '../features/tasksSlice';
import { selectFilter } from '../features/uiStateSlice';

const filterByStatus = (tasks, filterKey) => {
  switch(filterKey) {
    case 'onlyActive':
      return tasks.filter((task) => task.isCompleted === false);
    case 'onlyCompleted':
      return tasks.filter((task) => task.isCompleted === true);
    default:
     return tasks;
  }
};

const useFilter = () => {
  const tasks = useSelector(selectTasks);
  //console.log('before filter', tasks)
  const filter = useSelector(selectFilter);
  const filterParams = Object.entries(filter);

  const filteredTasks = filterParams.reduce((acc, param) => {
    const [attribute, key] = param;

    let filteredTasks;

    if (attribute === 'status') {
      filteredTasks = filterByStatus(acc, key);
    }

    return filteredTasks;
  }, [...tasks]);

  //console.log('after filter', tasks)

  return filteredTasks;
};

export default useFilter;
