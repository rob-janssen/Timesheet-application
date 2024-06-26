"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const CustomerSchema = new mongoose_1.default.Schema({
    customerName: { type: String, required: true },
    company: { type: mongoose_1.default.Schema.ObjectId, ref: 'TimesheetCompany' }
});
module.exports = mongoose_1.default.model('Customer', CustomerSchema);
