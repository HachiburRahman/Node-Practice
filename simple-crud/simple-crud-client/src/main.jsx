import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UserDetails from './Components/UserDetails.jsx'
import UpdateUser from './Components/UpdateUser.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/users/:id',
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
    element:<UserDetails></UserDetails>
  },
  {
     path:'/update/:id',
    loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
    element:<UpdateUser></UpdateUser>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
