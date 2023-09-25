import { useState } from "react";
import Items from "./Items";
import CustomerInfoForm from "./CustomerInfoForm";
import PaymentInfo from "./PaymentInfo";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllItems } from "../../features/cartSlice/cartSlice";

export default function Checkout() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const cart = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  const loggedInUser = JSON.parse(localStorage.getItem("userDetails"));
  console.log("loggedInUser >> ", loggedInUser);
  const headings = ["Items", "Customer Info", "Payment Info"];
  const [customerDetail, setCustomerDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    cardNumber: "",
    cvc: "",
    expiryDate: 0,
  });
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    cardNumber,
    cvc,
    expiryDate,
  } = customerDetail;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Customer Detail: ", customerDetail);
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !address ||
      !cardNumber ||
      !cvc ||
      !expiryDate
    ) {
      alert("Please fill all the fields");
    } else {
      const res = await fetch("http://localhost:4000/api/placeOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerId: loggedInUser.user._id,
          customerName: firstName + " " + lastName,
          customerAddress: address,
          orderedItems: cart.cartItems,
          orderAmount: cart.cartTotalAmount + 100,
          status: "Pending",
          date: formattedDate,
        }),
      });
      const response = await res.json();
      // console.log("Order Placing API Resp >>> ", response);
      dispatch(removeAllItems());
      localStorage.removeItem("cartItems");
      setCustomerDetail({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        cardNumber: "",
        cvc: "",
        expiryDate: 0,
      });
      setTimeout(() => {
        alert(response.status);
        // navigate("/");
      }, 500);
    }
  };
  return (
    <div className="container-fluid pt-5 d-flex align-items-center justify-content-center pt-5 text-light min-vh-100">
      <div className="d-flex mt-5 flex-column justify-content-between checkoutContainer pt-5 border border-light py-3 px-4 rounded">
        <h3 className="text-center fw-semibold">{headings[count]}</h3>
        <div className="">
          {(() => {
            switch (count) {
              case 0:
                return <Items />;
              case 1:
                return (
                  <CustomerInfoForm
                    customerDetail={customerDetail}
                    setCustomerDetail={setCustomerDetail}
                    handleSubmit={handleSubmit}
                  />
                );
              case 2:
                return (
                  <PaymentInfo
                    customerDetail={customerDetail}
                    setCustomerDetail={setCustomerDetail}
                    handleSubmit={handleSubmit}
                  />
                );
              default:
                return null;
            }
          })()}
        </div>
        <div className="text-end pe-1">
          {count === 0 ? (
            <></>
          ) : (
            <>
              <button
                className="btn text-light fw-semibold me-1"
                style={{ borderRadius: "0", background: "orangered" }}
                onClick={() => setCount(count - 1)}
              >
                Back
              </button>
            </>
          )}
          {count === 2 ? (
            <>
              <button
                type="submit"
                className="btn text-light fw-semibold ms-2"
                style={{ borderRadius: "0", background: "orangered" }}
                onClick={handleSubmit}
              >
                Place Order
              </button>
            </>
          ) : (
            <>
              <button
                className="btn text-light fw-semibold ms-2"
                style={{ borderRadius: "0", background: "orangered" }}
                onClick={() => setCount(count + 1)}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
