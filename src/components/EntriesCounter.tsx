import React from "react"
import { useEffect, useState } from "react"
/**
 * Tell the user how many entries are displayed in his table, and the index of the 
 * currently displayed entries.
 */
export default function EntriesCounter({resultLength, maxEntries, currentPage}: Props) {
  // Calculate index of the first entry displayed 
  const [firstEntryIndex, setFirstEntryIndex] = useState(0)
  useEffect(() => {
    if(currentPage == 1){
      // if no entries, tell "Showing 0"
      if(resultLength == 0) setFirstEntryIndex(0)
      else setFirstEntryIndex(1)
    }else setFirstEntryIndex( currentPage * maxEntries - 9)
  })
  return(
    <p>
      Showing { firstEntryIndex 
      } to { resultLength > (currentPage*maxEntries) ? (currentPage*maxEntries) : resultLength
      } of {resultLength} entries
    </p>
  )
}
interface Props {
  resultLength: number,
  maxEntries: number,
  currentPage: number
}