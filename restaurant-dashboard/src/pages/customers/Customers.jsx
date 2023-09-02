import React, { useEffect, useState } from "react";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const getAllCustomers = async () => {
    const res = await fetch("http://localhost:4000/api/getAllCustomers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // console.log("getAllCustomer api >>> ", await res.json());
    const response = await res.json();
    setCustomers(response);
  };

  useEffect(() => {
    getAllCustomers();
  }, []);
  return (
    <div className="p-5">
      <h4>Customers</h4>
      <div className="container mt-5">
        <table className="table text-light text-center">
          <thead className="">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((customer) => {
              return (
                <tr key={customer._id}>
                  <td>Name</td>
                  <td>{customer.email}</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
