import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  GlobalStyles  from './components/globalStyles/index.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalStyles>
    <App/>
  </GlobalStyles>
)
