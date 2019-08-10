import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{backgroundSize:"cover", textShadow:"3px 3px 3px rgba(0,0,0,0.5)",
      backgroundRepeat:"no-repeat", color:"white", backgroundImage:"url(readings.png)", 
      clear: "both", textAlign: "center", borderRadius:"0px" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
