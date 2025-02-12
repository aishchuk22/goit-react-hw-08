import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
        <label className={s.label}>
          Find contacts by name
        <input
            type="text"
            className={s.inputData}
            onChange={handleSearch}
          />
        </label>
    </div>
  );
};

export default SearchBox;