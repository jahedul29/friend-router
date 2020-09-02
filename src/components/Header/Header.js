import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h3 style={{ color: "green" }}>Friends</h3>
      </Link>
    </div>
  );
};

export default Header;
