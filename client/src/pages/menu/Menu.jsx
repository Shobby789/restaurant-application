import React from "react";
import CommonHeader from "../../components/commonHeader/CommonHeader";
import ProductGrid from "../../components/productGrid/ProductGrid";

export default function Menu() {
  return (
    <div className="">
      <CommonHeader menu={"Menu"} />
      <ProductGrid />
    </div>
  );
}
