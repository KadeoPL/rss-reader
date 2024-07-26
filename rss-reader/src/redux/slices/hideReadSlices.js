import { createSlice } from "@reduxjs/toolkit";

const initialState = { isHide: false };

const hideReadSlice = createSlice({
  name: "hideRead",
  initialState,
  reducers: {
    toggleIsHideRead(state) {
      state.isHide = !state.isHide;
    },
  },
});

export const getIsHideRead = (state) => state.hideRead.isHide;
export const { toggleIsHideRead } = hideReadSlice.actions;
export default hideReadSlice.reducer;
