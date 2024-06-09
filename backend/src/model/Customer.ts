import mongoose from "mongoose";
import { Schema, Model, model, Document } from "mongoose";

export interface ICustomer extends Document {
  customerName: string;
  customerEmail: string;
  customerAddress: string;
}

export const CustomerSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerAddress: { type: String },
  },
  { timestamps: true }
);

export const Customer: Model<ICustomer> = model<ICustomer>(
  "Customer",
  CustomerSchema
);
