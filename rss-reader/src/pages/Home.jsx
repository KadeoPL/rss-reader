import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchArticles } from "../redux/slices/articlesSlices";
import Article from "../components/Article";
import Navigation from "../components/Navigation";

export default function Home(){
    const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const isArticleFavorite = useSelector((state) => state.article.isFavorite)
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector ((state) => state.articles.error);
  
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch])

  let content;

  if (articlesStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (articlesStatus === 'succeeded') {
    content = articles.map((article, index) => (
      <Article article={article} key={index} isFavorite={isArticleFavorite}/>
    ));
  } else if (articlesStatus === 'failed') {
    content = <p>{error}</p>;
  }
  
  return (
    <div className="w-full mx-auto">
        <Navigation/>
      <div className="flex flex-row flex-wrap gap-5 mx-5 justify-center">
        {content}
      </div>
    </div>

  )

}