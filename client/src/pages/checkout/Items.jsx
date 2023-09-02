import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalAmount } from "../../features/cartSlice/cartSlice";
import CheckoutItemCard from "../../components/checkoutItemCard/CheckoutItemCard";

export default function Items() {
  const cart = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cart, dispatch]);

  return (
    <>
      <div className="container d-flex flex-column py-3">
        {cart.cartItems.map((c) => {
          return (
            <CheckoutItemCard
              _id={c._id}
              key={c._id}
              itemTitle={c.itemTitle}
              itemPrice={c.itemPrice}
              itemImage={c.itemImage}
              quantity={c.cartQuantity}
            />
          );
        })}
      </div>
    </>
  );
}
