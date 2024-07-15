import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import RSSParser from '../../utils/RSSParser'

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
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticles.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.items = action.payload;
        })
        .addCase(fetchArticles.rejected, (state, action) => {
            state.status = 'failed';
            state.error - action.error.message;
        })
    }
})

export default articlesSlice.reducer;