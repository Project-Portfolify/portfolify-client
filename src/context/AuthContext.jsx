import React, { createContext, useState } from "react";

const AuthContext = createContext();

// provide the context
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("auth") !== null //default value
  );

  const getToken = () => {
    return localStorage.getItem("auth");
  };

  // Login Function
  const login = (token) => {
    localStorage.setItem("auth", token);
    setIsAuthenticated(true);
  };

  // Log Out Function
  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };
