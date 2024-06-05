"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimesheetResolver = void 0;
const Timesheet_1 = require("../model/Timesheet");
exports.TimesheetResolver = {
    Query: {
        timesheets: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const timesheets = yield Timesheet_1.Timesheet.find({});
                if (!timesheets)
                    throw new Error("No timesheets found");
                return {
                    success: true,
                    total: timesheets.length,
                    timesheets,
                };
            }
            catch (e) {
                throw e;
            }
        }),
        timesheet: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const timesheet = yield Timesheet_1.Timesheet.findById(args.id);
                if (!timesheet)
                    throw new Error(`Timesheet with ID ${args.id} not found.`);
                return {
                    succes: true,
                    timesheet,
                };
            }
            catch (e) {
                throw e;
            }
        }),
    },
    Mutation: {
        addTimesheet: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const newTimesheet = yield Timesheet_1.Timesheet.create({
                    user: args.user,
                    company: args.company,
                    week: args.week,
                    workingHours: [args.workingHours],
                });
                return {
                    success: true,
                    message: `Timesheet for company ${newTimesheet.company}, week ${newTimesheet.week} is succesfully.`,
                    id: newTimesheet === null || newTimesheet === void 0 ? void 0 : newTimesheet._id,
                };
            }
            catch (e) {
                throw e;
            }
        }),
    },
};
