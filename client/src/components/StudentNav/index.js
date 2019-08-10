import React from "react";
import  "./StudentNav.css"

function StudentNav(props) {
  return (
    <nav className="navbar navbar-dark bg">

      <span className="navSelection navbar-brand"  style={{paddingLeft:"30px"}} href="#" onClick={()=>props.navBarSelection(1)}>
      Student Dashboard
      </span>



      <span  className="navSelection navbar-brand navbar-right" href="#" onClick={props.logout}>
          Logout
      </span>  


    
    </nav>
  
  );
}

export default StudentNav;
