/// <reference types="react" />
/**
 * The HTML Table element in itself, contains all the results
 */
export default function Table({ cols, items }: Props): JSX.Element;
interface Props {
    cols: Array<string>;
    items: Array<Array<string>>;
}
export {};
