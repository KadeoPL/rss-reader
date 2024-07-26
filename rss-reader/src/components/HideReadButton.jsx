import { useDispatch, useSelector } from "react-redux";
import {
  toggleIsHideRead,
  getIsHideRead,
} from "../redux/slices/hideReadSlices";

export default function HideReadButton() {
  const dispatch = useDispatch();
  const isHide = useSelector(getIsHideRead);

  const onChange = () => {
    dispatch(toggleIsHideRead(!isHide));
  };

  return (
    <label>
      <input
        type="checkbox"
        onChange={onChange}
        checked={isHide}
        className="mr-1"
      />
      Hide read
    </label>
  );
}
