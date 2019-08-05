import React from "react";
import "./MainNav.css"

function MainNav(props) {
  return (
    <nav className="navbar navbar-dark bg" style = {{ paddingRight: "0px"}}>

    <span>
      <a className="navbar" href="/WhatWeDo" onClick={()=>props.navBarSelection(1)}>
        WHAT WE DO
      </a>
    </span>

    <span className="navbar">
      <a className="navbar"  href="/teacherregister">
          TEACHER REGISTER
      </a> 
      <a className="navbar" href="/studentregister">
          STUDENT REGISTER
      </a>   
    </span>

    
    </nav>
  
  );
}

export default MainNav;
