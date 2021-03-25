"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup_1 = __importDefault(require("yup"));
module.exports = yup_1.default.object().shape({
    email: yup_1.default.string().required().email(),
    name: yup_1.default.string().required(),
    dateOfBirth: yup_1.default.date().required(),
    phoneNumber: yup_1.default.number().required(),
    street: yup_1.default.string(),
    city: yup_1.default.string(),
    state: yup_1.default.string(),
    zipCode: yup_1.default.number().required().min(5).max(10),
    country: yup_1.default.string()
});
