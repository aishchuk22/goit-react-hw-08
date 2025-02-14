import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-10">
      <p className="underline italic font-semibold">Welcome, {user.name}</p>
      <button className="btn bg-blue-500 shadow-sm shadow-indigo-950 border-none" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
