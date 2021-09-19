import { React, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "viec lam so 1" },
    { id: 2, title: "viec lam so 2" },
    { id: 3, title: "viec lam so 3" },
  ]);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <div className="todo-list">
      <TodoForm handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
