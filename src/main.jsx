import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LanguageConverter from './LanguageConverter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageConverter />
  </StrictMode>,
)
