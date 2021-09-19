import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemContext";
const TodoItem = ({ todo, handleDelete }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;
  return (
    <li onClick={handleDelete.bind(this, todo.id)} style={style}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
