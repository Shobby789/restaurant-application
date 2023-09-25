import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function AddItemForm({ show, handleClose }) {
  const [itemDetails, setItemDetails] = useState({
    itemTitle: "",
    itemCategory: "",
    itemPrice: "",
    itemDiscription: "",
  });
  const [itemImage, setItemImage] = useState("");

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setItemDetails((values) => ({ ...values, [name]: value }));
  };
  const { itemTitle, itemCategory, itemPrice, itemDiscription } = itemDetails;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      itemDetails.itemTitle === "" ||
      itemDetails.itemCategory === "" ||
      itemDetails.itemDiscription === "" ||
      itemDetails.itemPrice === ""
    ) {
      alert("Please Fill All The Fields");
    } else {
      const formData = new FormData();
      formData.append("itemTitle", itemTitle);
      formData.append("itemDescription", itemDiscription);
      formData.append("itemPrice", itemPrice);
      formData.append("itemCategory", itemCategory);
      formData.append("itemImage", itemImage);

      axios
        .post("http://localhost:4000/api/addItem", formData, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log("Resp: ", res.data);
          alert("Item Added Successgully");
        });
      // console.log("Item:", itemDetails);
      // console.log("itemImage:", itemImage);
    }
    setItemDetails({
      itemTitle: "",
      itemDiscription: "",
      itemPrice: 0,
      itemCategory: "",
    });
    setItemImage("");
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="text-bg-dark border-bottom-0">
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-bg-dark">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group
            className="mb-3 px-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              className="text-bg-dark py-2"
              name="itemTitle"
              value={itemTitle}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 px-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="text-bg-dark"
              id="itemDiscription"
              name="itemDiscription"
              value={itemDiscription}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
        <Form.Group className="mb-3 px-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            type="text"
            className="text-bg-dark py-2"
            id="itemPrice"
            name="itemPrice"
            value={itemPrice}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 px-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Item Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            id="itemCategory"
            name="itemCategory"
            value={itemCategory}
            onChange={handleOnChange}
            className="text-bg-dark py-2"
          >
            <option className="fw-lighter">Choose Category</option>
            <option value="Burgers">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Drinks">Drink</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 px-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Upload Item Image</Form.Label>
          <Form.Control
            type="file"
            className="bg-dark"
            id="itemImage"
            name="itemImage"
            onChange={(e) => setItemImage(e.target.files[0])}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="text-bg-dark border-top-0">
        <Button variant="danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleOnSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
