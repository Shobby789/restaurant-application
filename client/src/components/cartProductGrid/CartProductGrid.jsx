import "./CartProductGrid.css";
import React, { useEffect } from "react";
import CartProduct from "../cartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalAmount } from "../../features/cartSlice/cartSlice";
import { Link } from "react-router-dom";

export default function CartProductGrid() {
  const cart = useSelector((state) => state.allCart);
  console.log("cart: ", cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cart, dispatch]);

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  console.log(`Date: ${formattedDate}`);

  return (
    <div className="container-fluid py-5 px-5">
      {cart.cartItems.length === 0 ? (
        <>
          <div className="container text-center py-5 mb-5">
            <h2 className="text-center mb-4">No Items in Bucket</h2>
            <Link
              to="/menu"
              className="btn text-light fw-semibold py-2 px-3"
              style={{
                background: "orangered",
                borderRadius: "0",
              }}
            >
              Explore Menu
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="row py-5 px-0">
            <div className="col-lg-8">
              {cart.cartItems.map((cartItem) => {
                return (
                  <CartProduct
                    _id={cartItem._id}
                    key={cartItem._id}
                    itemTitle={cartItem.itemTitle}
                    itemPrice={cartItem.itemPrice}
                    itemImage={cartItem.itemImage}
                    quantity={cartItem.cartQuantity}
                  />
                );
              })}
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="w-100 p-3 rounded py-4 cartTotalBox">
                <div className="w-100 d-flex flex-column align-items-center justify-content-between h-100">
                  <div className="d-flex justify-content-between mb-3 px-3 w-100 border-bottom border-light">
                    <p>Subtotal</p>
                    <p>Rs. {parseInt(cart.cartTotalAmount)}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3 px-3 w-100 border-bottom border-light">
                    <p>Delivery charges</p>
                    <p>Rs. 100</p>
                  </div>
                  <div className="d-flex justify-content-between mb-3 px-3 w-100 border-bottom border-light">
                    <p>Total</p>
                    <p>Rs. {parseInt(cart.cartTotalAmount) + 100}</p>
                  </div>
                  <div className="w-100 px-3 pt-3">
                    <Link
                      to={"/checkout"}
                      className="btn border-0 w-100 py-2 fw-semibold text-light"
                      style={{ borderRadius: "0", background: "orangered" }}
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
