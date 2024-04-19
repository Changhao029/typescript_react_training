import { Avatar, Box, Container, CssBaseline, Grid, TextField, Typography, Button } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleRegister = () => {
        // need to finish the validation part here or in the TextField

        // Store the user infor in the local storage
        let userList = JSON.parse(localStorage.getItem("userList") || '[]')
        userList.push({"name": name, "email": email, "password": password})
        localStorage.setItem("userList", JSON.stringify(userList))

        navigate("/login")
    }

    return(
        <>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box>
                    <Avatar alt="Avatar" src="../../../public/vite.svg" />
                    <Typography> Register </Typography>
                    <Box sx={{mt:3}}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item xs={12}>
                                <TextField 
                                    name="name"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField 
                                    name="email"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid >
                            <Grid item xs={12}>
                                <TextField 
                                    type="password"
                                    name="password"
                                    required
                                    fullWidth
                                    id="password"
                                    label="Password"
                                    autoFocus
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Grid>
                        </Grid>

                        <Button 
                            fullWidth
                            variant="contained"
                            sx={{ mt:3, mb: 2 }}
                            onClick={handleRegister}
                        >
                            Register
                        </Button>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login"> Already have an account? Login </Link>
                            </Grid>
                        </Grid>
                    </Box>                   
                </Box>
            </Container>
        </>
    )
}

export default Register