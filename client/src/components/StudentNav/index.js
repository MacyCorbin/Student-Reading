import React from "react";

function StudentNav(props) {
  return (
    <nav className="navbar navbar-dark bg">

    <span>
      <a className="navbar-brand" href="#" onClick={()=>props.navBarSelection(1)}>
      Student Dashboard
      </a>
    </span>

    <span className="navbar-right">
      <a className="navbar-brand" href="#" onClick={props.logout}>
          Logout
      </a>  
    </span>

    
    </nav>
  
  );
}

export default StudentNav;
