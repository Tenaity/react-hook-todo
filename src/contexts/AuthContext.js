import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/AuthReducer";
import { TOGGLE_AUTH } from "../reducers/types";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, dispatch] = useReducer(authReducer, false);

  const AuthContextData = {
    isAuthenticated,
    dispatch,
  };

  useEffect(() => alert(isAuthenticated ? "Login" : "Logout"));

  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
