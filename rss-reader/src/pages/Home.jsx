import { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux/slices/articlesSlices";
import Article from "../components/Article";
import Navigation from "../components/Navigation";

import { useSearchParams } from "react-router-dom";

import sortByCategory from "../functions/sortByCategory";

export default function Home() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);

  const [hideRead, setHideRead] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSortByCategory, setIsSortByCategory] = useState(false);

  const category = searchParams.get("category") || "all";

  useEffect(() => {
    if (articlesStatus === "idle") {
      dispatch(fetchArticles());
    }
  }, [articlesStatus, dispatch]);

  useEffect(() => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      setIsSortByCategory(category !== "all");
    }
  }, [category, selectedCategory]);

  const handleCategorySelection = (category) => {
    setSearchParams({ category: category.category });
    setIsSortByCategory(!isSortByCategory);
  };

  const filteredArticles = useMemo(() => {
    return sortByCategory(articles, selectedCategory, hideRead);
  }, [articles, hideRead, selectedCategory]);

  let content;
  if (articlesStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (articlesStatus === "succeeded") {
    content = filteredArticles.map((article) => (
      <Article
        article={article}
        key={article.id}
        oncategoryselect={handleCategorySelection}
      />
    ));
  } else if (articlesStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="w-full mx-auto">
      <Navigation
        hideRead={hideRead}
        setHideRead={setHideRead}
        isSortByCategory={isSortByCategory}
      />
      <div className="mx-8 flex flex-row justify-between"></div>
      <div className="flex flex-row flex-wrap gap-x-6 gap-y-10 mx-5 justify-center">
        {content}
      </div>
    </div>
  );
}
