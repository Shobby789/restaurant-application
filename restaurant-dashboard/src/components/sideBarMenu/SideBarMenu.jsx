import { Link } from "react-router-dom";
import "./SideBarMenu.css";

export default function SideBarMenu({ children }) {
  return (
    <>
      <div
        className="container-fluid"
        style={{ height: "100vh", overflowY: "scroll" }}
      >
        <div className="row">
          <div className="dashboard bg-dark col-auto col-md-2 min-vh-100 pt-5 d-flex flex-column justify-content-start">
            <h4 className="text-white px-2 d-none d-sm-inline pb-2 border-bottom border-light">
              Dashboard
            </h4>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item mt-2">
                <Link
                  to="/"
                  className="nav-link fs-5 text-white fw-semibold px-2 d-flex align-items-center"
                >
                  <span className="bi bi-house"></span>
                  <span className="ms-3 d-none d-sm-inline">Dashboad</span>
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  to="/items"
                  className="nav-link fs-5 text-white fw-semibold px-2 d-flex align-items-center"
                >
                  <span className="bi bi-menu-down"></span>
                  <span className="ms-3 d-none d-sm-inline">Items</span>
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  to="/orders"
                  className="nav-link fs-5 text-white fw-semibold px-2 d-flex align-items-center"
                >
                  <span className="bi bi-card-checklist"></span>
                  <span className="ms-3 d-none d-sm-inline">Orders</span>
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  to="/customers"
                  className="nav-link fs-5 text-white fw-semibold px-2 d-flex align-items-center"
                >
                  <span className="bi bi-people"></span>
                  <span className="ms-3 d-none d-sm-inline">Customers</span>
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  to="/settings"
                  className="nav-link fs-5 text-white fw-semibold px-2 d-flex align-items-center"
                >
                  <span className="bi bi-gear"></span>
                  <span className="ms-3 d-none d-sm-block">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
          <main
            className="col-auto col-md-10 py-4 px-0 text-white"
            style={{
              color: "black",
              maxHeight: "100vh",
              overflowY: "scroll",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
