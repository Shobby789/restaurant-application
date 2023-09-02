import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [registerDetail, setRegisterDetail] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterDetail((values) => ({ ...values, [name]: value }));
  };

  const { email, password } = registerDetail;
  const registerUser = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast.success("Registered Successfully");
        console.log(data, "User Registerd");
        navigate("/login");
      });

    setRegisterDetail({ email: "", password: "" });
  };
  return (
    <>
      <div className="container-fluid registerPage border border-dark d-flex align-items-center justify-content-center min-vh-100">
        <div className="registerContainer d-flex p-0">
          <div className="registerBox bg-dark d-flex flex-column align-items-start justify-content-center">
            <h1 className="fw-bold mb-3 text-success">Urbee</h1>
            <h4 className="pb-0 mb-1 text-light">Register Now</h4>
            <p className="fs-6 text-secondary text-start">
              Sign Up by entering your email
            </p>
            <form onSubmit={registerUser} className="registerForm pt-2 mb-3">
              <div className="mb-2 text-start">
                <label htmlFor="" className="form-label text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={registerDetail.email}
                  onChange={onChangeHandler}
                  className="form-control py-2 border-1"
                  style={{
                    background: "silver",
                    borderRadius: "0",
                  }}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="" className="form-label text-secondary">
                  Create a Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={registerDetail.password}
                  onChange={onChangeHandler}
                  className="form-control py-2 border-1"
                  style={{ background: "silver", borderRadius: "0" }}
                />
              </div>
              <button
                type="submit"
                className="float-start mt-0 btn btn-success border-0 fs-6 px-4 pb-2"
                style={{ borderRadius: "0" }}
              >
                Sign Up
              </button>
            </form>
            <p className="text-start text-secondary fs-6">
              <span className="me-2">Already have an account?</span>
              <Link
                to="/"
                className="text-success text-decoration-none fw-semibold"
              >
                Sign In
              </Link>
            </p>
          </div>
          <div className="imgBox"></div>
        </div>
      </div>
    </>
  );
}
