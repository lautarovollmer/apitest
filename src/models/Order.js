import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    address: { type: String },
    phone: { type: String },
    person: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }],
    employee: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export default mongoose.model("Orders", OrdersSchema);
