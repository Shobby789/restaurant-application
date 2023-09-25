import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import OrderCard from "../../components/orderCard/OrderCard";

export default function OrderDetails() {
  const [orderItems, setOrderItems] = useState();
  console.log("orderItems >> ", orderItems);

  const { _id } = useParams();
  console.log("OrderId >> ", _id);

  const fetchOrderDetails = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/getOrderDetails/${_id}`,
        {
          method: "GET",
        }
      );
      const response = await res.json();
      console.log("orderDetails >> ", response);
      setOrderItems(response);
    } catch (error) {
      console.log("Some error occurred");
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, [orderItems]);

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
      setTimeout(() => {
        alert("Order accepted");
      }, 500);
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
      setTimeout(() => {
        alert("Order rejected");
      }, 500);
    } catch (error) {
      console.log("Accept order function error >> ", error);
    }
  };
  return (
    <Container
      fluid
      className="text-light min-vh-100 py-4 px-5"
      style={{ background: "black" }}
    >
      <Container className="border-bottom pb-3 mb-4">
        <Card.Header as={"h4"} className="fw-semibold">
          Order Details
        </Card.Header>
      </Container>
      <Container className="px-0">
        {orderItems?.orderedItems?.map(
          ({ _id, itemTitle, cartQuantity, itemImage, itemPrice }) => {
            return (
              <OrderCard
                key={_id}
                _id={_id}
                itemTitle={itemTitle}
                quantity={cartQuantity}
                itemPrice={itemPrice}
                itemImage={itemImage}
                // itemImage={`http://localhost:4000/uploads/${itemImage}`}
              />
            );
          }
        )}
      </Container>
      <Container className="py-2 mt-2 d-flex justify-content-between align-items-center flex-wrap">
        <Container className="w-50">
          <Card.Title>Status: {orderItems?.status}</Card.Title>
          <Card.Title>Totla Amount: {orderItems?.orderAmount}</Card.Title>
        </Container>
        <Container className="w-50 text-end">
          <Button
            variant="danger fw-semibold me-1"
            onClick={() => rejectOrder(orderItems?._id)}
          >
            Reject
          </Button>
          <Button
            variant="success fw-semibold ms-1"
            onClick={() => acceptOrder(orderItems?._id)}
          >
            Accept
          </Button>
        </Container>
      </Container>
    </Container>
  );
}
