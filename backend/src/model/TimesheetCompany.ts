import mongoose  from 'mongoose'
import { Schema, Model, model, Document } from "mongoose";

export interface ITimesheetCompany extends Document {
  name: string;
  users: [string]
  customers: [string]
}

export const TimesheetCompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  // customers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
  customers: [{ type: String }],
}, { timestamps: true });

export const TimesheetCompany: Model<ITimesheetCompany> = model<ITimesheetCompany>("TimesheetCompany", TimesheetCompanySchema)