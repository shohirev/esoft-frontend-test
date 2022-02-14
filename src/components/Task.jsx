import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, completeTask } from '../features/tasksSlice';
import { editingTask } from '../features/processSlice';
import formatDate from '../utilities/dateFormatter.js';

const Task = ({taskData}) => {
  const dispatch = useDispatch();

  const {name, id, description, isCompleted} = taskData;

  const beginningDate = formatDate(taskData.beginning);
  const expirationDate = formatDate(taskData.expiration);

  const taskStatus = isCompleted ? 'Задача завершена' : 'Задача активна';

  return (
    <div>
      <p className='task-card-element'>
        <span className='task-title'>Задача: </span>
        {name}
      </p>
      <p className='task-card-element'>
        <span className='task-title'>Дата начала: </span>
        {beginningDate}
      </p>
      <p className='task-card-element'>
        <span className='task-title'>Дата окончания: </span>
        {expirationDate}
      </p>
      <p className='task-card-element'>
        <span className='task-title'>Описание задачи: </span>
        {description}
      </p>
      <p className='task-card-element'>
        <span className='task-title'>Статус задачи: </span>
        {taskStatus}
      </p>
      <button
        className='task-card-element'
        onClick={() => {
          dispatch(editingTask(id));
        }}
      >
        Редактировать
      </button>
      <button
        className='task-card-element'
        onClick={() => {
          if (window.confirm('Вы действительно хотите удалить задачу?')) {
            dispatch(removeTask(id));
          }
        }}
      >
        Удалить
      </button>
      <button
        className='task-card-element'
        onClick={() => {
          dispatch(completeTask(id));
        }}
        disabled={isCompleted}
      >
        Завершить
      </button>
    </div>
  );
};

export default Task;
