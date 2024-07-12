import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchArticles } from "./redux/slices/articlesSlices"
import Article from "./components/Article"

function App() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
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
      <Article article={article} key={index} />
    ));
  } else if (articlesStatus === 'failed') {
    content = <p>{error}</p>;
  }
  
  return (
    <>
      {content}
    </>
  )
}

export default App
