import React from "react";
import { Card, Container } from "react-bootstrap";

export default function Settings() {
  return (
    <Container
      fluid
      className="py-4 px-5 text-light min-vh-100"
      style={{ height: "100vh", background: "black" }}
    >
      <Container className="border-bottom pb-3 mb-4">
        <Card.Header as={"h4"} className="fw-semibold">
          Settings
        </Card.Header>
      </Container>
      <Card.Text>Hi! This is settings page.</Card.Text>
      <Card.Text>
        If you hire me to developer a system for your business then I will add
        settings functionality in your application. This is just a personal
        practice project, so I do not have addedd much in settings page.
      </Card.Text>
      <Card.Text>Thank you.</Card.Text>
    </Container>
  );
}
