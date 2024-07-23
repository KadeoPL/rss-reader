import Article from "../components/Article";
import { useSelector } from "react-redux";
import { getAllFavorites } from "../redux/slices/articlesSlices";
import NavigationBar from "../components/NavigationBar";
import { getIsHideRead } from "../redux/slices/hideReadSlices.js";

export default function Favorites() {
  const favArticles = useSelector(getAllFavorites);
  const isHideRead = useSelector(getIsHideRead);

  let content;

  content = favArticles
    .filter((article) => !isHideRead || !article.isRead)
    .map((article, i) => <Article article={article} key={i} />);

  return (
    <div className="w-full mx-auto">
      <NavigationBar />
      <div className="flex flex-row flex-wrap gap-5 mx-5 justify-center">
        {content}
      </div>
    </div>
  );
}
