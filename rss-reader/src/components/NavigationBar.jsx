import { Link, useSearchParams } from "react-router-dom";
import HideReadButton from "./HideReadButton";
import DiselectCategoryButton from "./DiselectCategoryButton";
import { useState, useEffect } from "react";

export default function NavigationBar({ sendSearchText }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchText = searchParams.get("search") || "";
  const [searchText, setSearchText] = useState(initialSearchText);

  useEffect(() => {
    sendSearchText(searchText);
  }, [searchText, sendSearchText]);

  const handleChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    if (newSearchText) {
      setSearchParams({ search: newSearchText });
    } else {
      setSearchParams({});
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-center p-5 bg-white mb-10 sticky top-0 shadow-lg">
      <div>
        <Link to="/" className="mr-5">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>

      <div className="flex flex-col md:flex-row md:items-center">
        <div className="flex flex-row gap-5 justify-center items-center mb-5 md:mb-0 md:mr-5">
          <DiselectCategoryButton />
          <HideReadButton />
        </div>
        <form>
          <input
            type="search"
            className="block border-2 border-gray-400 rounded-xl px-5 py-2 focus-visible:border-blue-300"
            placeholder="Search by title..."
            value={searchText}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </form>
      </div>
    </div>
  );
}
