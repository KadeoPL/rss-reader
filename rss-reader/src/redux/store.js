import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlices";
import hideReadSlices from "./slices/hideReadSlices";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    isHideRead: hideReadSlices,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
