import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContextProvider } from './components/context/authContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ToastContainer/>
  <ContextProvider>

    <App />
    </ContextProvider>


  <ToastContainer/>
    
   

  </BrowserRouter>
)
