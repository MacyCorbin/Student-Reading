import React from "react";

function Jumbotron2({ children }) {
  return (
    <div
    style={{backgroundSize:"cover", textShadow:"3px 3px 3px rgba(0,0,0,0.5)",
    backgroundRepeat:"no-repeat", color:"white", backgroundImage:"url(booksStudent.jpg)", 
    clear: "both", textAlign: "center", borderRadius:"0px", height:"calc(100vw * .2511)",
    fontSize:"4vw" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron2;
