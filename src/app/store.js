import { configureStore } from '@reduxjs/toolkit';
import processReducer from '../features/processSlice';
import tasksReducer from '../features/tasksSlice';
import uiStateReducer from '../features/uiStateSlice';

export const store = configureStore({
  reducer: {
    process: processReducer,
    tasks: tasksReducer,
    uiState: uiStateReducer,
  },
});
