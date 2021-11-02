import React, {useState, useEffect} from "react"

import {useAuth} from '../../hooks/useAuth'
import {Link} from "react-router-dom"
import Button from "@mui/material/Button"
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import EmailIcon from '@mui/icons-material/Email';
import { register } from "../../services/user-services";


function Account() {

    
    
    //const {authData} = useAuth()
    //const [username, setUsername] = useState('')
   // const [password, setPassword] = useState('')
    //const [password2, setPassword2] = useState('')
    //const [email, setEmail] = useState('')

    
   // const passMatch = () => {
    //    return password === password2;
   // }
    
    //const handleSubmit = async e => { 
    //    e.preventDefault()
    //    if(passMatch()){
    //        const regData = await register({username, email, password, profile:{is_premium:false}})
     //       if (regData){
     //           console.log(regData)
     //       }
     //   } else {
     //       console.log("password do not match")
     //   }
     //   }
      

return (
    <div >
    <Link to="/">Back </Link> 
      <h1>Account</h1>
      <div >
     
    </div>
    </div>
  );
}

export default Account;