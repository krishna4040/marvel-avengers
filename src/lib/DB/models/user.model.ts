import mongoose, { Schema, Model, Document } from "mongoose";

interface User extends Document {
  email: string;
  password: string;
  name: string;
  image: string;
  method: "google" | "github";
}

const authSchema = new Schema<User>(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      trim: true,
    },
    name: {
      type: String,
      lowercase: true,
      required: [true, "Name is required."],
      trim: true,
    },
    image: {
      type: String,
      default:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg",
    },
    method: {
      type: String,
      lowercase: true,
      enum: ["google", "github"],
      trim: true,
      required: [true, "Method is required"],
    },
  },
  { timestamps: true }
);

const UserModel: Model<User> =
  mongoose.models["user"] || mongoose.model<User>("user", authSchema);

export { UserModel };
