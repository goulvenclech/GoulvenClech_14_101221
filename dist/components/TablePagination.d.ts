import React from "react";
import { SetStateAction } from "react";
/**
 * Allow to navigate in our table's pages
 */
export default function TablePagination({ resultLength, maxEntries, currentPage, setFunction }: Props): JSX.Element;
interface Props {
    resultLength: number;
    maxEntries: number;
    currentPage: number;
    setFunction: React.Dispatch<SetStateAction<number>>;
}
export {};
