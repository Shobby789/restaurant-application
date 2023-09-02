import "./ContactForm.css";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";

export default function ContactForm() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center py-5 min-vh-100">
      <div className="container py-5">
        <h3 className="text-light fw-bold mb-4 text-center">Contact Us</h3>
        <div className="row w-100 mx-auto mb-3">
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className="bg-dark py-3 px-3">
              <h5 className="fw-bold">
                <span>
                  <IoCall
                    className="me-1 pt-0 fw-bold fs-4"
                    style={{ color: "orangered" }}
                  />
                </span>
                Head Office
              </h5>
              <p className="ms-1">1234567890</p>
              <h5 className="fw-bold">
                <span className="me-1 fs-4 pt-0" style={{ color: "orangered" }}>
                  <FaLocationDot />
                </span>
                Location
              </h5>
              <p className="ms-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam vel, libero fugiat hic est facilis.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className="bg-dark py-3 px-3">
              <h5 className="fw-bold">
                <span>
                  <IoCall
                    className="me-1 pt-0 fw-bold fs-4"
                    style={{ color: "orangered" }}
                  />
                </span>
                Head Office Lahore
              </h5>
              <p className="ms-1">1234567890</p>
              <h5 className="fw-bold">
                <span className="me-1 fs-4 pt-0" style={{ color: "orangered" }}>
                  <FaLocationDot />
                </span>
                Location
              </h5>
              <p className="ms-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam vel, libero fugiat hic est facilis.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <div className="bg-dark py-3 px-3">
              <h5 className="fw-bold">
                <span>
                  <IoCall
                    className="me-1 pt-0 fw-bold fs-4"
                    style={{ color: "orangered" }}
                  />
                </span>
                Head Office Islamabad
              </h5>
              <p className="ms-1">1234567890</p>
              <h5 className="fw-bold">
                <span className="me-1 fs-4 pt-0" style={{ color: "orangered" }}>
                  <FaLocationDot />
                </span>
                Location
              </h5>
              <p className="ms-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam vel, libero fugiat hic est facilis.
              </p>
            </div>
          </div>
        </div>
        <div className="row w-100 mx-auto">
          <div className="col-lg-6 col-md-5 col-sm-12">
            <div className="bg-dark px-3 pt-3 pb-2 mb-3">
              <h5 className="fw-bold">
                <span>
                  <IoCall
                    className="me-1 pt-0 fw-bold fs-4"
                    style={{ color: "orangered" }}
                  />
                </span>
                Help Line
              </h5>
              <p className="ms-1">UAN: 111 222 333</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12">
            <div className="bg-dark px-3 pt-3 pb-2 mb-3">
              <h5 className="fw-bold">
                <span>
                  <HiMailOpen
                    className="me-1 pt-0 fw-bold fs-4"
                    style={{ color: "orangered" }}
                  />
                </span>
                Head Office
              </h5>
              <p className="ms-1">customercare@urbee.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
