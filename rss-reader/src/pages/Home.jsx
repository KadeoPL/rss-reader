import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux/slices/articlesSlices";
import Article from "../components/Article";
import Navigation from "../components/Navigation";
import { CloseCircle } from "iconsax-react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import chooseCategoryColor from "../functions/categoryColor";
export default function Home() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  const [hideRead, setHideRead] = useState(false);
  const [isSortByCategory, setIsSortByCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryColor, setCategoryColor] = useState("");

  useEffect(() => {
    if (articlesStatus === "idle") {
      dispatch(fetchArticles());
    }
  }, [articlesStatus, dispatch]);

  const handleChange = () => {
    setHideRead((prev) => !prev);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category.category);
    setCategoryColor(chooseCategoryColor(selectedCategory));
    setSearchParams({ category: category.category });
    setIsSortByCategory(true);
  };

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setSelectedCategory(category);
      setIsSortByCategory(true);
    }
  }, [searchParams]);

  let content;
  if (articlesStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (articlesStatus === "succeeded") {
    const filteredArticles = articles
      .filter((article) => !hideRead || !article.isRead)
      .filter(
        (article) =>
          selectedCategory === "all" || article.category === selectedCategory
      );

    content = filteredArticles.map((article) => (
      <Article
        article={article}
        key={article.id}
        onData={handleCategorySelection}
      />
    ));
  } else if (articlesStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="w-full mx-auto">
      <Navigation />
      <div className="mx-8 flex flex-row justify-between">
        <div className="flex gap-2">
          <input type="checkbox" checked={hideRead} onChange={handleChange} />
          <p>Hide read</p>
        </div>
        <div>
          {isSortByCategory && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`${categoryColor} py-1 px-3 text-sm rounded-md text-white flex gap-2 items-center`}
              onClick={() => {
                setIsSortByCategory(false);
                setSelectedCategory("all");
                setSearchParams({});
              }}
            >
              <CloseCircle size={16} />
              {selectedCategory}
            </motion.button>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap gap-x-6 gap-y-10 mx-5 justify-center">
        {content}
      </div>
    </div>
  );
}
