import { React, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../contexts/TodoContext";
import { ADD_TODO } from "../reducers/types";
const TodoForm = ({ handleAddTodo }) => {
  const { dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleChangeTodo = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: {
        todo: {
          id: uuidv4(),
          title,
        },
      },
    });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter a new todo..."
        onChange={handleChangeTodo}
        value={title}
        required
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
