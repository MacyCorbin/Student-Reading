import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {

    logout = () => {

        window.location = window.origin;
        sessionStorage.removeItem('bookBusterTeacher');
        sessionStorage.removeItem('google_profile');
        sessionStorage.removeItem('idtoken');
    
      }

    render(){
    return (
        <nav className="navbar">

            <h2>BookBuster</h2>
            <Link to="/teacher">Create Assignment </Link>
            <Link to="/saved">Assignment List</Link>
            <Link to="/StudentProgress">Student Progress</Link>
            <span className="navbar-right" style={{cursor:'pointer'}} onClick={this.logout}>Logout</span>
        </nav>
    );
    
    }
}

export default Nav;