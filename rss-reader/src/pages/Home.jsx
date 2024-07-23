import { useSelector } from "react-redux";
import NavigationBar from "../components/NavigationBar.jsx";
import { getIsHideRead } from "../redux/slices/hideReadSlices.js";

import {
  selectAllArticles,
  getArticlesStatus,
  getArticlesError,
} from "../redux/slices/articlesSlices";

import Article from "../components/Article";

export default function Home() {
  const articles = useSelector(selectAllArticles);
  const status = useSelector(getArticlesStatus);
  const error = useSelector(getArticlesError);
  const isHideRead = useSelector(getIsHideRead);

  let content;

  if (status === "loading") {
    content = <div className="text-center my-5">Loading...</div>;
  } else if (status === "succeeded") {
    content = articles
      .filter((article) => !isHideRead || !article.isRead)
      .map((article, i) => <Article article={article} key={i} />);
  } else if (status === "failed") {
    content = (
      <>
        <h1>Articles not found</h1>
        <p className="text-center text-danger">{error}</p>
      </>
    );
  }

  return (
    <div className="w-full mx-auto">
      <NavigationBar />
      <div className="mx-8 flex flex-row justify-between"></div>
      <div className="flex flex-row flex-wrap gap-x-6 gap-y-10 mx-5 justify-center">
        {content}
      </div>
    </div>
  );
}
