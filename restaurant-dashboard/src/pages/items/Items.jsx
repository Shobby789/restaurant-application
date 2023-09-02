import React, { useEffect, useState } from "react";
import AddItemForm from "../../components/addItemForm/AddItemForm";
import ItemCard from "../../components/itemCard/ItemCard";

export default function Items() {
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
  }, []);

  return (
    <div className="container-fluid bg-dark p-5 text-dark">
      <h2>Items</h2>
      <div className="container">
        <div className="container mb-3 d-flex flex-wrap justify-content-evenly align-items-center pb-5">
          {items &&
            items.map((item) => {
              return (
                <ItemCard
                  _id={item._id}
                  key={item._id}
                  itemTitle={item.itemTitle}
                  itemImage={`http://localhost:4000/uploads/${item.itemImage}`}
                  itemDescription={item.itemDescription}
                  itemPrice={item.itemPrice}
                />
              );
            })}
        </div>
        <h3 className="text-center">Add Item</h3>
        <AddItemForm />
      </div>
    </div>
  );
}
