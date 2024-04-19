import { Avatar, Box, Container, TextField, Typography, Button, Grid} from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

interface User {
    name: string
    email: string
    password: string
}

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassowrd] = useState("")

    const navigate = useNavigate();

    const handleLogin = () => {
        let userList = JSON.parse(localStorage.getItem("userList") || '[]')
        console.log(userList)

        const filter_result = userList.filter((user:User) => {
            if (user.email == email && user.password == password) {
                return user
            }
        })

        console.log(filter_result)

        if (filter_result.length != 0) {
            navigate("/")
        }else{
            console.log('fail')
        }
    };

    return(
        <>
            <Container>
                <Box
                    sx={{
                        mt: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}>
                        <Avatar alt="Avatar" src="../../../public/vite.svg" />
                        <Typography variant="h5"> Login </Typography>
                        <Box>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <TextField 
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassowrd(e.target.value);
                                }}
                            />

                            <Button 
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                                onClick={handleLogin}
                            >
                                Login
                            </Button>

                            <Grid container justifyContent={"flex-end"}>
                                <Grid item>
                                    <Link to="/register">Don't have an account? Register</Link>
                                </Grid>
                            </Grid>
                        </Box>
                </Box>
            </Container>
        </>
    )
}

export default Login