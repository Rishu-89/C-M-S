import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
<<<<<<< HEAD
import { ContextProvider } from './components/context/authContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ToastContainer/>
  <ContextProvider>

    <App />
    </ContextProvider>
=======

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ToastContainer/>
    <App />
   
>>>>>>> 3d499b9546485dafc73fa5a0b67f92c91966f5da
  </BrowserRouter>,
)
