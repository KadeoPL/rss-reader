import {createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit';
import RSSParser from '../../utils/rssParser'

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async () => {
        const articles = await RSSParser();
        return articles
    }

)

const articlesSlice = createSlice ({
    name: 'articles',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const articleId = action.payload;
            const article = state.items.find(item => item.id === articleId);
            if(article){
                article.isFavorite = !article.isFavorite;
            }
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticles.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload.map(article => ({
                ...article,
                isFavorite: false,
                id: nanoid(),
            }))
        })
        .addCase(fetchArticles.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})
export const { toggleFavorite } = articlesSlice.actions;
export default articlesSlice.reducer;