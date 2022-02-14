import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 1,
  outputOrder: 'addingOrder',
};

export const uiStateSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.activePage = action.payload;
    },
    changeOutputOrder: (state, action) => {
      state.outputOrder = action.payload;
    }
  },
});

export const { changePage, changeOutputOrder } = uiStateSlice.actions;

export const selectActivePage = (state) => state.uiState.activePage;

export const selectOutputOrder = (state) => state.uiState.outputOrder;

export default uiStateSlice.reducer;
