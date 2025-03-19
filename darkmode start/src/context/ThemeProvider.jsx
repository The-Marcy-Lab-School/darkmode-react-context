// TODO: Create a ThemeProvider component 
// that will wrap the entire application 
// and provide the `theme` state and the `toggleThem`e function to all the components.
import { useState } from "react";

import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
