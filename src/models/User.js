import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: 5,
      maxlength: 20,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 8,
      maxlength: 50,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      maxlength: 100,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    fullName: { type: String },
    phone: { type: String },
    role: { type: String },
    division: { type: String },
    employee: { type: Boolean, default: false },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
