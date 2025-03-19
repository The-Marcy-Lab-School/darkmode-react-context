// TODO: Import the useContext hook and the ThemeContext from the context/ThemeContext file

import './App.css';

function App() {
  // TODO: Use the useContext hook to get the state and function you want to provide
  

  const mainClass = theme ? 'dark-mode' : 'light-mode';
  return (
    <main className={mainClass}>
      <button onClick={toggleTheme}>{mainClass}</button>
    </main>
  )
}

export default App;