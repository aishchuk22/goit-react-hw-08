import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

const UserMenu = () => {

    const user = useSelector(selectUser);
    
    const dispatch = useDispatch();
    
    return (
    <div className="flex items-center gap-20">
      <p>Welcome, {user.name}</p>
      <button className="btn btn-primary" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;