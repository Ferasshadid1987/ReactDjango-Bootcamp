import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import {getGroup} from '../services/services'
import {useFetchGroup} from "../hooks/fetch-groups"
import {DateTime} from 'luxon' 
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { makeStyles } from '@mui/styles'



const useStyles = makeStyles( theme => ({
    dateTime: {
      fontSize: '18px',
      marginRight: '3px',
      marginTop:'10px',
      color: "red"
    },
  }));


function GroupDetails() {

 const classes = useStyles()   

 const {id} = useParams()
 const [data, loading, error] = useFetchGroup(id)
 const [group, setGroup] = useState(null)

 useEffect( ()=> { 
     setGroup(data)
   
 }, [data])

if (error) return <h1>Error</h1>
if (loading) return <h1>Loading</h1>

  return (
    <div >
        
        <Link to="/">Back </Link> 
        {group && 
        <React.Fragment>
        <h1>{group.name} {id}  </h1>
        <h2>{group.description}</h2>
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
        </React.Fragment>
    }
    
    </div>
  );
}

export default GroupDetails;