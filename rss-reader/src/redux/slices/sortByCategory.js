import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: {
    category: "all",
    color: "",
  },
};

const sortByCategory = createSlice({
  name: "sortByCategory",
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.category = action.payload;
    },
    diselectCategory(state) {
      state.category.category = "all";
      state.category.color = "bg-black";
    },
  },
});

export const getCategoryToSort = (state) => state.sortByCategory.category;
export const { selectCategory, diselectCategory } = sortByCategory.actions;
export default sortByCategory.reducer;
