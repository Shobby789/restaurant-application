import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const getAllCustomers = async () => {
    const res = await fetch("http://localhost:4000/api/getAllCustomers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    setCustomers(response);
    console.log("getAllCustomer api >>> ", response);
  };

  useEffect(() => {
    getAllCustomers();
  }, []);
  return (
    <Container
      className="py-4 px-5 text-light min-vh-100"
      style={{ background: "black" }}
    >
      <Card.Header as={"h4"} className="fw-semibold border-bottom pb-3">
        Customers
      </Card.Header>
      <Container className="mt-4 p-0">
        <Table striped bordered hover variant="dark" className="text-center">
          <thead>
            <tr>
              <th className="py-3">Name</th>
              <th className="py-3">Email</th>
              <th className="py-3">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers &&
              customers.map((c) => {
                return (
                  <tr key={c._Id} id={c._Id}>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td>03413549032</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
