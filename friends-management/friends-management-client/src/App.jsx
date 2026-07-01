
import { Suspense } from 'react'
import './App.css'
import Friends from './Components/Friends'

const friendsPromise=fetch('http://localhost:5000/friends/').then(res=>res.json())

function App() {

  return (
    <>
    <p>Friends Management</p>
    <Suspense>
      <Friends friendsPromise={friendsPromise}></Friends>
    </Suspense>
    </>
  )
}

export default App
