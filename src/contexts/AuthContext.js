import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const toggleAuth = () => {
    setAuthentication(!isAuthenticated);
  };
  const AuthContextData = {
    isAuthenticated,
    toggleAuth,
  };
  useEffect(() => {
    alert(isAuthenticated ? "Login Successful" : "Login Failure");
  }, [isAuthenticated]);
  return (
    <AuthContext.Provider value={AuthContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
