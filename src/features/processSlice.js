import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'showingTasks',
  activeTaskId: null,
};

export const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    showingTasks: (state) => {
      state.name = 'showingTasks';
    },
    addingTask: (state) => {
      state.name = 'addingTasks';
    },
    editingTask: (state, action) => {
      const id = action.payload;
      state.name = 'editingTask';
      state.activeTaskId = id;
    },
  },
});

export const { showingTasks, addingTask, editingTask } = processSlice.actions;

export const selectProcess = (state) => state.process;

export default processSlice.reducer;
