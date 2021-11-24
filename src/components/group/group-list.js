import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {getGroups} from "../../services/services"


function GroupList() {

 // const group = 'baseball bat, cap, yo-yo, fireworks'
 // const groups = groups.split(',')

  const [groups, setGroups] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect( ()=> { 
    setLoading(true)
    const getData = async () => {
      await getGroups()
      .then(data => {
        setGroups(data)
        setLoading(false)
      }).catch( e => {
        setError(true)
        setLoading(false)
      })
    }
    getData()
  }, [])

if (error) return <h1>Error</h1>
if (loading) return <h1>Loading</h1>




  return (
    <div >
      { groups && groups.map (group => { 
        return (
        <Link key={group.id} to={`/details/${group.id}`}>
            <p >{group.name}  {group.location}</p>
        </Link>
      )})
      
      }
    </div>
  );
}

export default GroupList;