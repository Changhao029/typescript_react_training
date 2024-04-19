import { Dispatch, SetStateAction, Fragment } from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"

interface Task {
    id: number
    title: string
    description: string
    completed: boolean
}

interface TaskItemInput {
    task: Task
    todoList: Task[]
    setTodoList: Dispatch<SetStateAction<Task[]>>
}

const TaskItem: React.FC<TaskItemInput> = (props) => {

    const completeButton = () => {
        const tempTodoList = [...props.todoList]
        const newTodoListCopy = tempTodoList.map(
            (item: Task) => {
                if (item.id === props.task.id) {
                    return {...item, completed: !item.completed}
                } else {
                    return item
                }
            }
        );
        props.setTodoList(newTodoListCopy)
    }

    const deleteButton = () => {
        const tempTodoList = [...props.todoList]
        const newTodoListCopy = tempTodoList.filter((e) => e.id != props.task.id)
        props.setTodoList(newTodoListCopy)
    }

    const taskCard = (
        <Fragment>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.task.id}
            </Typography>
            <Typography variant="h5" component="div">
                {props.task.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.task.description}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={ completeButton }>{props.task.completed? "uncompleted" : "completed"}</Button>
                <Button size="small" onClick={ deleteButton }>Delete</Button>
            </CardActions>
        </Fragment>
    )

    if (props.task.completed === true){
        return (
            <Grid item xs={12} md={4} lg={2}>
                <Box 
                    component="span"
                    sx={{ display: 'inline-block', mx:'2px', transform: 'scale(0.8)' }}
                >
                    <Card variant="outlined" style={{background: "green"}}>{taskCard}</Card>
                </Box>
            </Grid>
        )
    } else {
        return (
            <Grid item xs={12} md={4} lg={2}>
                <Box 
                    component="span"
                    sx={{ display: 'inline-block', mx:'2px', transform: 'scale(0.8)' }}
                >
                    <Card variant="outlined">{taskCard}</Card>
                </Box>
            </Grid>
        )
    }
}

export default TaskItem