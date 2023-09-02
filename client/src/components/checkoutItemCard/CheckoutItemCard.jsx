import "./CheckoutItemCard.css";

export default function CheckoutItemCard({
  _id,
  itemTitle,
  quantity,
  itemPrice,
  itemImage,
}) {
  return (
    <div className="row mb-3 py-3 checkoutItemCard">
      <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
        <img
          src={itemImage}
          alt=""
          className="img-thumbnail border-0"
          style={{ background: "transparent" }}
        />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
        <h6>{itemTitle}</h6>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
        <h6>{quantity}x</h6>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 d-flex align-items-center justify-content-center">
        Rs.{quantity * itemPrice}
      </div>
    </div>
  );
}
