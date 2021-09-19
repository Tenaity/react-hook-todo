import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({ handleAddTodo }) => {
  const [title, setTitle] = useState("aaa");

  const handleChangeTodo = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo({
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
