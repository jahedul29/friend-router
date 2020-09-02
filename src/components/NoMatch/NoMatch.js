import React from "react";

const NoMatch = () => {
  const headingStyle = {
    color: "red",
    textAlign: "center",
    fontSize: "50px",
    marginTop: "150px",
  };

  return (
    <div>
      <h1 style={headingStyle}>Path not exist.............</h1>
    </div>
  );
};

export default NoMatch;
