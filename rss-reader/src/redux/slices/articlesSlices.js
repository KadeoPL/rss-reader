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
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = state.articles.concat(action.payload);
      });
  },
});

export default articlesSlice.reducer;
