import { Dispatch, SetStateAction, useState } from "react"
import {TextField, Button, Stack} from "@mui/material"

interface Task {
    id: number
    title: string
    description: string
    completed: boolean
}

interface TaskFormInput {
    todoList: Task[]
    setTodoList: Dispatch<SetStateAction<Task[]>>
}

const TaskForm: React.FC<TaskFormInput> = (props) =>{

    const [count, setCount] = useState(props.todoList.length + 1)
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const createClick = () => {
        setCount((c) => c + 1)
        const tempTodoList = [...props.todoList]
        tempTodoList.push({"id": count, "title": taskTitle, "description": taskDescription, "completed": false})
        props.setTodoList(tempTodoList)
    }

    return (
        <>
            <h2>My Todo List</h2>
            <p>total {props.todoList.length}</p>
            <Stack className="createBar" direction="row" spacing={2} justifyContent="center">
                <TextField id="task-title" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} label="title" variant="outlined" />
                <TextField id="task-description" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} label="description" multiline />
                <Button variant="contained" onClick={createClick}>Create</Button>
            </Stack>
        </>
    )
}

export default TaskForm