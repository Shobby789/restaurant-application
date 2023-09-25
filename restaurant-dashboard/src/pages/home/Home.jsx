import "./Home.css";
import { Card, Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container
      fluid
      className="py-4 px-5 text-light d-flex align-items-center justify-content-center"
      style={{ height: "100vh", background: "black" }}
    >
      <Container
        className="w-75 h-50 text-center d-flex flex-column align-items-center justify-content-center"
        style={{ boxShadow: "0 0 0 20px #198754" }}
      >
        <Card.Header as={"h3"} className="mb-3 fw-bold">
          Welcome To Admin Dashboard
        </Card.Header>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          ipsa.
        </Card.Text>
      </Container>
    </Container>
  );
}
