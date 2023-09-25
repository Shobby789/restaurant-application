import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { TbChecklist } from "react-icons/tb";
import { BiSolidDish, BiSolidUserAccount } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import "./SideBar.css";

export default function SideBar({ children }) {
  return (
    <Container fluid style={{ height: "100vh" }}>
      <Row className="h-100">
        <Col md={2} className="text-center bg-success">
          <ul className="nav nav-pills text-dark d-flex justify-content-evenly flex-column h-75 pt-3">
            <Card.Header
              as={"h4"}
              className="mt-4 mb-3 fw-bold text-light border-bottom pb-3"
            >
              Urbee Restaurant
            </Card.Header>
            <li className="nav-item mt-2">
              <Link
                to="/"
                className="nav-link fs-6 text-light fw-semibold px-2 d-flex align-items-center"
              >
                <span className="fs-4">
                  <RiDashboardFill />
                </span>
                <span className="ms-2 d-none d-sm-inline fs-5 pt-2">
                  Dashboad
                </span>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link
                to="/orders"
                className="nav-link fs-6 text-light fw-semibold px-2 d-flex align-items-center"
              >
                <span className="fs-3">
                  <TbChecklist />
                </span>
                <span className="ms-2 d-none d-sm-inline fs-5 pt-1">
                  Orders
                </span>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link
                to="/items"
                className="nav-link text-light fw-semibold px-2 d-flex align-items-center"
              >
                <span className="fs-4">
                  <BiSolidDish />
                </span>
                <span className="ms-2 d-none d-sm-inline fs-5 pt-1">Items</span>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link
                to="/customers"
                className="nav-link fs-6 text-light fw-semibold px-2 d-flex align-items-center"
              >
                <span className="fs-4">
                  <BiSolidUserAccount />
                </span>
                <span className="ms-2 d-none d-sm-inline fs-5 pt-1">
                  Customers
                </span>
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link
                to="/settings"
                className="nav-link fs-6 text-light fw-semibold px-2 d-flex align-items-center"
              >
                <span className="fs-4">
                  <AiFillSetting />
                </span>
                <span className="ms-2 d-none d-sm-block fs-5 pt-1">
                  Settings
                </span>
              </Link>
            </li>
          </ul>
        </Col>
        <Col md={10} className="px-0 bg-dark childComponent">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
