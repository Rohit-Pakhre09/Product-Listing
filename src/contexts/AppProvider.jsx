import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
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

  return (
    <AppContext.Provider value={{ light, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
