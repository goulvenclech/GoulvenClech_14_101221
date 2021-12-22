"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
/**
 * Tell the user how many entries are displayed in his table, and the index of the
 * currently displayed entries.
 */
function EntriesCounter({ resultLength, maxEntries, currentPage }) {
    // Calculate index of the first entry displayed 
    const [firstEntryIndex, setFirstEntryIndex] = react_2.useState(0);
    react_2.useEffect(() => {
        if (currentPage == 1) {
            // if no entries, tell "Showing 0"
            if (resultLength == 0)
                setFirstEntryIndex(0);
            else
                setFirstEntryIndex(1);
        }
        else
            setFirstEntryIndex(currentPage * maxEntries - 9);
    });
    return (react_1.default.createElement("p", null,
        "Showing ",
        firstEntryIndex,
        " to ",
        resultLength > (currentPage * maxEntries) ? (currentPage * maxEntries) : resultLength,
        " of ",
        resultLength,
        " entries"));
}
exports.default = EntriesCounter;
