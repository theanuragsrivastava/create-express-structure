import mongoose from "mongoose";

// creating the schema
const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    contactNumber: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    age: {
      type: Number,
    },
    isActive: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// creating the model and exporting it
const user = mongoose.model("user", userSchema);
export default user;
