import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

class Nav extends React.Component {

    logout = () => {

        window.location = window.origin;
        sessionStorage.removeItem('bookBusterTeacher');
        sessionStorage.removeItem('google_profile');
        sessionStorage.removeItem('idtoken');
    
      }

    render(){
    return (
        <nav className="navbar"style={{height:"65px"}}>

            {/* <h2>BookBuster</h2> */}
            <Link style={{paddingLeft:"30px"}} to="/teacher">CREATE ASSIGNMENT </Link>
            <Link to="/saved">ASSIGNMENT LIST</Link>
            <Link to="/StudentProgress">STUDENT PROGRESS</Link>
            <span className="navbar-right" style={{cursor:'pointer',marginRight:"30px"}} onClick={this.logout}>LOGOUT</span>
        </nav>
    );
    
    }
}

export default Nav;