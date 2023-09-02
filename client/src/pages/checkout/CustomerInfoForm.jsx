import React from "react";

export default function CustomerInfoForm({
  customerDetail,
  setCustomerDetail,
}) {
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCustomerDetail((values) => ({ ...values, [name]: value }));
  };

  const { firstName, lastName, email, phoneNumber, address } = customerDetail;

  return (
    <div className="row py-2">
      <form className="my-4">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <label htmlFor="firstName" className="form-label">
              Enter First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              className="form-control bg-secondary border-0 py-2 text-light fw-semibold"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <label htmlFor="lastName" className="form-label">
              Enter Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              className="form-control bg-secondary border-0 py-2 text-light fw-semibold"
              required
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <label htmlFor="email" className="form-label">
              Enter Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="form-control bg-secondary border-0 py-2 text-light fw-semibold"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Enter Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              className="form-control bg-secondary border-0 py-2 text-light fw-semibold"
              required
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <label htmlFor="address" className="form-label">
              Enter Full Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              className="form-control bg-secondary border-0 py-2 text-light fw-semibold"
              required
              onChange={handleOnChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
