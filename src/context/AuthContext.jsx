import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(u => u.email === email && u.password === password);
    console.log("AuthContext user:", user);
    if (found) {
      setUser(found);
      localStorage.setItem("user", JSON.stringify(found));
      toast.success("Logged in successfully!");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.some(u => u.email === email);
    if (exists) {
      toast.error("Email already exists!");
      return false;
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;