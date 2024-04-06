import { Dispatch, SetStateAction } from "react"
import TaskItem from "./TaskItem"
import Grid from "@mui/material/Grid"

interface Task {
    id: number
    title: string
    description: string
    completed: boolean
}

interface TaskListInput {
    todoList: Task[]
    setTodoList: Dispatch<SetStateAction<Task[]>>
}

const TaskList: React.FC<TaskListInput> = (props) =>{
    return (
        <Grid container spacing={1} columns={12}>
            {props.todoList.map((task:Task) => <TaskItem task={task} todoList={props.todoList} setTodoList={props.setTodoList}/>)}
        </Grid>
    )
}


export default TaskList