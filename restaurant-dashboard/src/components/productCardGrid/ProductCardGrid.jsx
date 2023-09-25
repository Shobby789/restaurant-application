import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import { Button, Container } from "react-bootstrap";

export default function ProductCardGrid() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      await fetch("http://localhost:4000/api/getItems", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setItems(data.data);
          // console.log(data.data);
        });
    } catch (error) {
      console.log("Server error: ", error);
    }
  };
  useEffect(() => {
    getItems();
  }, [items]);

  const fetchBurgers = async (category) => {
    try {
      const res = await fetch(`http://localhost:4000/api/fetchBurgers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ category: category }),
      });
      const resp = await res.json();
      // console.log("fetchBurgers api res >>> ", resp);
      setItems(resp);
    } catch (error) {
      console.log("fetchBurgers error >> ", error);
    }
  };
  return (
    <>
      <Container className="d-flex justify-content-evenly align-items-center mb-5">
        <Button
          variant="success"
          className="px-4 fw-semibold"
          onClick={() => getItems()}
        >
          All
        </Button>
        <Button
          variant="success"
          className="px-4 fw-semibold"
          onClick={() => fetchBurgers("Burgers")}
        >
          Burgers
        </Button>
        <Button
          variant="success"
          className="px-4 fw-semibold"
          onClick={() => fetchBurgers("Pizza")}
        >
          Pizza
        </Button>
        <Button
          variant="success"
          className="px-4 fw-semibold"
          onClick={() => fetchBurgers("Drinks")}
        >
          Drinks
        </Button>
      </Container>
      <Container className="d-flex flex-wrap algin-items-center justify-content-evenly px-0">
        {items &&
          items.map(
            ({
              _id,
              itemTitle,
              itemDescription,
              itemPrice,
              itemImage,
              itemCategory,
            }) => {
              return (
                <ProductCard
                  _id={_id}
                  key={_id}
                  itemTitle={itemTitle}
                  itemDescription={itemDescription}
                  itemPrice={itemPrice}
                  itemImage={`http://localhost:4000/uploads/${itemImage}`}
                />
              );
            }
          )}
      </Container>
    </>
  );
}
