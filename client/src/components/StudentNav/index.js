import React from "react";

function StudentNav(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">

    <span>
      <a className="navbar-brand" href="#" onClick={()=>props.navBarSelection(1)}>
        Readings
      </a>
      <a className="navbar-brand" href="#" onClick={()=>props.navBarSelection(2)}>
        Profile
      </a>
      <a className="navbar-brand" href="#" onClick={()=>props.navBarSelection(3)}>
        Book Search
      </a>
    </span>

    <span className="navbar-right">
      <a className="navbar-brand" href="#">
          Logout
      </a>  
    </span>

    
    </nav>
  
  );
}

export default StudentNav;
