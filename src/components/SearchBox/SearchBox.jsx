import { useDispatch } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";

import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = e => {
    if (e.target.value === " ") return;
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
        <label className={s.searchLabel}>
          <span className={s.span}>Find contacts by name or phone number</span>
        <input
            className="input input-primary"
            onChange={handleSearch}
            placeholder="Search"
            type="text"
          />
        </label>
    </div>
  );
};

export default SearchBox;