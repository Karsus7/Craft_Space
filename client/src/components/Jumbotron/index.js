import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", color:"white", 
      width: "100%", backgroundImage: "center",
      backgroundImage:`url(https://i.postimg.cc/90Z4Fv8s/Wood-Work-Carpentry-scaled-e1583393107959.jpg)`,
      backgroundSize: 'cover',
      overflow: 'hidden',
    }}
      className="jumbotron" 
    >
      {children}
    </div>
  );
}

export default Jumbotron;
