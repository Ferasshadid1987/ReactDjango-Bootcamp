import React, {useState} from "react"

import Button from "@mui/material/Button"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import {auth} from "../../services/user-services"
import {useAuth} from "../../hooks/useAuth" 
import {Link, useHistory} from "react-router-dom"
import User from "../user/user"

function Sidebar() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {authData, setAuth} = useAuth()
  const history = useHistory()
  

  const handleSubmit = async e => { 
    e.preventDefault()
    const data = await auth({username, password})
    setAuth(data)
  }

  const logout = () => {
    setAuth(null)
  }

  const account = () => {
    history.push("/account")
  }
  
  return (
    <div className="sidebar">
      {!authData ?
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
      <Button variant="contained" color="secondary" type="submit" >
        LOGIN
    </Button>
    <br/>
    <Link to="/register">Register here if you do not have an account</Link>
    </form>
     : <div>
       <User user={authData.user}/>
       <br/>
       <br/>
       <Button variant="contained" color="secondary" onClick={()=> logout()} >
        LOGOUT
    </Button>
    <Button variant="contained" color="secondary" onClick={()=> account()} >
        ACCOUNT
    </Button>
     </div>
     }
    </div>
  );
}

export default Sidebar;