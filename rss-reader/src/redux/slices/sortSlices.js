import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "date",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortSlice.actions;
export const getSortBy = (state) => state.sortSlice.sortBy;
export default sortSlice.reducer;
