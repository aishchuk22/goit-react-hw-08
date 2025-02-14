import { NavLink } from "react-router-dom";

const AuthNav = () => {

  return (
    <div className="flex gap-6 font-semibold cursor-pointer underline">
      <NavLink class="link link-hover" to="/register">
        Register
      </NavLink>
      <NavLink class="link link-hover" to="/login">
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
