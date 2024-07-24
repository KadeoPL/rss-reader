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
          className={`${category.color} py-1 px-3 text-sm rounded-md text-white cursor-pointer`}
        >
          {category.category}
        </div>
      ) : null}
    </>
  );
}
