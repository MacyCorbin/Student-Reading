import React from "react";
import "./MainNav.css"

function MainNav(props) {
  return (
    <nav className="navbar navbar-dark bg">

    <span>
      <a className="navbar-brand" href="/WhatWeDo" onClick={()=>props.navBarSelection(1)}>
        What We Do
      </a>
    </span>

    <span className="navbar-right">
      <a className="navbar-brand" href="/teacherregister">
          Teacher Register
      </a> 
      <a className="navbar-brand" href="/studentregister">
          Student Register
      </a>   
    </span>

    
    </nav>
  
  );
}

export default MainNav;
