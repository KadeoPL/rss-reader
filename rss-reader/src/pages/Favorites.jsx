import Article from "../components/Article";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

export default function Favorites() {
  const favoriteArticles = useSelector((state) => state.favorites.items);
  const [hideRead, setHideRead] = useState(false);

  const filteredArticles = useMemo(() => {
    return favoriteArticles.filter((article) => !hideRead || !article.isRead);
  }, [favoriteArticles, hideRead]);

  return (
    <div className="w-full mx-auto">
      <Navigation hideRead={hideRead} setHideRead={setHideRead} />
      <div className="flex justify-center mb-5">
        <h1 className="text-2xl">Favorites</h1>
      </div>
      <div className="flex flex-row flex-wrap gap-5 mx-5 justify-center">
        {filteredArticles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
}
