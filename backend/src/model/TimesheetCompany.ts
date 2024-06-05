import mongoose  from 'mongoose'

const TimesheetCompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  customers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Customer" }],
}, { timestamps: true });

module.exports = mongoose.model('TimeSheetCompany', TimesheetCompanySchema)