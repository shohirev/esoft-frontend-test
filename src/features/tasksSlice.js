import { createSlice } from '@reduxjs/toolkit';
import { setDatabase } from '../utilities/synchronization.js';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    initDatabase: (state, action) => {
      const tasksDatabase = action.payload;
      if (tasksDatabase) {
        return tasksDatabase;
      }
    },
    addTask: (state, action) => {
      const newTask = action.payload;
      newTask.id = state.length + 1;
      state.push(newTask);
      setDatabase(state);
    },
    editTask: (state, action) => {
      const editedTask = action.payload;
      const task = state.find((task) => task.id === editedTask.id);
      Object.assign(task, editedTask);
      setDatabase(state);
    },
    removeTask: (state, action) => {
      const removedTaskId = action.payload;
      state = state.filter((task) => task.id !== removedTaskId);
      setDatabase(state);
      return state;
    },
    completeTask: (state, action) => {
      const completedTaskId = action.payload;
      const completedTask = state.find((task) => task.id === completedTaskId);
      completedTask.isCompleted = true;
      setDatabase(state);
    }
  },
});

export const { initDatabase, addTask, editTask, removeTask, completeTask } = tasksSlice.actions;

export const selectTasks = (state) => state.tasks;

export default tasksSlice.reducer;
