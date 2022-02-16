import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFilter from '../hooks/index.jsx';
import { changePage, selectActivePage, selectOutputOrder } from '../features/uiStateSlice';
import Pagination from 'react-bootstrap/Pagination';
import paginator from '../utilities/paginator.js';
import tasksSorter from '../utilities/tasksSorter.js';
import FilterPanel from './FilterPanel.jsx';
import OutputToggle from './OutputToggle.jsx';
import Task from './Task.jsx';

const TodoList = () => {
  const dispatch = useDispatch();
  const outputOrder = useSelector(selectOutputOrder);

  const filteredTasks = useFilter();
  const tasks = tasksSorter(filteredTasks, outputOrder);

  const activePageNumber = useSelector(selectActivePage);

  if (tasks.length === 0) {
    return (
      <div>
        <FilterPanel />
        <p>Задачи отсутствуют</p>
      </div>
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
    <div className='main-board'>
      <FilterPanel />
      <OutputToggle />
      <ul>
        {
          page.map((task, i) => {
            return (
              <li key={i}>
                <Task taskData={task} />
              </li>
            );
          })
        }
        {activePageNumber === pages.length ? <p className='task-card-element'>Конец списка</p> : null}
      </ul>
      {pagination}
    </div>
  );

  return list;
};

export default TodoList;
