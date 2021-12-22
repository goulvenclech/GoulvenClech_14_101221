"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * Limit entries in our table by page
 */
function SelectMaxEntries({ setFunction }) {
    return (react_1.default.createElement("div", null,
        "Show",
        react_1.default.createElement("select", { className: "border border-black mx-2 py-1 text-sm", onChange: (event) => { setFunction(parseInt(event.target.value)); } },
            react_1.default.createElement("option", { value: 10, selected: true }, "10"),
            react_1.default.createElement("option", { value: 25 }, "25"),
            react_1.default.createElement("option", { value: 50 }, "50"),
            react_1.default.createElement("option", { value: 100 }, "100")),
        "entries"));
}
exports.default = SelectMaxEntries;
