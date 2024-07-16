
import { useSelector } from "react-redux"
import Article from "../components/Article";
import Navigation from "../components/Navigation";

export default function Home(){
  const articles = useSelector((state) => state.articles.items);
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector ((state) => state.articles.error);

  let content;

  if (articlesStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (articlesStatus === 'succeeded') {
    content = articles.map(article => (
      <Article article={article} key={article.id}/>
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