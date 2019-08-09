import React from "react";
import "./MainNav.css"

function MainNav(props) {
  return (
    <nav className="navbar navbar-dark bg" style={{ paddingRight: "0px" }}>


        
        <a className="navbar" href="/WhatWeDo" onClick={() => props.navBarSelection(1)}>
        WHAT WE DO
       </a>	      




      <span className="navbar navbar-right">
        <a className="navbar-brand" href="/teacherregister">
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
