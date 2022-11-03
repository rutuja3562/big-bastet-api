const mongoose = require("mongoose");

const vegitablesCartSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    imgUrl: { type: String, required: true },
    brand: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("CartItems", vegitablesCartSchema);
// brand:{type:String, required:true},
