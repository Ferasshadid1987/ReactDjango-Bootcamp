import React, {useState, useEffect} from "react"

import Button from "@mui/material/Button"


function Sidebar() {

  
  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <Button variant="contained" color="secondary" >
        My Button
    </Button>
    </div>
  );
}

export default Sidebar;