
import { Suspense } from 'react'
import './App.css'
import Employee from './components/Employee'

const employeesPromise=fetch('http://localhost:5000/employees').then(res=>res.json())
function App() {
  

  return (
    <>
     <p>Employee Management</p>
     <Suspense><Employee employeesPromise={employeesPromise}></Employee></Suspense>
    </>
  )
}

export default App
