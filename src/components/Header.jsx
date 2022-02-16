import React from 'react';
import { useDispatch } from 'react-redux';
import { addingTask } from '../features/processSlice';
import FilterByStatus from './FilterByStatus.jsx';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className='header'>
      <h1>Список задач</h1>
      <button
        onClick={() => { dispatch(addingTask()) }}
      >
        Новая задача
      </button>
      <FilterByStatus />
    </div>
  );
};

export default Header;
