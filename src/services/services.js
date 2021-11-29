import { status } from "../utils"

export function getGroup(id) {
  return fetch(`${process.env.REACT_APP_API_URL}/api/groups/${id}`)
    .then(status).catch(e => {
      console.log(e)
    })
}

export function getGroups() {
  return fetch(`${process.env.REACT_APP_API_URL}/api/groups/`)
    .then(status).catch(e => {
      console.log(e)
    })
}

export function joinGroups(data) {
  return fetch(`${process.env.REACT_APP_API_URL}/api/members/join/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)

  })
    .then(status).catch(e => {
      console.log(e)
    })
}

export function leaveGroups(data) {
  return fetch(`${process.env.REACT_APP_API_URL}/api/members/leave/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)

  })
    .then(status).catch(e => {
      console.log(e)
    })
}

export function postComment(token, description, group, user) {
  return fetch(`${process.env.REACT_APP_API_URL}/api/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    },
    body: JSON.stringify({ description, group, user })
  })
    .then(status).catch(e => { console.log(e) })
}
