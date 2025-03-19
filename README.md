# React-context

This documentation will show you how to implement a generic dark mode toggle using Context in React.

## What is Context?

React Context — the combination of:

- an object where we can store global data and

- a "wrapper" component that provides its data to all descendants

`createContext` — A function exported from react that creates a new Context object.

`Context.Provider` — A component created from a Context object that provides all of its descendants with access to the Context object's values.

`useContext` — A React hook is used to retrieve the values of a Context object.

You can read up and see more examples [here](https://marcylabschool.gitbook.io/marcy-lab-school-docs/mod-7-react/5-react-context).

## Using Context to make our Dark/Light mode

1. Create your context:
   1. In your `src` directory make a new directory called context.
   2. Make a new file called `ThemeContext.jsx`.

```jsx
// File: src/context/ThemeContext.jsx
// import `createContext` from 'react
import { createContext } from "react";

// create the context object using `createContext`
const ThemeContext = createContext();

// export so that you can use it when needed
export default ThemeContext;
```

2. Create your Context Provider
   1. In your context folder create a new file called `ThemeProvider.jsx`
   2. Make the provider function so that you can provide context to your components

```jsx
// File: src/context/ThemeProvider.jsx
// import the context you just created
import ThemeContext from "./ThemeContext";

// create the Provider function
const ThemeProvider = ({ children }) => {
//This state is the context we want to provide to other components
  const [theme, setTheme] = useState(false);

//This function is context we want to provide to other components
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

//return the Context.Provider with the context you want to provide
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
// NOTE: the children represent all of the child elements of App component

// export the Provider
export default ThemeProvider;
```

3. Add the Provider to your `Main.jsx`

```jsx
// File: src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
//Import the Provider component
import ThemeProvider from './context/ThemeProvider'
import './index.css'
import App from './App'

//Wrap the Provider component around the App component 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
```

4. Add the Context to your `App.jsx`

5. Add button to toggle between the themes

```jsx
// File: App.jsx
import { useContext } from 'react'
import ThemeContext from './context/ThemeContext';

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
```

6. Add to your CSS dark and light styling

```css
/* App.css */
.light-mode {
  background-color: #ffffff;
  color: #000000;
}

.dark-mode {
  background-color: #121212;
  color: #ffffff;
}
```
