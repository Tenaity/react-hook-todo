import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemContext";
import { AuthContext } from "../contexts/AuthContext";
import { TOGGLE_AUTH } from "../reducers/types";
const Navbar = () => {
  const { isAuthenticated, dispatch } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;
  return (
    <div style={style} className="navbar">
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <button
            onClick={() =>
              dispatch({
                type: TOGGLE_AUTH,
              })
            }
          >
            {isAuthenticated ? <span>SignOut</span> : <span>Login</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
