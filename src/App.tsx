import { Route, Routes } from 'react-router-dom'
import './App.css'
import TaskHome from './components/task/TaskHome'
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<TaskHome />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
