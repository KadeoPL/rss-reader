import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { markAsRead } from "../redux/slices/articlesSlices";

export default function MarkAsReadButton({ article }) {
  const dispatch = useDispatch();

  const handleMarkAsRead = () => {
    dispatch(markAsRead(article.link));
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={article.isRead}
        onChange={handleMarkAsRead}
        className="mr-1"
      />
      {article.isRead ? "Unmark as Read" : "Mark as Read"}
    </label>
  );
}

MarkAsReadButton.propTypes = {
  article: PropTypes.object.isRequired,
};
