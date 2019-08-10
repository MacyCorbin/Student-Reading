import React from "react";
import  "./StudentNav.css"

function StudentNav(props) {
  return (
    <nav className="navbar navbar-dark bg">

      <span className="navSelection navbar-brand" id="navHover" style={{paddingLeft:"30px"}} href="#" onClick={()=>props.navBarSelection(1)}>
      Student Dashboard
      </span>



      <span  className="navSelection navbar-brand navbar-right" id="navHover"  href="#" onClick={props.logout}>
          Logout
      </span>  


    
    </nav>
  
  );
}

export default StudentNav;
