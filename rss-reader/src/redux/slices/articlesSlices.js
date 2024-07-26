import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RSSParser from "../../utils/rssParser";
import { createSelector } from "reselect";

const initialState = {
  articles: [],
  status: "idle",
  error: "",
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const articles = await RSSParser();
    return articles;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const article = state.articles.find(
        (article) => article.link === action.payload
      );
      if (article) {
        article.isFavorite = !article.isFavorite;
      }
    },
    markAsRead: (state, action) => {
      const article = state.articles.find(
        (article) => article.link === action.payload
      );
      if (article) {
        article.isRead = !article.isRead;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newArticles = action.payload.map((article) => {
          const existingArticle = state.articles.find(
            (existing) => existing.link === article.link
          );
          return {
            ...article,
            isFavorite: existingArticle ? existingArticle.isFavorite : false,
            isRead: existingArticle ? existingArticle.isRead : false,
          };
        });
        state.articles = newArticles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { toggleFavorite, markAsRead } = articlesSlice.actions;

export const selectAllArticles = (state) => state.articles.articles;
export const getArticlesError = (state) => state.articles.error;
export const getArticlesStatus = (state) => state.articles.status;

export const getAllFavorites = createSelector([selectAllArticles], (articles) =>
  articles.filter((article) => article.isFavorite)
);

export default articlesSlice.reducer;
