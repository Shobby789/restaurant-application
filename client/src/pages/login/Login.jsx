import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginDetail;
  const handleOnChage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetail((values) => ({ ...values, [name]: value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("loginData: ", data.data);
        localStorage.setItem("userDetails", JSON.stringify(data.data));
        navigate("/home");
      });
    setLoginDetail({ email: "", password: "" });
  };
  return (
    <>
      <div className="container-fluid loginPage d-flex align-items-center justify-content-center min-vh-100">
        <div className="container d-flex p-0 loginContainer">
          <div className="loginBox bg-dark d-flex flex-column align-items-start ps-5 justify-content-center">
            <h1 className="fw-bold mb-3 text-success">Urbee</h1>
            <h4 className="pb-0 mb-0 text-light">Welcome Back</h4>
            <p className="fs-6 text-secondary text-start">
              Sign in with your email and password
            </p>
            <form onSubmit={handleOnSubmit} className="w-75 pt-2 mb-3">
              <div className="mb-2 text-start">
                <label htmlFor="" className="form-label text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={loginDetail.email}
                  onChange={handleOnChage}
                  className="form-control py-2 border-1"
                  style={{
                    background: "silver",
                    borderRadius: "0",
                  }}
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="" className="form-label text-secondary">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={loginDetail.password}
                  onChange={handleOnChage}
                  className="form-control py-2 border-1"
                  style={{ background: "silver", borderRadius: "0" }}
                />
              </div>
              <p className="text-end mb-0">
                <Link
                  to="/"
                  className="text-decoration-none text-secondary fs-6"
                >
                  Forgot Password
                </Link>
              </p>
              <button
                type="submit"
                className="float-start mt-0 btn btn-success border-0 fs-6 px-4 pb-2"
                style={{ borderRadius: "0" }}
              >
                Sign In
              </button>
            </form>
            <p className="text-start text-secondary fs-6">
              <span className="me-2">Don't have an account?</span>
              <Link
                to="/register"
                className="text-success text-decoration-none fw-semibold"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className="imgBox p-0"></div>
        </div>
      </div>
    </>
  );
}
