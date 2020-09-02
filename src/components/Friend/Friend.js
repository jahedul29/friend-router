import React from "react";
import "./Friend.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Friend = (props) => {
  const { name, username, email, phone, id } = props.friend;

  return (
    <div className="friend-content">
      <div>
        <h3>Name: {name}</h3>
        <h4>UserName: {username}</h4>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>

        <Link to={"/user/" + id}>
          <Button variant="outline-success">Success</Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Friend;
