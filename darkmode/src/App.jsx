import { useContext } from 'react'
import ThemeContext from './context/ThemeContext';

import './App.css';

function App() {
  // use the useContext hook to get the state and function you want to provide 
  const { theme, toggleTheme } = useContext(ThemeContext);

  const mainClass = theme ? 'dark-mode' : 'light-mode';
  return (
    <main className={mainClass}>
      <button onClick={toggleTheme}>{mainClass}</button>
    </main>
  )
}

export default App;