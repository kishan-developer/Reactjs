import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './Contexts/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // wrap ThemProvider

  <ThemeProvider>
    {/* are now is particulat children */}
    <App/>
  </ThemeProvider>
)
