import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.allCart);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100">
        <div className="container-fluid">
          <Link
            className="navbar-brand fw-bold fs-1"
            href="/"
            style={{ color: "orangered" }}
          >
            Urbee
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon" /> */}
            <HiMenu className="text-light fs-2" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/myOrders">
                  My Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-2" role="search">
              <li className="nav-item" style={{ listStyle: "none" }}>
                <Link
                  className="nav-link fw-semibold fs-6"
                  to="/cart"
                  style={{ color: "orangered" }}
                >
                  <FaShoppingCart className="fs-4" /> {cart.cartItems.length}
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="logoutBtn pb-1"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
