import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [registerDetail, setRegisterDetail] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterDetail((values) => ({ ...values, [name]: value }));
  };

  const { name, email, password } = registerDetail;
  const registerUser = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const resp = await res.json();
      alert(resp.status);
      navigate("/login");
      // setTimeout(() => {
      //   alert(resp.status);
      // }, 300);
      setRegisterDetail({ name: "", email: "", password: "" });
    } catch (error) {
      console.log("error >> ", error);
    }
  };
  return (
    <>
      <div className="container-fluid registerPage border border-dark d-flex align-items-center justify-content-center min-vh-100">
        <div className="registerContainer d-flex p-0">
          <div className="registerBox bg-dark d-flex flex-column align-items-start justify-content-center">
            <h1 className="fw-bold mb-2 themeText">Urbee</h1>
            <h4 className="pb-0 mb-1 text-light">Register Now</h4>
            {/* <p className="fs-6 text-secondary text-start">
              Sign Up by entering your email
            </p> */}
            <form onSubmit={registerUser} className="registerForm pt-2 mb-3">
              <div className="mb-2 text-start">
                <label htmlFor="name" className="form-label text-secondary">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={registerDetail.name}
                  onChange={onChangeHandler}
                  className="form-control bg-secondary border-0"
                  style={{
                    // background: "silver",
                    borderRadius: "0",
                  }}
                />
              </div>
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
                  className="form-control bg-secondary border-0"
                  style={{
                    // background: "silver",
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
                  className="form-control bg-secondary border-0"
                  style={{ borderRadius: "0" }}
                />
              </div>
              <button
                type="submit"
                className="float-start mt-0 btn text-light border-0 fs-6 px-4 pb-2"
                style={{ borderRadius: "0", background: "orangered" }}
              >
                Sign Up
              </button>
            </form>
            <p className="text-start text-secondary fs-6">
              <span className="me-2">Already have an account?</span>
              <Link
                to="/login"
                className="text-decoration-none fw-semibold themeText"
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
