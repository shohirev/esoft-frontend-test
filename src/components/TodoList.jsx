import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFilter from '../hooks/index.jsx';
//import { selectTasks } from '../features/tasksSlice';
import { changePage, selectActivePage, selectOutputOrder } from '../features/uiStateSlice';
import Pagination from 'react-bootstrap/Pagination';
import paginator from '../utilities/paginator.js';
import tasksSorter from '../utilities/tasksSorter.js';
import OutputToggle from './OutputToggle.jsx';
import Task from './Task.jsx';

const TodoList = () => {
  const dispatch = useDispatch();
  //const tasksDatabase = useSelector(selectTasks);
  const outputOrder = useSelector(selectOutputOrder);

  const filteredTasks = useFilter();
  const tasks = tasksSorter(filteredTasks, outputOrder);

  const activePageNumber = useSelector(selectActivePage);

  if (tasks.length === 0) {
    return (
      <p>Задачи отсутствуют</p>
    );
  }

  const pages = paginator(tasks);

  const pagination = (
    <Pagination className='pagination'>
      {
        pages.map((page, i) => {
          const pageNumber = i + 1;
          return (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === activePageNumber}
              onClick={() => {dispatch(changePage(pageNumber))}}
            >
              {pageNumber}
            </Pagination.Item>
          )
        })
      }
    </Pagination>
  );

  const page = pages[activePageNumber - 1];

  const list = (
    <>
      <OutputToggle />
      <ul>
        {
          page.map((task) => {
            return (
              <li key={task.id}>
                <Task taskData={task} />
              </li>
            );
          })
        }
        {activePageNumber === pages.length ? <p className='task-card-element'>Конец списка</p> : null}
      </ul>
      {pagination}
    </>
  );

  return list;
};

export default TodoList;
