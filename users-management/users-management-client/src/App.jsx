import { Suspense } from 'react'
import './App.css'
import Users from './components/Users'

function App() {
  const userPromise=fetch('http://localhost:5000/users').then(res=>res.json())
  

  return (
    <>
     <h3>Users Management</h3>
     <Suspense>
      <Users userPromise={userPromise}></Users>
     </Suspense>
    </>
  )
}

export default App
