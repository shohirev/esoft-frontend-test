import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, changePage } from '../features/uiStateSlice';

const FilterByName = () => {
  const dispatch = useDispatch();

  const handler = (e) => {
    const filter = {
      attribute: 'name',
      key: e.target.value,
    };

    dispatch(setFilter(filter));
    dispatch(changePage(1));
  };

  return (
    <label>
      <p>по названию:</p>
      <input
        onChange={handler}
        className='filter-input'
      >
      </input>
    </label>
  );
};

export default FilterByName;
