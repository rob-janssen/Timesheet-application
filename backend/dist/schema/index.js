"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergedGQLSchema = void 0;
const merge_1 = require("@graphql-tools/merge");
const timesheets_1 = require("./timesheets");
exports.mergedGQLSchema = (0, merge_1.mergeTypeDefs)([timesheets_1.timesheetsGQLSchema]);
