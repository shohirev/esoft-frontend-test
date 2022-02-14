import React from 'react';
import { useDispatch } from 'react-redux';
import {Formik} from 'formik';
import { addTask } from '../features/tasksSlice';
import { showingTasks } from '../features/processSlice';

const AddTaskForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        beginning: '',
        expiration: '',
        description: '',
      }}
      onSubmit={(values) => {
        const newTask = {...values, isCompleted: false};
        dispatch(addTask(newTask));
        dispatch(showingTasks());
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
        >
          <div className='form-section'>
            <label>
              <p>Имя задачи:</p>
              <input
                type='text'
                name='name'
                value={values.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='form-section'>
            <label>
              <p>Дата начала:</p>
              <input
                type='date'
                name='beginning'
                value={values.beginning}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='form-section'>
            <label>
              <p>Дата завершения:</p>
              <input
                type='date'
                name='expiration'
                value={values.expiration}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className='form-section'>
            <label>
              <p>Описание задачи:</p> 
              <input
                type='textarea'
                name='description'
                value={values.description}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button
            onClick={() => { dispatch(showingTasks()) }}
          >
            Отмена
          </button>
          <button
            type='submit'
          >
            Добавить задачу
          </button>
        </form>
      )}
    </Formik>
  );
};

export default AddTaskForm;
