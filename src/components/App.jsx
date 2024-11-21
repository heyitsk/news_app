import { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import Body from './Body.jsx'
import Error from './Error.jsx';
import Sports from './Sports.jsx'
import Business from './Business.jsx'

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


function App() {

  return (
    <>
    <Header/>
    <br></br>
    <Outlet/>
      
    
    </>
  )
}
export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/sports",
        element:<Sports/>
      },
      {
        path:"/Business",
        element:<Business/>
      }
    ],
    errorElement:<Error/>
  }
])

export default App
