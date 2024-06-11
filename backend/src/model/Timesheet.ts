import mongoose from "mongoose";

import { Schema, Model, model, Document } from "mongoose";

export interface ITimesheet extends Document {
  user: string;
  company: string;
  week: string;
}

export const TimesheetSchema = new mongoose.Schema(
  {
    // user: { type: String, required: true },

    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    company: { type: String, required: true },
    week: { type: String, required: true },
    year: { type: String, required: true },
    workingHours: [
      {
        day: Date,
        hours: Number,
        description: String,
      },
    ],
  },
  { timestamps: true }
);

export const Timesheet: Model<ITimesheet> = model<ITimesheet>(
  "Timesheet",
  TimesheetSchema
);
