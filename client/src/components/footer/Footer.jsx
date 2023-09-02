import "./Footer.css";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer pt-5 pb-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3 col-sm-12 mb-3 ps-4">
              <h1 className="fw-bold" style={{ color: "orangered" }}>
                Urbee
              </h1>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                eius voluptatum accusantium.
              </p>
              <p className="fs-2">
                <span>
                  <BiLogoFacebookCircle className="mx-1 socialLink text-light" />
                </span>
                <span>
                  <BiLogoInstagram className="mx-1 socialLink text-light" />
                </span>
                <span>
                  <BiLogoTwitter className="mx-1 socialLink text-light" />
                </span>
                <span>
                  <BiLogoLinkedinSquare className="mx-1 socialLink text-light" />
                </span>
              </p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mb-3 d-flex flex-column justify-content-evenly">
              <h4 className="fw-semibold text-light">Contact us</h4>
              <a
                href="http://www.restaurant.com"
                className="text-light text-decoration-none"
              >
                Address: Block-14 Gulistan-e-Johar, Karachi
              </a>
              <a
                href="tel:+1234567890"
                className="text-light text-decoration-none"
              >
                Call+: 1234567890
              </a>
              <a
                href="mailto:mail.com"
                className="text-light text-decoration-none overflow-auto"
              >
                Email: smshoaib2001@gmail.com
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 mb-3 d-flex flex-column justify-content-evenly">
              <h4 className="fw-semibold text-light">View Guides</h4>
              <Link to="/home" className="text-white text-decoration-none">
                Home
              </Link>
              <Link to="/about" className="text-white text-decoration-none">
                About
              </Link>
              <Link to="/menu" className="text-white text-decoration-none">
                Menu
              </Link>
              <Link to="/contact" className="text-white text-decoration-none">
                Contact
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mb-3 news pt-1">
              <h4 className="fw-semibold mb-3 text-light">Recent News</h4>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="text-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="container border border-light mt-2 mx-auto"></div>
          <p
            className="fw-light text-secondary text-center mt-2"
            style={{ fontSize: "1.1vw" }}
          >
            <span className="me-1">Connect with me:</span>
            <a
              href="mailto:smshoaib2001@gmail.com"
              className="text-decoration-none text-secondary"
            >
              smshoaib2001@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
