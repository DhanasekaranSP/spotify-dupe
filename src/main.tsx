import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from './App.tsx'
import "react-toastify/dist/ReactToastify.css";
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={false}
        theme="colored"
        icon={false}
      />

    </BrowserRouter>
  </StrictMode>,
)
