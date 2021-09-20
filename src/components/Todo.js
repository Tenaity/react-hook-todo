import { React, useContext } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContext } from "../contexts/TodoContext";
import { AuthContext } from "../contexts/AuthContext";
const Todo = () => {
  const { todos } = useContext(TodoContext);
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? (
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Todo;
