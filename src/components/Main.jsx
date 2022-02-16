import React from 'react';
import { useSelector } from 'react-redux';
import { selectProcess } from '../features/processSlice';
import TodoList from './TodoList.jsx';
import AddTaskForm from './AddTask.jsx';
import EditTaskForm from './EditTask.jsx';

const Main = () => {
  const currentProcess = useSelector(selectProcess);

  let currentContent;

  switch (currentProcess.name) {
    case 'addingTasks':
      currentContent = <AddTaskForm />;
      break;
    case 'editingTask':
      currentContent = <EditTaskForm />;
      break;
    default:
      currentContent = <TodoList />;
  }

  return (
    <div >
      {currentContent}
    </div>
  );
};

export default Main;
