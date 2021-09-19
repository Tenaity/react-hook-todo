import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemContext";
const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;
  return (
    <div style={style} className="navbar">
      <h1>My Hooks App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
    </div>
  );
};

export default Navbar;
