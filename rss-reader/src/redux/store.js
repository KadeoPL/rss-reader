import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlices";
import favoritesReducer from "./slices/favoritesSlices";
import readReducer from "./slices/readSlices";
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState();

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    favorites: favoritesReducer,
    read: readReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
