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
    <label>
      <p>по статусу задачи:</p>
      <select className='filter-by-status' onChange={handler}>
        <option value={'all'}>все задачи</option>
        <option value='onlyActive'>только активные</option>
        <option value='onlyCompleted'>только завершенные</option>
      </select>
    </label>
  );
};

export default FilterByStatus;
