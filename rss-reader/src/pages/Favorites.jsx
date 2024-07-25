import Article from "../components/Article";
import { useSelector } from "react-redux";
import { getAllFavorites } from "../redux/slices/articlesSlices";
import NavigationBar from "../components/NavigationBar";
import { getIsHideRead } from "../redux/slices/hideReadSlices.js";
import { getCategoryToSort } from "../redux/slices/sortByCategory.js";
import { useState } from "react";

export default function Favorites() {
  const favArticles = useSelector(getAllFavorites);
  const isHideRead = useSelector(getIsHideRead);
  const categorySort = useSelector(getCategoryToSort);
  const [searchText, setSearchText] = useState("");

  let content;

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  content = favArticles
    .filter((article) => !isHideRead || !article.isRead)
    .filter(
      (article) =>
        categorySort.category === "all" ||
        article.category === categorySort.category
    )
    .filter((article) =>
      article.title.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((article, i) => <Article article={article} key={i} />);

  return (
    <div className="w-full mx-auto">
      <NavigationBar sendSearchText={handleSearchText} />
      <div className="flex flex-row flex-wrap gap-5 mx-5 justify-center">
        {content}
      </div>
    </div>
  );
}
