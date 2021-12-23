"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWrapper = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const SelectMaxEntries_1 = __importDefault(require("./components/SelectMaxEntries"));
const Table_1 = __importDefault(require("./Table"));
const InputSearch_1 = __importDefault(require("./components/InputSearch"));
const EntriesCounter_1 = __importDefault(require("./components/EntriesCounter"));
const TablePagination_1 = __importDefault(require("./components/TablePagination"));
/**
 * Wrap together our table and some useful tools like research or filters
 */
function TableWrapper({ id, cols, items }) {
    // store all useful information
    const [query, setQuery] = react_2.useState("");
    const [maxEntries, setMaxEntries] = react_2.useState(10);
    const [results, setResults] = react_2.useState(items.slice(0, 10));
    const [resultLength, setResultLength] = react_2.useState(0);
    const [currentPage, setCurrentPage] = react_2.useState(1);
    react_2.useEffect(() => {
        // filter results using the research query
        const filteredItems = items.filter(properties => properties.some(property => property.includes(query)));
        setResultLength(filteredItems.length);
        // Slice results using the max entries limit & the current page
        const slicedItems = filteredItems.slice((maxEntries * currentPage - maxEntries), maxEntries * currentPage);
        setResults(slicedItems);
    }, [query, maxEntries, currentPage]);
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("h2", { className: "sr-only" }, id),
        react_1.default.createElement("div", { className: "flex my-6" },
            react_1.default.createElement(SelectMaxEntries_1.default, { setFunction: setMaxEntries }),
            react_1.default.createElement(InputSearch_1.default, { setFunction: setQuery })),
        react_1.default.createElement(Table_1.default, { cols: cols, items: results }),
        react_1.default.createElement("div", { className: "flex my-6" },
            react_1.default.createElement(EntriesCounter_1.default, { resultLength: resultLength, maxEntries: maxEntries, currentPage: currentPage }),
            react_1.default.createElement(TablePagination_1.default, { resultLength: resultLength, maxEntries: maxEntries, currentPage: currentPage, setFunction: setCurrentPage }))));
}
exports.TableWrapper = TableWrapper;
