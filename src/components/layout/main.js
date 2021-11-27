import React from "react"
import GroupList from "../group/group-list";
import {Route, Switch} from 'react-router-dom'
import GroupDetails from "../group/group-details";
import {useAuth} from '../../hooks/useAuth'
import Register from "../user/register";
import Account from "../user/account"
import Event from "../events/event";
import EventForm from "../events/event-form";



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
      <Route path="/event/:id">
          <Event />
        </Route>
        <Route path="/event-form">
          <EventForm />
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