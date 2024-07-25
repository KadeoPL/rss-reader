import categoryColor from "../functions/categoryColor";
import { useDispatch } from "react-redux";
import { selectCategory } from "../redux/slices/sortByCategory";
import { useSearchParams } from "react-router-dom";

export default function SelectCategoryButton({ text }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const bgCategoryColor = categoryColor(text);

  const handleClick = () => {
    dispatch(selectCategory({ category: text, color: bgCategoryColor }));
    setSearchParams({ category: text });
  };

  return (
    <div
      onClick={handleClick}
      className={`${bgCategoryColor} py-1 px-3 text-sm rounded-md text-white cursor-pointer`}
    >
      {text}
    </div>
  );
}
