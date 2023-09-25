import React from "react";
import { Route, Routes } from "react-router-dom";

import Orders from "./pages/orders/Orders";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Customers from "./pages/customers/Customers";
import Settings from "./pages/settings/Settings";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import UpdateProduct from "./pages/updateProduct/UpdateProduct";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/order/order-details/:_id" element={<OrderDetails />} />
      <Route path="/items/update-item/:_id" element={<UpdateProduct />} />
    </Routes>
  );
}
