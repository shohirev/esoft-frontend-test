import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePage: 1,
  outputOrder: 'addingOrder',
  filteredBy: {
    status: null,
  },
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
    },
    setFilter: (state, action) => {
      const filter = action.payload;
      const { attribute, key } = filter;
      state.filteredBy[attribute] = key;
    },
  },
});

export const { changePage, changeOutputOrder, setFilter } = uiStateSlice.actions;

export const selectActivePage = (state) => state.uiState.activePage;

export const selectOutputOrder = (state) => state.uiState.outputOrder;

export const selectFilter = (state) => state.uiState.filteredBy;

export default uiStateSlice.reducer;
