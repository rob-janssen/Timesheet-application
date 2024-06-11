import mongoose from "mongoose";
import { Schema, Model, model, Document } from "mongoose";

const bcrypt = require("bcrypt");

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  company: string;
  role: string;
}

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: { type: String, required: true },
    customers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
    role: { type: String, required: false },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 12;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

export const User: Model<IUser> = model<IUser>("User", UserSchema);
