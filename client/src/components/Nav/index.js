import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return(
        <nav>

            <h2>BookBuster</h2>
            <Link to="/teacher">Create Assignment </Link>
            <Link to="/saved">Assignement List</Link>
            <Link to="/saved">Student Progress</Link>
        </nav>
    );
}

export default Nav;