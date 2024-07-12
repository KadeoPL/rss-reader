import {configureStore} from "@reduxjs/toolkit"
import articlesReducer from "./slices/articlesSlices"

const store = configureStore({
    reducer: {
    articles: articlesReducer,
    }
})

export default store;