import React, {useState, useEffect} from "react"
import './App.css';

import Header from "./components/header"
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme";
import {BrowserRouter as Router} from "react-router-dom"

function App() {

  
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <Router>
      <Header/>
      <div className="general-content">
      <Sidebar/>
      <Main />
      </div>
    </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
