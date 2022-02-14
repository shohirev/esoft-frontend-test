import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Formik} from 'formik';
import { editTask, selectTasks } from '../features/tasksSlice';
import { showingTasks, selectProcess } from '../features/processSlice';

const EditTaskForm = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);
  const {activeTaskId} = useSelector(selectProcess);
  const editingTask = tasks.find((task) => task.id === activeTaskId);
  const { name, beginning, expiration, description } = editingTask;

  return (
    <Formik
      initialValues={{
        name,
        beginning,
        expiration,
        description,
      }}
      onSubmit={(values) => {
        dispatch(editTask({...editingTask, ...values}));
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
                type='text'
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
                type='text'
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
            Сохранить изменения
          </button>
        </form>
      )}
    </Formik>
  );
};

export default EditTaskForm;
