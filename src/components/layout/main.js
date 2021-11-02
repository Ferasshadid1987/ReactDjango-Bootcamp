import React, {useState, useEffect} from "react"
import GroupList from "../group/group-list";
import {Route, Switch} from 'react-router-dom'
import GroupDetails from "../group/group-details";
import {useAuth} from '../../hooks/useAuth'
import Register from "../user/register";
import Account from "../user/account"


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
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/account">
        <Account />
      </Route>
      </Switch>
    </div>
  );
}

export default Main;