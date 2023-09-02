import { useNavigate, useParams } from "react-router-dom";
import "./ItemCard.css";

export default function ItemCard({
  _id,
  itemTitle,
  itemImage,
  itemDescription,
  itemPrice,
}) {
  const params = useParams();
  // const navigate = useNavigate();
  const handleDelete = async (_id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/deleteItem/${_id}`, {
        method: "DELETE",
      });
      const response = await res.json();
      alert(response.status);
    } catch (error) {
      console.log("handleDelete api error >>> ", error);
    }
  };

  const handleUpdate = async (_id) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/editItem/${params._id}`,
        {
          method: "GET",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify({ _id }),
        }
      );
      console.log("handleUpdate >> ", await res.json());
      console.log("editItem Id >>> ", _id);
    } catch (error) {
      console.log("handleUpdate error >>> ", error);
    }
  };

  return (
    <>
      <div
        className="card text-light bg-dark border border-secondary itemCard pt-3"
        style={{ width: "17rem" }}
        _id={_id}
      >
        <img
          src={itemImage}
          alt=""
          className="card-img-top"
          width={140}
          height={180}
        />
        <div className="card-body text-light">
          <h5 className="card-title text-light">{itemTitle}</h5>
          <p className="card-text text-secondary">{itemDescription}</p>
          <h6 className="card-text text-secondary text-light">
            Rs. {itemPrice}
          </h6>
          <div className="card-actions text-end">
            <button
              className="btn btn-danger mx-1 fw-semibold"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
            <button
              // data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              className="btn btn-warning mx-1 fw-semibold"
              onClick={() => handleUpdate(_id)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-dark">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-light"
                id="exampleModalLabel"
              >
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="" className="form-label text-light">
                    Update Name
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 border-0 mb-2 bg-secondary"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="" className="form-label text-light">
                    Update Price
                  </label>
                  <input
                    type="number"
                    className="form-control py-2 border-0 mb-2 bg-secondary"
                  />
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="" className="form-label text-light">
                    Update Description
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 border-0 mb-2 bg-secondary"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <label htmlFor="" className="form-label text-light">
                    Update Category
                  </label>
                  <input
                    type="text"
                    className="form-control py-2 border-0 mb-2 bg-secondary"
                  />
                </div>
              </div>
              <div className="row ps-3">
                <img
                  src="https://www.citypng.com/public/uploads/preview/hd-beef-burger-ham-and-cheese-fast-food-png-11653072600ghco4pywoj.png"
                  alt=""
                  className="img-thumbnail w-50"
                />
              </div>
              <div className="row px-3">
                <label htmlFor="" className="float-start ms-0 ps-0 form-label">
                  Change Image
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  className="form-control border-0 py-2 bg-secondary mb-2"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-success">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
