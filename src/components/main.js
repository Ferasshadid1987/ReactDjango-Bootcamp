import React, {useState, useEffect} from "react"
import GroupList from "./group-list";
import {Route, Switch} from 'react-router-dom'
import GroupDetails from "./group-details";
import {useAuth} from '../hooks/useAuth'


function Main() {

  const {authData} = useAuth()

  return (
    <div className="main">
      {authData && <h3>{authData.user.username}</h3>}
        <Switch>
            <Route exact path="/">
      <GroupList/>
      </Route>
      <Route exact path="/details/:id">
        <GroupDetails />
      </Route>
      </Switch>
    </div>
  );
}

export default Main;