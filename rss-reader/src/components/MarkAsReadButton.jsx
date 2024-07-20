import { markAsRead, unMarkAsRead } from "../redux/slices/readSlices";
import { toggleRead } from "../redux/slices/articlesSlices";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MarkAsReadButton({ article }) {
  const dispatch = useDispatch();

  const handleChange = () => {
    const updatedArticle = { ...article, isRead: !article.isRead };

    if (article.isRead) {
      dispatch(toggleRead(article.link));
      dispatch(unMarkAsRead(updatedArticle));
    } else {
      dispatch(toggleRead(article.link));
      dispatch(markAsRead(updatedArticle));
    }
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="cursor-pointer"
      >
        <div>
          {article.isRead ? (
            <div className="flex gap-2" onClick={handleChange}>
              <input className="cursor-pointer" type="checkbox" checked />
              <p>Mark as unread</p>
            </div>
          ) : (
            <div className="flex gap-2" onClick={handleChange}>
              <input className="cursor-pointer" type="checkbox" />
              <p>Mark as read</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

MarkAsReadButton.propTypes = {
  article: PropTypes.object.isRequired,
};
