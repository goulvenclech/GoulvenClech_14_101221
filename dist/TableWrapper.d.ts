/// <reference types="react" />
/**
 * Wrap together our table and some useful tools like research or filters
 */
export default function TableWrapper({ id, cols, items }: Props): JSX.Element;
interface Props {
    id: string;
    cols: Array<string>;
    items: Array<Array<string>>;
}
export {};
