// src/contexts/AppProvider.js
import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Theme
  const [light, setLight] = useState(() => {
    const saved = localStorage.getItem("UC-Theme");
    return saved ? saved === "light" : false;
  });

  const toggleTheme = () => {
    setLight((theme) => {
      const newTheme = !theme;
      localStorage.setItem("UC-Theme", newTheme ? "light" : "dark");
      return newTheme;
    });
  };

  // Login token
  const [token, setToken] = useState(
    () => localStorage.getItem("UC-Token") || null
  );

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem("UC-Token", newToken);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("UC-Token");
  };

  return (
    <AppContext.Provider value={{ light, toggleTheme, token, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
