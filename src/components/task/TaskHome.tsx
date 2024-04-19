import { useEffect, useState } from "react"
import '../../App.css'
import TaskForm from "./TaskForm"
import TaskList from "./TaskList"

interface Task {
    id: number
    title: string
    description: string
    completed: boolean
}

function TaskHome() {
    const [todoList, setTodoList] = useState<Task[]>(JSON.parse(localStorage.getItem("todoList") || "[]"))

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList))
    }, [todoList])

    return(
        <>
            <TaskForm todoList={todoList} setTodoList={setTodoList} />
            <TaskList todoList={todoList} setTodoList={setTodoList} />
        </>
    )
}

export default TaskHome