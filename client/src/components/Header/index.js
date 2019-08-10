import React from "react";
import "./Header.css"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" style = {{ margin: "10px 30px"}}>
      <a className="navbar-brand headerFont"style={{color:"#33658A"}} href="/">
        BookBuster
      </a>
      <img src="books.png" alt="books graphic" width= "50px"></img>
    </nav>
  );
}

export default Header;
