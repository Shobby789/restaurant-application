import React, { useEffect, useState } from "react";
import { Button, Card, Container, Table } from "react-bootstrap";
import OrderModal from "../../components/modal/OrderModal";
import { useNavigate } from "react-router-dom";

export default function Orders() {
  const [modalShow, setModalShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

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
  }, [orders]);

  return (
    <Container
      fluid
      className="py-4 px-5 text-light"
      style={{ height: "100vh", background: "black" }}
    >
      <Container className="border-bottom pb-3 mb-4">
        <Card.Header as={"h4"} className="fw-semibold">
          Orders
        </Card.Header>
      </Container>
      {/* <OrderCard /> */}
      <Container className="px-0">
        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th className="py-3 fs-6">Customer Name</th>
              <th className="py-3 fs-6">Address</th>
              <th className="py-3 fs-6">Order Status</th>
              <th className="py-3 fs-6">Order Date</th>
              <th className="py-3 fs-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              <>
                {orders.map(
                  ({
                    customerAddress,
                    status,
                    _id,
                    date,
                    orderedItems,
                    customerName,
                  }) => {
                    return (
                      <>
                        <tr key={_id}>
                          <td>{customerName}</td>
                          <td>{customerAddress}</td>
                          {status === "Pending" || status === "Rejected" ? (
                            <td className="fw-semibold text-danger">
                              {status}
                            </td>
                          ) : (
                            <td className="fw-semibold text-success">
                              {status}
                            </td>
                          )}
                          {/* <td className="fw-semibold">{status}</td> */}
                          <td style={{ fontWeight: "400" }}>{date}</td>
                          <td>
                            <Button
                              variant="warning"
                              size="sm"
                              className="fw-semibold"
                              // onClick={() => setModalShow(true)}
                              onClick={() =>
                                navigate(`/order/order-details/${_id}`)
                              }
                            >
                              View
                            </Button>
                          </td>
                        </tr>
                        <OrderModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          items={orderedItems}
                          _id={_id}
                        />
                      </>
                    );
                  }
                )}
              </>
            ) : (
              <></>
            )}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
