const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    color: { type: String },
    size: { type: String },
    category: { type: Array, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

modile.exports = mongoose.model("Product", ProductSchema);
