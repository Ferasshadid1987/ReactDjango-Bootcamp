import React, {useState} from "react"

import {useAuth} from '../../hooks/useAuth'
import {Link} from "react-router-dom"
import Button from "@mui/material/Button"

import TextField from '@mui/material/TextField'

import { uploadAvatar } from "../../services/user-services";


function Account() {

    
    
    const {authData} = useAuth()
    const [image, setImage] = useState()
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

     const uploadFile = async e=> {
       e.preventDefault()
       const uploadData = new FormData();
       uploadData.append("image", image, image.name)

       await uploadAvatar(authData.user.profile.id, uploadData)
     }
      

return (
    <div >
    <Link to="/">Back </Link> 
      <h1>Account</h1>
      <form onSubmit={uploadFile}>
        <label>
          <p>Upload your Photo</p>
          <TextField type="file" onChange={e => setImage(e.target.files[0])} />
        </label>
        <Button type="file" variant="contained" color="primary">Upload File</Button>
      </form>
      <div>
     
    </div>
    </div>
  );
}

export default Account;