import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, changePage } from '../features/uiStateSlice';

const FilterByStatus = () => {
  const dispatch = useDispatch();

  const handler = (e) => {
    const filter = {
      attribute: 'status',
      key: e.target.value,
    };

    dispatch(setFilter(filter));
    dispatch(changePage(1));
  };

  return (
      // Фильтрация задач по статусу:
      <select className='filter-by-status' onChange={handler}>
        <option value={'all'}>все задачи</option>
        <option value='onlyActive'>только активные</option>
        <option value='onlyCompleted'>только завершенные</option>
      </select>
  );
};

export default FilterByStatus;
