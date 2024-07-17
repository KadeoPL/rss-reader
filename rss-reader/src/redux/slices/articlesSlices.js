import {createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit';
import RSSParser from '../../utils/rssParser'

export const fetchArticles = createAsyncThunk(
    'articles/fetchArticles',
    async (_, {getState}) => {
        const articles = await RSSParser();
        const { favorites } = getState();
        const { read } = getState()
        return {articles, favorites: favorites.items, reads: read.items}
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
            const articleLink = action.payload;
            const article = state.items.find(item => item.link === articleLink);
            if(article){
                article.isFavorite = !article.isFavorite;
            }
        },
        toggleRead: (state, action) => {
            const articleLink = action.payload;
            const article = state.items.find(item => item.link === articleLink);
            if(article) {
                article.isRead = !article.isRead;
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchArticles.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchArticles.fulfilled, (state, action) => {
            const { articles, favorites, reads } = action.payload;
            state.status = 'succeeded';
            state.items = articles.map(article => ({
                ...article,
                id: nanoid(),
                isFavorite: favorites.some(fav => fav.link === article.link),
                isRead: reads.some(read => read.link === article.link)
            }))
        })
        .addCase(fetchArticles.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})
export const { toggleFavorite, toggleRead } = articlesSlice.actions;
export default articlesSlice.reducer;