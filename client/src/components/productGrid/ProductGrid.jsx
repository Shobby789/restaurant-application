import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid() {
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
      console.log(error);
    }
  };

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
      console.log("fetchBurgers api res >>> ", resp);
      setItems(resp);
    } catch (error) {
      console.log("fetchBurgers error >> ", error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="container-fluid py-5 text-light text-center">
        <h2 className="fw-bold">What We Offer</h2>
        {/* Filter Buttons */}
        <div className="container d-flex justify-content-center align-items-center flex-wrap pt-3">
          <button
            className="btn btn-dark border-0 text-light pb-2 px-4 m-3 categoryBtn"
            onClick={() => getItems()}
          >
            All
          </button>
          <button
            className="btn btn-dark border-0 text-light pb-2 px-4 m-3 categoryBtn"
            onClick={() => fetchBurgers("Burgers")}
          >
            Burger
          </button>
          <button className="btn btn-dark border-0 text-light pb-2 px-4 m-3 categoryBtn">
            Pizza
          </button>
          <button className="btn btn-dark border-0 text-light pb-2 px-4 m-3 categoryBtn">
            Deals
          </button>
          <button
            className="btn btn-dark border-0 text-light pb-2 px-4 m-3 categoryBtn"
            onClick={() => fetchBurgers("Drinks")}
          >
            Drinks
          </button>
        </div>
        <div className="container-fluid d-flex justify-content-center flex-wrap align-items-center">
          {items &&
            items.map((item) => {
              return (
                <ProductCard
                  _id={item._id}
                  key={item._id}
                  itemPrice={parseInt(item.itemPrice)}
                  itemTitle={item.itemTitle}
                  itemDescription={item.itemDescription}
                  itemImage={`http://localhost:4000/uploads/${item.itemImage}`}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
