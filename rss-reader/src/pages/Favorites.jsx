import Article from "../components/Article";
import { useSelector } from "react-redux";
import { getAllFavorites } from "../redux/slices/articlesSlices";
import NavigationBar from "../components/NavigationBar";

export default function Favorites() {
  const favArticles = useSelector(getAllFavorites);

  return (
    <div className="w-full mx-auto">
      <NavigationBar />
      <div className="flex flex-row flex-wrap gap-5 mx-5 justify-center">
        {favArticles.map((article, i) => (
          <Article article={article} key={i} />
        ))}
      </div>
    </div>
  );
}
