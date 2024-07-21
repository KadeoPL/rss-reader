import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import chooseCategoryColor from "../functions/categoryColor";
import { CloseCircle } from "iconsax-react";

export default function Navigation({
  hideRead,
  setHideRead,
  isSortByCategory,
}) {
  const categoryColor = chooseCategoryColor(category);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = () => {
    setHideRead((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-center p-5 bg-white mb-10 sticky top-0 shadow-lg">
      <div>
        <Link to="/" className="mr-5">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div></div>
      <div className="flex flex-col jusify-center items-center gap-5 md:flex-row">
        <div>
          {isSortByCategory && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              className={`${categoryColor} py-1 px-3 text-sm rounded-md text-white flex gap-2 items-center`}
              onClick={() => {
                setSearchParams({});
              }}
            >
              <CloseCircle size={16} />
              {category}
            </motion.button>
          )}
        </div>
        <div className="flex gap-2 cursor-pointer" onClick={handleChange}>
          <input type="checkbox" checked={hideRead} readOnly />
          <p>Hide read</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="block border-2 border-gray-400 rounded-xl px-5 py-2 focus-visible:border-blue-300"
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
}

Navigation.propTypes = {
  hideRead: PropTypes.bool.isRequired,
  setHideRead: PropTypes.func.isRequired,
};
