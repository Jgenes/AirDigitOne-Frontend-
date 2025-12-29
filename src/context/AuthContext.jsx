import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(token ? decodeToken(token) : null);

  function decodeToken(token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); // decode JWT payload
      return { id: payload.id, role: payload.role, email: payload.email };
    } catch (err) {
      return null;
    }
  }

  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(decodeToken(newToken));
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
