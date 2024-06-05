"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timesheet = exports.TimesheetSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
exports.TimesheetSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'User', required: true },
    company: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'TimesheetCompany', required: true },
    week: { type: String, required: true },
    workingHours: [{
            day: { type: String, required: true },
            hours: { type: Number },
            description: { type: String }
        }]
});
// module.exports = mongoose.model('Timesheet', TimesheetSchema)
// export const Task: Model<ITask> = model<ITask>('Task', TaskSchema)
exports.Timesheet = (0, mongoose_2.model)('Timesheet', exports.TimesheetSchema);
