import React from 'react';
import { useDispatch } from 'react-redux';
import { changeOutputOrder, changePage } from '../features/uiStateSlice';

const OutputToggle = () => {
  const dispatch = useDispatch();

  const handler = (e) => {
    dispatch(changeOutputOrder(e.target.value));
    dispatch(changePage(1));
  };

  return (
    //<label className='output-toggle'>
      //Вывод задач:
      <select className='output-toggle' onChange={handler}>
        <option value='addingOrder'>по дате создания</option>
        <option value='name'>по названию</option>
        <option value='beginning'>по дате начала</option>
      </select>
    //</label>
  );
};

export default OutputToggle;
