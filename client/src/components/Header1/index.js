import React from "react";
import heroImage from "../images/books-2.jpg";
/* 
const headerStyle = {
  "backgroundImage": `url(${heroImage})`,
  "maxWidth": "100vw",
  height: "calc(100vw * .2511)",
 // "backgroundSize": "cover",
  position: "relative"
}   <header style={headerStyle}> */

function Header1() {
    return (
        <header >
            <h1> Welcome to the Teacher page</h1>
            <p>Search for and Save Books assignment</p>
        </header>
    );
}

export default Header1;