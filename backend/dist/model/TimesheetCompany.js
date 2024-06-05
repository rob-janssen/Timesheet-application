"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TimesheetCompanySchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    users: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }],
    customers: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Customer" }],
});
module.exports = mongoose_1.default.model('TimeSheetCompany', TimesheetCompanySchema);
