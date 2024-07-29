import { useDispatch, useSelector } from "react-redux";
import { setSortBy, getSortBy, setSortOrder, getSortOrder } from "../redux/slices/sortSlices";

export default function SelectSortInput() {
  const dispatch = useDispatch();
  const sortBy = useSelector(getSortBy);
  const sortOrder = useSelector(getSortOrder);

  const handleInput = (e) => {
    dispatch(setSortBy(e.target.value));
  };

    const handleSortOrderChange = (e) => {
        dispatch(setSortOrder(e.target.value));
    };

  return (
      <div>
          <select value={sortBy} onInput={handleInput}>
              <option value="date">Date</option>
              <option value="title">Title</option>
              <option value="author">Author</option>
          </select>
          <select value={sortOrder} onChange={handleSortOrderChange}>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
          </select>
      </div>

  );
}
