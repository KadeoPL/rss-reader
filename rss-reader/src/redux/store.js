import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlices";
import hideReadSlices from "./slices/hideReadSlices";
import sortByCategory from "./slices/sortByCategory";
import sortSlices from "./slices/sortSlices";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    hideRead: hideReadSlices,
    sortByCategory: sortByCategory,
    sortSlice: sortSlices,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
