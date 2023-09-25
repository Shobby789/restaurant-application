import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProductCardGrid from "../../components/productCardGrid/ProductCardGrid";
import AddItemForm from "../../components/itemForm/AddItemForm";

export default function Items() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      className="py-4 px-5 text-light min-vh-100"
      style={{ background: "black" }}
    >
      <Container className="border-bottom pb-3 mb-5 d-flex justify-content-between align-items-center">
        <Card.Header as={"h4"} className="fw-semibold">
          All Items
        </Card.Header>
        <Button variant="success" className="fw-semibold" onClick={handleShow}>
          Add Item
        </Button>
      </Container>
      <AddItemForm show={show} handleClose={handleClose} />
      <ProductCardGrid />
    </Container>
  );
}
