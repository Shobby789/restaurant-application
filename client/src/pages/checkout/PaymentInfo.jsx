import React from "react";
import { useSelector } from "react-redux";

export default function PaymentInfo({ customerDetail, setCustomerDetail }) {
  const cart = useSelector((state) => state.allCart);
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCustomerDetail((values) => ({ ...values, [name]: value }));
  };
  const { cardNumber, expiryDate, cvc } = customerDetail;
  return (
    <div className="row py-3">
      <form className="py-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Credit Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={cardNumber}
              onChange={handleOnChange}
              className="form-control py-2 border-0 bg-secondary text-light fw-semibold"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <label htmlFor="expiryDate" className="form-label">
              Card Expiry
            </label>
            <input
              type="date"
              name="expiryDate"
              id="expiryDate"
              value={expiryDate}
              onChange={handleOnChange}
              className="form-control py-2 border-0 bg-secondary text-light fw-semibold"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <label htmlFor="cvc" className="form-label">
              CVC Number
            </label>
            <input
              type="text"
              name="cvc"
              id="cvc"
              value={cvc}
              onChange={handleOnChange}
              className="form-control py-2 border-0 bg-secondary text-light fw-semibold"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <label htmlFor="" className="form-label">
              Amount Payable
            </label>
            <input
              type="text"
              id="amountPayable"
              disabled
              className="form-control bg-secondary text-light py-2 border-0 fw-semibold"
              name="amountPayable"
              value={`Rs.${cart.cartTotalAmount + 100}`}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
