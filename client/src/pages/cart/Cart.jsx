import React from "react";
import CommonHeader from "../../components/commonHeader/CommonHeader";
import CartProductGrid from "../../components/cartProductGrid/CartProductGrid";

export default function Cart() {
  return (
    <>
      <CommonHeader menu={"Your Cart"} />
      <CartProductGrid />
    </>
  );
}
