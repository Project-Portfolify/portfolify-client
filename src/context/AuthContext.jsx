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

  // Login Function
  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  // Log Out Function
  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthProvider };