import React from 'react';
import { useDispatch } from 'react-redux';
import { addingTask } from '../features/processSlice';

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
    </div>
  );
};

export default Header;
