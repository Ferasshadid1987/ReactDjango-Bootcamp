import React, {useState, useEffect} from "react"
import logo from "../../assets/CodersGym.png"


function Header() {

  
  return (
    <div className="Header">
            <img src={logo} alt="Coders Gym Logo" height="150" />
    </div>
  );
}

export default Header;