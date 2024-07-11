import { useEffect, useState } from "react";
import RSSParser from "./utils/rssParser"

function App() {
  const [articles, setArticles] = useState([]);

  useEffect (() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await RSSParser();
        setArticles(fetchedArticles);
      } catch (e){
        console.error(e)
      }
    }
    fetchArticles();
  })
  
  return (
    <>
    {articles.map(article => {
      <p>{article.title}</p>
    })}
    </>
  )
}

export default App
