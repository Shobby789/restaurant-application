import React from "react";

export default function OfferSection() {
  return (
    <>
      <div className="container border border-light py-5 text-center text-white">
        <h3 className="fw-bold">What We Offer</h3>
        <div className="container d-flex flex-wrap justify-content-center align-items-center border border-light py-4">
          <div
            className="card border-0"
            style={{ width: "18rem", margin: "10px 15px" }}
          >
            <img
              src="https://img.freepik.com/free-photo/chicken-schnitzel-with-tomato-green_140725-2052.jpg?w=740&t=st=1690701566~exp=1690702166~hmac=74e506070f9b694dea438b9cd23f389be200c42dabf621444151fcaefe12897a"
              alt=""
              className="card-img-top"
            />
          </div>
          <div
            className="card border-0"
            style={{ width: "18rem", margin: "10px" }}
          >
            <img
              src="https://img.freepik.com/free-photo/chicken-schnitzel-with-tomato-green_140725-2052.jpg?w=740&t=st=1690701566~exp=1690702166~hmac=74e506070f9b694dea438b9cd23f389be200c42dabf621444151fcaefe12897a"
              alt=""
              className="card-img-top"
            />
          </div>
          <div
            className="card border-0"
            style={{ width: "18rem", margin: "10px" }}
          >
            <img
              src="https://img.freepik.com/free-photo/chicken-schnitzel-with-tomato-green_140725-2052.jpg?w=740&t=st=1690701566~exp=1690702166~hmac=74e506070f9b694dea438b9cd23f389be200c42dabf621444151fcaefe12897a"
              alt=""
              className="card-img-top"
            />
          </div>
        </div>
      </div>
    </>
  );
}
