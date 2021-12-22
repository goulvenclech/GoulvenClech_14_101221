"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * The HTML Table element in itself, contains all the results
 */
function Table({ cols, items }) {
    return (react_1.default.createElement("table", { className: "table-auto w-full text-left" },
        react_1.default.createElement("thead", { className: "" },
            react_1.default.createElement("tr", null, // The list of string "cols" is every table columns we need to create   
            cols.map((col, index) => {
                return react_1.default.createElement("th", { key: index }, col);
            }))),
        react_1.default.createElement("tbody", { className: "border-y border-black" }, items.map((item, index) => {
            return react_1.default.createElement("tr", { className: "leading-loose border-b border-slate-400 " +
                    (index % 2 == 0 ? "bg-slate-100" : ""), key: index }, // create a table data for each columns, with every value of the item
            item.map((value, index) => {
                return react_1.default.createElement("td", { key: index }, value);
            }));
        }))));
}
exports.default = Table;
