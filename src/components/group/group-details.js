import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"

import {useFetchGroup} from "../../hooks/fetch-groups"
import {DateTime} from 'luxon' 
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from '@mui/styles'
import User from "../user/user"
import Button from "@mui/material/Button"
import { joinGroups } from "../../services/services";
import {useAuth} from "../../hooks/useAuth"
import { leaveGroups } from "../../services/services";


const useStyles = makeStyles( theme => ({
    dateTime: {
      fontSize: '18px',
      marginRight: '3px',
      marginTop:'10px',
      color: "red"
    },
    memberContainer: { 
      display: "grid",
      gridTemplateColumns: "100px auto"
    }
  }));


function GroupDetails() {

 const classes = useStyles()   

 const {id} = useParams()
 const {authData} = useAuth()
 const [data, loading, error] = useFetchGroup(id)
 const [group, setGroup] = useState(null)
 const [inGroup, setInGroup] = useState(false)
 const [isAdmin, setIsAdmin] = useState(false)

 useEffect( ()=> { 
    if(data?.members){
      if(authData?.user){
        setInGroup(!!data.members.find(member => member.user.id === authData.user.id))
        setIsAdmin(data.members.find(member => member.user.id === authData.user.id)?.admin)
      }
    }

     setGroup(data)
   
 }, [data])

 const joinHere = () => {
  joinGroups({user : authData.user.id, group:group.id}).then(
    res => {console.log(res)}
  )
 }

 const  leaveHere = () => {
  leaveGroups({user : authData.user.id, group:group.id}).then(
    res => {console.log(res)}
  )
 }



if (error) return <h1>Error</h1>
if (loading) return <h1>Loading</h1>

  return (
    <div >
        
        <Link to="/">Back </Link> 
        {group && 
        <React.Fragment>
        <h1>{group.name} {id}  </h1>
        <h2>{group.description}</h2>
        {inGroup ? 
        <Button onClick={()=> leaveHere()} variant="contained" color="primary">Leave Group</Button> 
        :
        <Button onClick={()=> joinHere()} variant="contained" color="primary">Join Group</Button>
        }
         
         


        <h3>Events</h3>
        {group.events.map (event => {
            const format = "yyyy-MM-dd'T'HH:mm:ss'Z'"
            const evtTime = DateTime.fromFormat(event.time, format)

            return <div key={event.id}> 
            <p>{event.team1} vs {event.team2}</p>
            
            <p>
             <CalendarTodayIcon className={classes.dateTime}/>{evtTime.toSQLDate()}
             <AccessTimeIcon className={classes.dateTime}/> {evtTime.toFormat('HH:mm')}</p>
            </div>

            
        })}

      <h3>Members</h3>
              {group.members.map (member => {
                  return <div key={member.id} className={classes.memberContainer}>
                    <User user={member.user}/> 
                  <p>{member.user.username}</p>
                  <p>{member.points} pts</p>
              
                  </div>

            
        })}
        </React.Fragment>
    }
    
    </div>
  );
}

export default GroupDetails;