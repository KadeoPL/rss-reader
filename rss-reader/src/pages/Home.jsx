import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from "../redux/slices/articlesSlices";
import Article from "../components/Article";
import Navigation from "../components/Navigation";

export default function Home() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.items);
  const articlesStatus = useSelector((state) => state.articles.status);
  const error = useSelector((state) => state.articles.error);
  const [hideRead, setHideRead] = useState(false);
  const [isSortByCategory, setIsSortByCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (articlesStatus === 'idle') {
      dispatch(fetchArticles());
    }
  }, [articlesStatus, dispatch]);

  const handleChange = () => {
    setHideRead((prev) => !prev);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    setIsSortByCategory(true)
  };

  let content;
  if (articlesStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (articlesStatus === 'succeeded') {
    const filteredArticles = articles
    .filter(article => !hideRead || !article.isRead)
    .filter(article => selectedCategory === 'all' || article.category === selectedCategory);
    content = filteredArticles.map(article => (
      <Article article={article} key={article.id} onData={handleCategorySelection}/>
    ));
  } else if (articlesStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className="w-full mx-auto">
      <Navigation />
      <div className="flex gap-2">
        <input type="checkbox" checked={hideRead} onChange={handleChange} />
        <p>Hide read</p>
      </div>
      <div>
        {isSortByCategory ? <button onClick={() => {setIsSortByCategory(false); setSelectedCategory('all')}}>{selectedCategory}</button> : <></>}
      </div>
      <div className="flex flex-row flex-wrap gap-x-6 gap-y-10 mx-5 justify-center">
        {content}
      </div>
    </div>
  );
}
