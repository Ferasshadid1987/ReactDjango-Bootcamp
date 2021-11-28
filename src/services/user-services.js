import { status } from "../utils"

export function auth(credentials){
    return fetch("http://159.65.53.3:8000/api/authenticate/", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(credentials)}
    ).then(status).catch( e => {console.log(e)})
}

export function register(userData){
    return fetch("http://159.65.53.3:8000/api/users/", {
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(userData)}
    ).then(status).catch( e => {console.log(e)
    })
}

export function changePassword(userData, userId, token){
    return fetch(`http://159.65.53.3:8000/api/users/${userId}/change_pass/`, {
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            "Authorization" : `Token ${token}`
        }, 
        body: JSON.stringify(userData)}
    ).then(status).catch( e => {console.log(e)
    })
}

export function uploadAvatar(profileID, data){
    return fetch(`http://159.65.53.3:8000/api/profile/${profileID}/`, {
        method:"PUT",
        body: data
    }).then(status).catch( e => {console.log(e)
    })
}
