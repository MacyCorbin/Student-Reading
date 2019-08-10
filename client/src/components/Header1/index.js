import React from "react";
// import heroImage from "../../images/books-2.jpg";

// const headerStyle = {
//   "backgroundImage": `url(${heroImage})`,
//   "maxWidth": "100vw",
//   height: "calc(100vw * .2511)",
//   padding: "0px",
 
 // "backgroundSize": "cover",
//   position: "relative"
// }    

// function Header1() {
//     return (
//         <header style={headerStyle} >
//             <h1 > Welcome to the Teacher page</h1>
//             <p>Search for and Save Books assignment</p>
//         </header>
//     );
// }

function Header1({ children }) {
    return (
      <div
        style={{backgroundSize:"cover", textShadow:"3px 3px 3px rgba(0,0,0,0.5)",
        backgroundRepeat:"no-repeat", color:"white", backgroundImage:"url(books-2.jpg)", 
        clear: "both", textAlign: "center", borderRadius:"0px", height:"calc(100vw * .2511)",
        fontSize:"4vw" }}
        className="jumbotron"
      >
        {children}
      </div>
    );
  }

export default Header1;