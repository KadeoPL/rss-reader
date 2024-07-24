import PropTypes from "prop-types";
import { format } from "date-fns";
import { NoteText } from "iconsax-react";
import FavoriteButton from "./FavoriteButton";
import MarkAsReadButton from "./MarkAsReadButton.jsx";
import { motion } from "framer-motion";
import SelectCategoryButton from "./SelectCategoryButton.jsx";

// eslint-disable-next-line react/prop-types
export default function Article({ article }) {
  const pubDate = new Date(article.pubDate);
  const formattedDate = format(pubDate, "dd.MM.yyyy");

  const backgroundImage = {
    backgroundImage: `url(${article.image})`,
  };

  return (
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
      }}
      transition={{ duration: 0.5 }}
      className="w-[320px] h-[460px] flex flex-col bg-white rounded-2xl shadow-md"
    >
      <div
        style={backgroundImage}
        className="w-full h-[200px] bg-cover bg-center rounded-2xl"
      ></div>
      <div className="flex flex-col flex-1 p-5">
        <div className="flex flex-row justify-between items-center text-sm hover:cursor-pointer">
          <SelectCategoryButton text={article.category} />
          <div className="flex flex-row flex-wrap text-xs ml-2">
            <p>{article.author}, </p>
            <p>{formattedDate}</p>
          </div>
        </div>
        <div className="flex-1 overflow-hidden mb-5 mt-3">
          <a href={article.link} className="font-bold text-lg leading-3 my-2">
            {article.title}
          </a>
          <p className="line-clamp-3 text-sm mt-2">{article.description}</p>
        </div>
        <div>
          <div className="flex flex-row justify-between text-sm items-center">
            <FavoriteButton article={article} />
            <MarkAsReadButton article={article} />
            <div className="flex flex-row gap-1 items-center">
              <NoteText size={16} />
              <p>Add notes</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    pubDate: PropTypes.string.isRequired,
    author: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
  isFavorite: PropTypes.bool,
};
