import React from "react";
import "./Header.css"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <a className="navbar-brand" className="headerFont" href="/">
        BookBuster
      </a>
      <img src="books.png" alt="books graphic" width= "50px"></img>
    </nav>
  );
}

export default Header;
