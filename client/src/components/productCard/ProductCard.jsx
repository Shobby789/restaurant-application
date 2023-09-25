import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { addToCart } from "../../features/cartSlice/cartSlice";
import { IoClose } from "react-icons/io5";

export default function ProductCard({
  _id,
  itemTitle,
  itemDescription,
  itemPrice,
  itemImage,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <div
        id={_id}
        key={_id}
        className="card m-4 border-0 pt-0 pb-4"
        style={{
          width: "18rem",
          borderRadius: "20px",
        }}
      >
        <img
          src={itemImage}
          alt=""
          className="card-img top h-50"
          style={{
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            objectFit: "contain",
            cursor: "pointer",
          }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
        <div className="card-body text-start d-flex flex-column justify-content-between">
          <h5 className="card-title fw-bold text-light">{itemTitle}</h5>
          <p className="card-text text-secondary">{itemDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-subtitle float-start fw-semibold text-light">
              Rs.{parseInt(itemPrice)}
            </h5>
            <button
              className="btn border-0 text-white fw-semibold float-end"
              style={{
                background: "orangered",
                borderRadius: "0",
                fontSize: "15px",
              }}
              onClick={() =>
                dispatch(
                  addToCart({
                    _id,
                    itemTitle,
                    itemDescription,
                    itemPrice,
                    itemImage,
                  })
                )
              }
            >
              Add To Bucket
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        // key={_id}
        className="modal fade modal-fullscreen-sm-down"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog py-5">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header text-end border-1 border-secondary">
              <button
                type="button"
                className="btn btn-danger ms-auto py-1"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <IoClose className="fw-bold fs-5 text-dark" />
              </button>
            </div>
            <div className="modal-body text-light text-center pb-4">
              <img
                src={itemImage}
                alt=""
                className="img-thumbnail h-50 w-50 border-0"
                style={{ background: "transparent" }}
              />
              <div className="w-100">
                <h4 className="text-light">{itemTitle}</h4>
                <p className="text-secondary w-75 mx-auto">{itemDescription}</p>
                <button
                  className="btn border-0 text-white fw-semibold"
                  style={{
                    background: "orangered",
                    borderRadius: "0",
                    fontSize: "15px",
                  }}
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id,
                        itemTitle,
                        itemDescription,
                        itemPrice,
                        itemImage,
                      })
                    )
                  }
                >
                  Add To Bucket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
