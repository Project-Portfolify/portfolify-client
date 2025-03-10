import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("auth") || null);

  useEffect(() => {
    const storedToken = localStorage.getItem("auth");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const getToken = () => token;

  const login = (newToken) => {
    localStorage.setItem("auth", newToken);
    setToken(newToken);
  };

  // Log Out Function
  const logout = () => {
    localStorage.removeItem("auth");
    setToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        token,
        login,
        logout,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
