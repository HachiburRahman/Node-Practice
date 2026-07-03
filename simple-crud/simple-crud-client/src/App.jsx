
import './App.css'
import Users from './Components/Users'

const usersPromise=fetch('http://localhost:5000/users').then(res=>res.json())
function App() {
  

  return (
    <>
    <p>Learning CRUD with MONGODB</p>
    <Users usersPromise={usersPromise}></Users>
    </>
  )
}

export default App
