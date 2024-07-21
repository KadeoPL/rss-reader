import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { markAsRead, unMarkAsRead } from "../redux/slices/readSlices";
import { useEffect, useState } from "react";

export default function MarkAsReadButton({ article }) {
  const dispatch = useDispatch();
  const readArticles = useSelector((state) => state.read.items);
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    const isArticleRead = readArticles.some(
      (item) => item.link === article.link
    );
    setIsRead(isArticleRead);
  }, [readArticles, article.link]);

  const handleMarkAsRead = () => {
    if (isRead) {
      dispatch(unMarkAsRead(article));
    } else {
      dispatch(markAsRead(article));
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isRead}
        onChange={handleMarkAsRead}
        className="mr-1"
      />
      {isRead ? "Unmark as Read" : "Mark as Read"}
    </label>
  );
}

MarkAsReadButton.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    author: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
