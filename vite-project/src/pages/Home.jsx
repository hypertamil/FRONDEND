import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/Home.css";

const Home = () => {
  return (
    <Container>
      <h1>Welcome to our page</h1>
      <p>Thansk for coming</p>
      <Button variant="primary">Get start</Button>
    </Container>
  );
};

export default Home;
