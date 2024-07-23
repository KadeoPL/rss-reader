import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RSSParser from "../../utils/rssParser";

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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        const newArticles = action.payload.map((articles) => {
          const existingArticle = state.articles.find(
            (article) => article.link === articles.link
          );
          return {
            ...articles,
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

export const getAllFavorites = (state) =>
  state.articles.articles.filter((article) => article.isFavorite);
export const { toggleFavorite } = articlesSlice.actions;
export const selectAllArticles = (state) => state.articles.articles;
export const getArticlesError = (state) => state.articles.error;
export const getArticlesStatus = (state) => state.articles.status;
export default articlesSlice.reducer;
