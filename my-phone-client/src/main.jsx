import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './components/Main.jsx';
import Phones from './components/Phones.jsx';
import Phone from './components/Phone.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/phones',
        element:<Phones></Phones>,
        loader:()=>fetch('http://localhost:5000/phones')
      },
      {
        path:'/phones/:id',
        element:<Phone></Phone>,
        loader:({params})=>fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ]

  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
