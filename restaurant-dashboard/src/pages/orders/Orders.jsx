import React, { useEffect, useState } from "react";
import "./Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/getOrders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const response = await res.json();
      setOrders(response);
      // console.log("fetchOrders response >>> ", response);
    } catch (error) {
      console.log("fetchOrder error >> ", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

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
    } catch (error) {
      console.log("Accept order function error >> ", error);
    }
  };

  return (
    <div className="p-5 text-dark">
      <h4>Orders</h4>
      <div className="container py-3">
        {orders.length > 0 ? (
          <>
            {orders.map(({ _id, status, orderAmount, orderedItems }) => {
              return (
                <div
                  className="container rounded border border-dark py-4 my-5 text-light"
                  key={_id}
                >
                  <div className="container w-100 px-0">
                    <h6 className="text-dark">
                      Order Status:
                      <span className="btn btn-outline-danger btn-sm ms-1 disabled p-1 rounded">
                        {status}
                      </span>
                    </h6>
                    <h6 className="text-dark">
                      Order Amount: <span>{orderAmount}</span>
                    </h6>
                  </div>
                  <div className="container py-3">
                    {orderedItems.map((orderItem) => {
                      return (
                        <div
                          className="row my-3 rounded orderCard"
                          key={orderItem._id}
                        >
                          <div className="col-sm d-flex align-items-center justify-content-center">
                            <img
                              src={orderItem.itemImage}
                              alt=""
                              width={180}
                              height={"80%"}
                            />
                          </div>
                          <div className="col-sm d-flex align-items-center justify-content-center">
                            <h6>{orderItem.itemTitle}</h6>
                          </div>
                          <div className="col-sm d-flex align-items-center justify-content-center">
                            <p>Rs. {orderItem.itemPrice}</p>
                          </div>
                          <div className="col-sm d-flex align-items-center justify-content-center">
                            <p className="fw-lighter">
                              Qty
                              <span className="ms-1">
                                {orderItem.cartQuantity}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="container px-0">
                    <button
                      className="btn btn-outline-success me-1"
                      onClick={() => acceptOrder(_id)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-outline-danger ms-1"
                      onClick={() => rejectOrder(_id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h4 className="text-light">No Orders</h4>
          </>
        )}
      </div>
    </div>
  );
}
