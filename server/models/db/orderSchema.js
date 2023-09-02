const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: false },
    orderedItems: { type: Array },
    orderAmount: { type: Number },
    status: { type: String },
    date: { type: String },
  },
  {
    collection: "Orders",
  }
);

mongoose.model("Orders", orderSchema);
