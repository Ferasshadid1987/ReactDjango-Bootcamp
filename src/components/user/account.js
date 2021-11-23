import React, {useState} from "react"

import {useAuth} from '../../hooks/useAuth'
import {Link} from "react-router-dom"
import Button from "@mui/material/Button"


import { uploadAvatar } from "../../services/user-services";
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { changePassword } from "../../services/user-services";
import { NotificationManager} from 'react-notifications';

function Account() {

    
    
    const {authData} = useAuth()
    const [image, setImage] = useState()
    //const [username, setUsername] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    //const [email, setEmail] = useState('')

    
    const passMatch = () => {
        return password === password2;
    }
    
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

     const uploadFile = async e=> {
       e.preventDefault()
       const uploadData = new FormData();
       uploadData.append("image", image, image.name)

       const uploaded = await uploadAvatar(authData.user.profile.id, uploadData)
       if (uploaded){
        NotificationManager.success('Success message', 'Title here')
       } else {
        NotificationManager.error('Error message')
       }
     }
     const changePass = async e=> {
      e.preventDefault()
      if(passMatch()){
        const passData = await changePassword({old_password:oldPassword, new_password:password}, authData.user.id)
        if (passData){
            console.log(passData)
            NotificationManager.success('Success message', 'Title here')
        
            
        }
    } else {
        console.log("password do not match")
        NotificationManager.info('Info message')
    }
      
    }
      

return (
    <div >
    <Link to="/">Back </Link> 
      <h1>Change Your Picture</h1>
      <form onSubmit={uploadFile}>
        <label>
          <p>Upload your Photo</p>
          <TextField type="file" onChange={e => setImage(e.target.files[0])} />
        </label>
        <Button type="file" variant="contained" color="primary">Upload File</Button>
      </form>
      <br/>
      <h1>Change Your Password</h1>
      <form onSubmit={changePass}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Old password" variant="standard" type="password"
        onChange ={ e => setOldPassword(e.target.value)} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="new password" variant="standard" type="password"
        onChange ={ e => setPassword(e.target.value)} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Repeat Password" variant="standard" type="password"
        onChange ={ e => setPassword2(e.target.value)} />
      </Box>
        <Button type="file" variant="contained" color="primary">Change Password</Button>
      </form>
      <div>
     
    </div>
    </div>
  );
}

export default Account;

