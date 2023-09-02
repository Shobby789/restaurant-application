import {
  addToCart,
  decrementQuantity,
  removeItem,
} from "../../features/cartSlice/cartSlice";
import { useDispatch } from "react-redux";
import "./CartProduct.css";
import { BsTrash3Fill } from "react-icons/bs";

export default function CartProduct({
  _id,
  itemTitle,
  itemDescription,
  itemPrice,
  itemImage,
  quantity,
}) {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="cartProduct d-flex justify-content-between pe-3 mb-5 align-items-center py-3 rounded"
        key={_id}
        id={_id}
      >
        <img
          src={itemImage}
          alt=""
          className="card-img-top d-inline-block border-0 p-0"
          style={{ width: "170px", height: "150px", objectFit: "contain" }}
        />
        <div className="price">
          <h5 className="fw-semibold">{itemTitle}</h5>
        </div>
        <div className="price">
          <h6>Rs.{parseInt(itemPrice)}</h6>
        </div>
        <div className="price">
          <button
            className="btn btn-outline-light"
            onClick={() =>
              dispatch(
                decrementQuantity({
                  _id,
                  itemTitle,
                  itemDescription,
                  itemPrice,
                  itemImage,
                  quantity,
                })
              )
            }
          >
            -
          </button>
          <span className="mx-2 text-light">{quantity}</span>
          <button
            className="btn btn-outline-light"
            onClick={() =>
              dispatch(
                addToCart({
                  _id,
                  itemTitle,
                  itemDescription,
                  itemPrice,
                  itemImage,
                  quantity,
                })
              )
            }
          >
            +
          </button>
        </div>
        <div className="price">
          <h6>Rs.{parseInt(itemPrice) * quantity}</h6>
        </div>
        <div className="price">
          <button
            className="btn btn-outline-danger fw-bold fs-6 pb-2"
            onClick={() =>
              dispatch(
                removeItem({
                  _id,
                  itemTitle,
                  itemDescription,
                  itemPrice,
                  itemImage,
                })
              )
            }
          >
            {/* <BsTrash3Fill /> */}X
          </button>
        </div>
      </div>
    </>
  );
}
