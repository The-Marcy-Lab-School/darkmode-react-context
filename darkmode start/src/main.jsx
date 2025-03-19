import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeProvider from './context/ThemeProvider'
import './index.css'
import App from './App.jsx'
// TODO: Wrap the App component in the ThemeProvider component
createRoot(document.getElementById('root')).render(
  <StrictMode>
 
      <App />
   
  </StrictMode>,
)
