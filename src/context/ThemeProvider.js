import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const method = () => {
    console.log("from theme provider");
  };

  return (
    <ThemeContext.Provider value={{ theme: "just for testing", method }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
