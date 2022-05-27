import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema(
  {
    name: { type: String },
    surname: { type: String },
    profilePhoto: { type: String },
    address: { type: String },
    phone: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Person", PersonSchema);
