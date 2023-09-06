import { useState } from "react";
import "./ForgotPassword.css";

export default function ForgorPassword() {
  const [resetData, setResetData] = useState({
    email: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setResetData((values) => ({ ...values, [name]: value }));
  };
  const { email, newPassword } = resetData;
  const handleResest = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/api/resetPassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword }),
    });
    console.log("resetPass res >>> ", await res.json());
  };

  return (
    <div className="container-fluid minv-100-100 d-flex align-items-center justify-content bg-container">
      <div className="container d-flex flex-column align-items-center justify-content-evenly border border-secondary rounded child-container py-5">
        <div className="mb-3">
          <h3 className="text-light">Reset Password</h3>
        </div>
        <form onSubmit={handleResest} className="w-100 px-5">
          <div className="mb-3">
            <lable className="form-label"></lable>
            <label htmlFor="email" className="form-label text-secondary">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={resetData.email}
              onChange={handleChange}
              className="form-control bg-secondary border-0"
              style={{
                // background: "silver",
                borderRadius: "0",
              }}
            />
          </div>
          <div className="mb-4">
            <lable className="form-label"></lable>
            <label htmlFor="password" className="form-label text-secondary">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              id="password"
              value={resetData.newPassword}
              onChange={handleChange}
              className="form-control bg-secondary border-0"
              style={{
                // background: "silver",
                borderRadius: "0",
              }}
            />
          </div>
          <div className="">
            <button className="btn btn-primary w-100 rounded-0">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
