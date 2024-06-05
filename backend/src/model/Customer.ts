import mongoose  from 'mongoose'

const CustomerSchema = new mongoose.Schema({
    customerName: {type: String, required: true},
    company: { type: mongoose.Schema.ObjectId, ref: 'TimesheetCompany'}
}, { timestamps: true })

module.exports = mongoose.model('Customer', CustomerSchema)