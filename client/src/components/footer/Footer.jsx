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
              <p className="">
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
              <h4 className="fw-semibold">Contact us</h4>
              <Link to="/" className="text-light text-decoration-none">
                Address: Block-14 Gulistan-e-Johar, Karachi
              </Link>
              <Link href="/" className="text-light text-decoration-none">
                Call+: 1234567890
              </Link>
              <Link
                to="mailto:mail.com"
                className="text-light text-decoration-none overflow-auto"
              >
                Email: urbee@gmail.com
              </Link>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 mb-3 d-flex flex-column justify-content-evenly">
              <h4 className="fw-semibold">View Guides</h4>
              <Link to="/home" className="text-light text-decoration-none">
                Home
              </Link>
              <Link to="/about" className="text-light text-decoration-none">
                About
              </Link>
              <Link to="/menu" className="text-light text-decoration-none">
                Menu
              </Link>
              <Link to="/contact" className="text-light text-decoration-none">
                Contact
              </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 mb-3 news pt-2">
              <h4 className="fw-semibold mb-3">Recent News</h4>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </p>
            </div>
          </div>
          <div className="container border border-secondary mt-2 mx-auto"></div>
          <p
            className="fw-light text-secondary text-center mt-2"
            style={{ fontSize: "1.1vw" }}
          >
            <span className="me-1">Connect with me:</span>
            <Link
              to="mailto:smshoaib2001@gmail.com"
              className="text-decoration-none text-secondary"
            >
              smshoaib2001@gmail.com
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
