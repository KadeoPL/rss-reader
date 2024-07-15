import {configureStore} from "@reduxjs/toolkit"
import articlesReducer from "./slices/articlesSlices"
import favoritesReducer from "./slices/favoritesSlices";

const store = configureStore({
    reducer: {
    articles: articlesReducer,
    favorites: favoritesReducer,
    }
})

export default store;