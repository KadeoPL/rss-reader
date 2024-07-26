import { Heart } from "iconsax-react";
import { toggleFavorite } from "../redux/slices/articlesSlices";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function FavoriteButton({ article }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(article.link));
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div>
          {article.isFavorite ? (
            <div className="flex gap-1 items-center">
              <Heart size={19} variant="Bold" color="red" />
            </div>
          ) : (
            <div className="flex gap-1 items-center">
              <Heart size={19} />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

FavoriteButton.propTypes = {
  article: PropTypes.object.isRequired,
};
