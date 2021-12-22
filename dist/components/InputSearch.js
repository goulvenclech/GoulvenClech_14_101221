"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 *
 */
function InputSearch({ setFunction }) {
    return (react_1.default.createElement("div", { className: "ml-auto" },
        "Search:",
        react_1.default.createElement("input", { type: "text", name: "tableResearchInput", onChange: (event) => { setFunction(event.target.value); }, className: "border border-black ml-1 px-1 text-sm" })));
}
exports.default = InputSearch;
