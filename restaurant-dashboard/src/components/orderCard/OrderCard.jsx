import React from "react";
import { Card } from "react-bootstrap";
import "./OrderCard.css";

export default function OrderCard({
  _id,
  itemTitle,
  itemPrice,
  itemImage,
  quantity,
}) {
  return (
    <Card
      style={{ width: "16rem", borderRadius: "30px" }}
      className="m-3 p-2 bg-dark"
      _id={_id}
    >
      <Card.Img
        variant="top"
        src={itemImage}
        className="mt-2"
        width={150}
        height={150}
        style={{ objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="text-light fw-semibold">{itemTitle}</Card.Title>
        <Card.Text className="text-light fw-semibold mb-1 mt-3">
          Rs. {itemPrice}
        </Card.Text>
        <Card.Text className="text-light">Qty. {quantity}x</Card.Text>
      </Card.Body>
    </Card>
  );
}
