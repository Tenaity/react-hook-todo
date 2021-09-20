import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemContext";
import { TodoContext } from "../contexts/TodoContext";
const TodoItem = ({ todo }) => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, dark, light } = theme;
  const style = isLightTheme ? light : dark;

  const { deleteTodo } = useContext(TodoContext);

  return (
    <li onClick={deleteTodo.bind(this, todo.id)} style={style}>
      {todo.title}
    </li>
  );
};

export default TodoItem;
