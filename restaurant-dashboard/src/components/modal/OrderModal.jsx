import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./OrderModal.css";
export default function OrderModal(props) {
  const acceptOrder = async (_id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/order/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Accepted" }),
      });
      const response = await res.json();
      console.log("acceptOrder response >> ", response);
    } catch (error) {
      console.log("Accept order function error >> ", error);
    }
  };

  const rejectOrder = async (_id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/order/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Rejected" }),
      });
      const response = await res.json();
      console.log("rejectOrder response >> ", response);
    } catch (error) {
      console.log("Accept order function error >> ", error);
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
      style={{ fontFamily: "cursive" }}
    >
      <Modal.Header closeButton className="text-bg-dark border-bottom-0">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="fs-4"
          style={{ fontFamily: "cursive" }}
        >
          Order Items
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="px-5 text-bg-dark border-bottom-0"
        style={{ overflowY: "scroll", maxHeight: "60vh" }}
      >
        {props.items &&
          props.items.map((item) => {
            return (
              <Row className="orderCard rounded text-light my-3">
                <Col className="d-flex align-items-center justify-content-center">
                  <Card.Img
                    src={item.itemImage}
                    className="img-fluid"
                    width={200}
                    height={200}
                  />
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Card.Title>{item.itemTitle}</Card.Title>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Card.Text>Rs. {item.itemPrice}</Card.Text>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                  <Card.Text>{item.cartQuantity}x</Card.Text>
                </Col>
              </Row>
            );
          })}
        {/* <Row className="orderCard rounded text-dark my-3">
          <Col className="d-flex align-items-center justify-content-center">
            <Card.Img
              src={itemImg}
              className="img-fluid"
              width={200}
              height={200}
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Card.Title>Card Title</Card.Title>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Card.Text>Rs.200</Card.Text>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Card.Text>Qty.3</Card.Text>
          </Col>
        </Row> */}
      </Modal.Body>
      <Modal.Footer className="text-bg-dark border-top-0">
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button variant="success" onClick={() => acceptOrder(props._id)}>
          Accept
        </Button>
        <Button variant="danger" onClick={() => rejectOrder(props._id)}>
          Reject
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
