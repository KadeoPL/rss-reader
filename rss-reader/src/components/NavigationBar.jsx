import { Link } from "react-router-dom";
import HideReadButton from "./HideReadButton";
import { useState } from "react";

export default function NavigationBar() {
  const [isHide, setIsHide] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleIsHeadRead = (isHideRead) => {
    setIsHide(isHideRead);
    console.log(isHide);
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-center p-5 bg-white mb-10 sticky top-0 shadow-lg">
      <div>
        <Link to="/" className="mr-5">
          Home
        </Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <HideReadButton isHideRead={handleIsHeadRead} />
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          className="block border-2 border-gray-400 rounded-xl px-5 py-2 focus-visible:border-blue-300"
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
