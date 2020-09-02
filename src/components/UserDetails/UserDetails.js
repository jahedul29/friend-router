import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();

  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);

  const { name, username, email, phone, website } = friend;

  return (
    <div>
      <Container fluid="sm">
        <h2>User Details</h2>
        <div className="d-flex justify-content-center">
          <div className="text-center details">
            <h1>Name: {name}</h1>
            <h3>UserName: {username}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserDetails;
