import categoryColor from "../functions/categoryColor";
import { useDispatch } from "react-redux";
import { selectCategory } from "../redux/slices/sortByCategory";

export default function SelectCategoryButton({ text }) {
  const dispatch = useDispatch();
  const bgCategoryColor = categoryColor(text);
  const handleClick = () => {
    dispatch(selectCategory({ category: text, color: bgCategoryColor }));
  };
  return (
    <div
      onClick={handleClick}
      className={`${bgCategoryColor} py-1 px-3 text-sm rounded-md text-white`}
    >
      {text}
    </div>
  );
}
