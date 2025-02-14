import { Field, Formik } from "formik";
import { useDispatch } from "react-redux";

import { changeFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.value === " ") return;
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <Formik>
        <label className={s.label}>
          <span className={s.span}>🔎 Find your dearest and nearest</span>
          <Field
            className="input input-bordered"
            onChange={handleChange}
            placeholder="Search"
            type="text"
          />
        </label>
      </Formik>
    </div>
  );
};

export default SearchBox;
