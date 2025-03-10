import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

// provide the context
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // verify if is storage
  useEffect(() => {
    const auth = localStorage.getItem("auth") === "true";
    setIsAuthenticated(auth);
  }, []);

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
