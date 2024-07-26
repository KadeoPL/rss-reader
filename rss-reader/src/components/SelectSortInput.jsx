import { useDispatch, useSelector } from "react-redux";
import { setSortBy, getSortBy } from "../redux/slices/sortSlices";

export default function SelectSortInput() {
  const dispatch = useDispatch();
  const sortBy = useSelector(getSortBy);

  const handleInput = (e) => {
    dispatch(setSortBy(e.target.value));
  };
  return (
    <select value={sortBy} onInput={handleInput}>
      <option value="date">Date</option>
      <option value="title">Title</option>
      <option value="author">Author</option>
    </select>
  );
}
