import { createSlice } from "@reduxjs/toolkit";

const readSlice = createSlice({
    name: 'read',
    initialState: {
        items: [],
    },
    reducers: {
        markAsRead: (state, action) => {
            state.items.push(action.payload);
        },
        unMarkAsRead: (state, action) => {
            state.items = state.items.filter(item => item.link !== action.payload.link);
        }
    },
});

export const { markAsRead, unMarkAsRead } = readSlice.actions;
export default readSlice.reducer; 