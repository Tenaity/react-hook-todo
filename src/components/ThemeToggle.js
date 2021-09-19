import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemContext";
const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="toggle-btn">
      <button onClick={toggleTheme}>Dark Mode</button>
    </div>
  );
};

export default ThemeToggle;
