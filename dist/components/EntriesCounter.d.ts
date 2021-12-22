/// <reference types="react" />
/**
 * Tell the user how many entries are displayed in his table, and the index of the
 * currently displayed entries.
 */
export default function EntriesCounter({ resultLength, maxEntries, currentPage }: Props): JSX.Element;
interface Props {
    resultLength: number;
    maxEntries: number;
    currentPage: number;
}
export {};
