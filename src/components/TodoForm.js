import { React, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../contexts/TodoContext";
const TodoForm = ({ handleAddTodo }) => {
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");

  const handleChangeTodo = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
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
