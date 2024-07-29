import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "date",
  sortOrder: 'asc'
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    }
  },
});

export const { setSortBy, setSortOrder } = sortSlice.actions;
export const getSortBy = (state) => state.sortSlice.sortBy;
export const getSortOrder = (state) => state.sortSlice.sortOrder;
export default sortSlice.reducer;
