import mongoose from "mongoose";
import { Schema, Model, model, Document } from "mongoose";


export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  company: string;
}

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    company: { type: String, required: true },
    //TODO: onderstaande regel gebruiken

    // company: { type: mongoose.Schema.Types.ObjectId, ref: 'TimesheetCompany'}
  },
  { timestamps: true }
);

export const User: Model<IUser> = model<IUser>("User", UserSchema);
