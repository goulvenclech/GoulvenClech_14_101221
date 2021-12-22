"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
/**
 * Allow to navigate in our table's pages
 */
function TablePagination({ resultLength, maxEntries, currentPage, setFunction }) {
    const handleNavigate = (destinationPage) => {
        console.log(currentPage + " => " + destinationPage);
        setFunction(destinationPage);
    };
    return (react_1.default.createElement("div", { className: "ml-auto flex gap-4" },
        console.log(Math.floor(resultLength / maxEntries) + 1),
        currentPage !== 1 ?
            react_1.default.createElement("button", { onClick: () => { handleNavigate(currentPage - 1); } }, "Previous")
            : "",
        [...Array(Math.floor(resultLength / maxEntries) + 1).keys()].map(page => {
            return react_1.default.createElement("button", { className: page == currentPage - 1 ? "underline" : "", onClick: () => { handleNavigate(page + 1); } }, page + 1);
        }),
        currentPage !== Math.floor(resultLength / maxEntries) + 1 ?
            react_1.default.createElement("button", { onClick: () => { handleNavigate(currentPage + 1); } }, "Next")
            : ""));
}
exports.default = TablePagination;
