import { useState } from "react";
import "./AddItemForm.css";
import axios from "axios";

export default function AddItemForm() {
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
        });

      alert("Item Added Successgully");
      console.log("Item:", itemDetails);
      console.log("itemImage:", itemImage);
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
    <>
      <div className="container w-100 p-5 rounded">
        <form
          onSubmit={handleOnSubmit}
          id="addItemForm"
          className="p-5 rounded bg-dark text-light"
        >
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-3">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="mt-1 form-control py-2"
                id="itemTitle"
                name="itemTitle"
                value={itemTitle}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-3">
              <label className="form-label">Item Category</label>
              <select
                className="form-select py-2 mt-1"
                aria-label="Default select example"
                id="itemCategory"
                name="itemCategory"
                value={itemCategory}
                onChange={handleOnChange}
              >
                <option defaultValue>Choose...</option>
                <option value="Burgers">Burgers</option>
                <option value="Pizza">Pizza</option>
                <option value="Deal">Deal</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-3">
              <label className="form-label">Item Price</label>
              <input
                type="number"
                className="mt-1 form-control py-2"
                id="itemPrice"
                name="itemPrice"
                value={itemPrice}
                onChange={handleOnChange}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-3">
              <label className="form-label">Item Discription</label>
              <input
                type="text"
                className="mt-1 form-control py-2"
                id="itemDiscription"
                name="itemDiscription"
                value={itemDiscription}
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 px-3">
              <label className="form-label">Item Image</label>
              <input
                type="file"
                className="mt-1 form-control py-2"
                id="itemImage"
                name="itemImage"
                onChange={(e) => setItemImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-lg-3 col-md-3 col-sm-5 px-3">
              <button
                className="btn fw-semibold w-100 text-white"
                style={{ backgroundColor: "#ff5252" }}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
