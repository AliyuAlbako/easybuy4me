const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    pricePerUnit: { type: Number, required: true },
    minOrderQuantity: { type: Number, required: true }, // Minimum bulk order quantity
    stock: { type: Number, required: true }, // Available stock
    category: { type: String, required: true },
    // vendor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to vendor
    images: [{ type: String }], // Array of image URLs
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);