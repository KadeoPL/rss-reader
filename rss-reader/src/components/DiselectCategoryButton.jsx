import { useDispatch, useSelector } from "react-redux";
import {
  diselectCategory,
  getCategoryToSort,
} from "../redux/slices/sortByCategory";

export default function DiselectCategoryButton() {
  const dispatch = useDispatch();
  const category = useSelector(getCategoryToSort);

  const handleClick = () => {
    dispatch(diselectCategory());
  };

  return (
    <>
      {category.category !== "all" ? (
        <div
          onClick={handleClick}
          className={`${category.color} flex py-1 px-3 text-sm rounded-md text-white cursor-pointer items-center gap-1 hover:scale-105 ease-in-out duration-300`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 hover:rotate-180 ease-in-out duration-300"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
          {category.category}
        </div>
      ) : null}
    </>
  );
}
