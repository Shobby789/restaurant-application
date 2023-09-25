import { Button, Card } from "react-bootstrap";
import "./ProductCard.css";
import { useState } from "react";
import AddItemForm from "../itemForm/AddItemForm";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  _id,
  itemTitle,
  itemDescription,
  itemPrice,
  itemImage,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = async (_id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/deleteItem/${_id}`, {
        method: "DELETE",
      });
      const response = await res.json();
      alert(response.status);
    } catch (error) {
      console.log("handleDelete api error >>> ", error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <Card
        style={{ width: "18rem", borderRadius: "30px" }}
        className="mb-5 p-2 bg-dark"
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
          <Card.Title className="text-light fw-semibold">
            {itemTitle}
          </Card.Title>
          <Card.Text className="text-secondary">{itemDescription}</Card.Text>
          <Card.Text className="text-light fw-semibold">
            Rs.{itemPrice}
          </Card.Text>
          <Button
            variant="warning"
            size="sm"
            className="fw-semibold mx-1 float-end"
            onClick={() => navigate(`/items/update-item/${_id}`)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            size="sm"
            className="fw-semibold mx-1 float-end"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
      {/* <AddItemForm show={show} handleClose={handleClose} /> */}
    </>
  );
}
