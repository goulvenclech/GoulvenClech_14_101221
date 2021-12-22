import React from "react"
import { SetStateAction } from "react"
/**
 * Limit entries in our table by page
 */
export default function SelectMaxEntries({setFunction}: Props) {
  return(
    <div>
      Show
      <select className="border border-black mx-2 py-1 text-sm"
        onChange={(event) => {setFunction(parseInt(event.target.value))}} >
        <option value={10} selected>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
      entries
    </div>
  )
}
interface Props {
  setFunction: React.Dispatch<SetStateAction<number>>
}