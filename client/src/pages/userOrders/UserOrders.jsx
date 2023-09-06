import { useEffect, useState } from "react";
import "./UserOrders.css";

export default function UserOrders() {
  const [myOrders, setMyOrders] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem("userDetails"));

  const getOrders = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/getMyOrders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: loggedInUser?.user?._id }),
      });
      const response = await res.json();
      setMyOrders(response);
      // console.log("My Orders >> ", myOrders);
    } catch (error) {
      console.log("Get My Orders API error >> ", error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [myOrders]);

  return (
    <div className="container min-vh-100 py-5 text-light">
      <h4 className="my-5">My Orders</h4>
      {myOrders && myOrders?.length > 0 ? (
        <>
          <div className="container py-3 mt-3 rounded">
            {myOrders &&
              myOrders?.map(({ _id, orderAmount, orderedItems, status }) => {
                return (
                  <div className="container border my-3 p-5 rounded" key={_id}>
                    <h6 className="mb-3 ps-0 ms-0">
                      Order Status:
                      <span className="text-danger border border-danger p-1 rounded btn-sm disabled fw-semibold ms-1">
                        {status}
                      </span>
                    </h6>
                    <h6 className="ms-0 ps-0 mb-3">
                      Total Amount: {orderAmount}
                    </h6>
                    <button className="btn btn-outline-danger btn-sm">
                      Cancel Order
                    </button>
                    <div className="mt-4">
                      {orderedItems.map((order) => {
                        return (
                          <div className="row rounded w-75 py-2 my-3 myOrderProductCard border-0">
                            <div className="col-sm">
                              <img
                                src={order.itemImage}
                                alt=""
                                className="border-0"
                                width={150}
                                height={150}
                              />
                            </div>
                            <div className="col-sm d-flex align-items-center justify-content-center">
                              <h5 className="mb-0">{order.itemTitle}</h5>
                            </div>
                            <div className="col-sm d-flex align-items-center justify-content-center">
                              <p className="mb-0 fw-lighter fs-6">
                                Qty{" "}
                                <span className="fw-normal">
                                  {order.cartQuantity}
                                </span>
                              </p>
                            </div>
                            <div className="col-sm d-flex align-items-center justify-content-center">
                              <p className="mb-0">Rs.{order.itemPrice}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <>
          <h6 className="text-light mt-5">No Orders Yet</h6>
        </>
      )}
    </div>
  );
}
