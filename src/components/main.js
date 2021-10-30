import React, {useState, useEffect} from "react"
import GroupList from "./group-list";
import {Route, Switch} from 'react-router-dom'
import GroupDetails from "./group-details";


function Main() {

  
  return (
    <div className="main">
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