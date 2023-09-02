import "./Carousel.css";
import img2 from "../../images/black-bg/2.png";
import img3 from "../../images/black-bg/3.png";
import img4 from "../../images/black-bg/4.png";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active c-item" data-bs-interval={3000}>
            <img src={img4} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-md-block w-100">
              <h1 className="fw-bold mb-4">
                Find the Best Fast Food in Your
                <br />
                Home Town
              </h1>
              <p className="mx-auto fs-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                molestiae voluptatum consectetur quo quae ea neque dolores non.
              </p>
              <button
                className="btn text-light fw-semibold py-3 px-4 border-0"
                style={{ background: "orangered", borderRadius: "0" }}
              >
                Dicover More
              </button>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-interval={3000}>
            <img src={img2} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-md-block w-100">
              <h1 className="fw-bold mb-4">
                Find the Best Food in Your Home Town
              </h1>
              <p className="mx-auto fs-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                molestiae voluptatum consectetur quo quae ea neque dolores non.
              </p>
              <button
                className="btn fw-semibold py-3 text-light px-4 border-0"
                style={{ background: "orangered", borderRadius: "0" }}
              >
                Dicover More
              </button>
            </div>
          </div>
          <div className="carousel-item c-item" data-bs-interval={3000}>
            <img src={img3} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-md-block w-100 text-center">
              <h1 className="fw-bold mb-4 mx-auto">
                Find the Best Food in Your Home Town
              </h1>
              <p className="mx-auto fs-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
                molestiae voluptatum consectetur quo quae ea neque dolores non.
              </p>
              <button
                className="btn text-light fw-semibold py-3 px-4 border-0"
                style={{ background: "orangered", borderRadius: "0" }}
              >
                Dicover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
