import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Items from "./pages/items/Items";
import Orders from "./pages/orders/Orders";
import Customers from "./pages/customers/Customers";
import Analytics from "./pages/analytics/Analytics";
import Settings from "./pages/settings/Settings";

export default function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}
