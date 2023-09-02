import "./AboutSection.css";
import aboutImg from "../../images/black-bg/4.png";

export default function AboutSection() {
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 px-3">
            <img src={aboutImg} alt="" className="img-fluid h-100" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 px-3 aboutText">
            <h1 className="mb-3 fw-bold">Best Restaurant in Your Home Town</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              quisquam, tempora possimus ab dignissimos iusto aut eveniet
              itaque, nemo praesentium explicabo unde voluptate.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
              quisquam, tempora possimus ab dignissimos iusto aut eveniet
              itaque, nemo praesentium explicabo unde voluptate.
            </p>
            <div>
              <button
                className="btn text-white border-0 py-2 px-4 fw-semibold"
                style={{ borderRadius: "0", background: "orangered" }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
