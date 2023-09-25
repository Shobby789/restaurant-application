import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./UpdateProduct.css";

export default function UpdateProduct() {
  const { _id } = useParams();
  console.log("Update item id > ", _id);
  const [item, setItem] = useState(null);
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

  const fetchItemDetails = async () => {
    const res = await fetch(`http://localhost:4000/api/getItemDetails/${_id}`, {
      method: "GET",
    });
    const response = await res.json();
    console.log("fetchItemDetails >> ", response);
    setItem(response);
  };

  useEffect(() => {
    fetchItemDetails();
  }, []);

  const handleUpdate = (e) => {
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
        .put(`http://localhost:4000/api//editItem/${item?._id}`, formData, {
          headers: { Authorization: localStorage.getItem("token") },
        })
        .then((res) => {
          console.log("Resp: ", res.data);
          setTimeout(() => {
            alert("Item updated successfully");
          }, 600);
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
    <Container
      fluid
      className="py-4 px-5 text-light"
      style={{ height: "100vh", background: "black" }}
    >
      <Container className="border-bottom pb-3 mb-4">
        <Card.Header as={"h4"} className="fw-semibold">
          Update Item
        </Card.Header>
      </Container>
      <Container>
        <Form onSubmit={handleUpdate}>
          <Row>
            <Col md={6}>
              <Form.Group
                className="mb-3 px-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  //   autoFocus
                  placeholder={item?.itemTitle}
                  className="text-bg-dark py-2 inputField"
                  name="itemTitle"
                  value={itemTitle}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                className="mb-3 px-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Item Price</Form.Label>
                <Form.Control
                  type="text"
                  className="text-bg-dark py-2 inputField"
                  placeholder={item?.itemPrice}
                  id="itemPrice"
                  name="itemPrice"
                  value={itemPrice}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group
                className="mb-3 px-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Item Category</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  id="itemCategory"
                  name="itemCategory"
                  value={itemCategory}
                  onChange={handleOnChange}
                  className="text-bg-dark py-2"
                >
                  <option className="fw-lighter w-50">Choose Category</option>
                  <option value="Burgers w-50">Burger</option>
                  <option value="Pizza w-50">Pizza</option>
                  <option value="Drinks w-50">Drink</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                className="mb-3 px-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Upload Item Image</Form.Label>
                <Form.Control
                  type="file"
                  className="bg-dark"
                  id="itemImage"
                  name="itemImage"
                  onChange={(e) => setItemImage(e.target.files[0])}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Form.Group
                className="mb-3 px-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="text-bg-dark inputField"
                  placeholder={item?.itemDescription}
                  id="itemDiscription"
                  name="itemDiscription"
                  value={itemDiscription}
                  onChange={handleOnChange}
                />
              </Form.Group>
            </Col>
            <Col md={4}></Col>
          </Row>
          <Container className="mt-4">
            <Button variant="danger" className="me-2 px-3">
              Cancel
            </Button>
            <Button
              variant="success"
              className="ms-1 px-3"
              onClick={handleUpdate}
            >
              Update
            </Button>
          </Container>
        </Form>
      </Container>
    </Container>
  );
}
