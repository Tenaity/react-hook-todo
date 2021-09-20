import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODO } from "../reducers/types";
export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    dispatch({
      type: SAVE_TODO,
      payload: { todos },
    });
  }, [todos]);

  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });
  }, []);

  const todoContextData = {
    todos,
    dispatch,
  };
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
