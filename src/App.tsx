import { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './App.css'

interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

function App() {
  const [todoList, setTodoList] = useState<Task[]>(JSON.parse(localStorage.getItem("todoList") || '[]'))

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  return (
    <>
      <TaskForm todoList={todoList} setTodoList={setTodoList} />
      <TaskList todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

export default App
