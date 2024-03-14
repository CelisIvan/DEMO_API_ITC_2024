"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StudentSchema = new mongoose_1.Schema({
    id: String,
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    favorite_color: { type: String, required: true },
    birth_date: { type: Date, required: true },
});
const Student = (0, mongoose_1.model)('Student', StudentSchema);
exports.default = Student;
