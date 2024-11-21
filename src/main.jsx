import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css';
import App from './components/App.jsx'
import { appRouter } from './components/App.jsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
