import React, {useState, useEffect} from "react"

import {useAuth} from '../../hooks/useAuth'
import {Link, useHistory} from "react-router-dom"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import { register } from "../../services/user-services";
import {auth} from "../../services/user-services"


function Register() {

    const history = useHistory()
    const {authData, setAuth} = useAuth()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [email, setEmail] = useState('')

    
    const passMatch = () => {
        return password === password2;
    }
    
    const handleSubmit = async e => { 
        e.preventDefault()
        if(passMatch()){
            const regData = await register({username, email, password, profile:{is_premium:false}})
            if (regData){
                console.log(regData)
                const data = await auth({username, password})
                setAuth(data)
                history.push("/account")
                
            }
        } else {
            console.log("password do not match")
        }
        }
      

return (
    <div >
    <Link to="/">Back </Link> 
      <h1>Register</h1>
      <div >
      <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="username" variant="standard"
        onChange ={ e => setUsername(e.target.value)} />

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="password" variant="standard" type="password"
        onChange ={ e => setPassword(e.target.value)} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="RepeatPassword" variant="standard" type="password"
        onChange ={ e => setPassword2(e.target.value)} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="email" variant="standard"
        onChange ={ e => setEmail(e.target.value)} />

      </Box>
      <br/>
      <Button variant="contained" color="secondary" type="submit" >
        Register
    </Button>
    <br/>
    <Link to="/register">Register here if you do not have an account</Link>
    </form>
    </div>
    </div>
  );
}

export default Register;