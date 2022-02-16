import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, changePage } from '../features/uiStateSlice';

const FilterByExecutionDate = () => {
  const dispatch = useDispatch();

  const handler = (e) => {
    const filter = {
      attribute: 'executionDate',
      key: e.target.value,
    };

    dispatch(setFilter(filter));
    dispatch(changePage(1));
  };

  return (
    <label>
      <p>по сроку исполнения:</p>
      <input
        type='date'
        onChange={handler}
      >
      </input>
    </label>
  );
};

export default FilterByExecutionDate;
