import React from "react"
import { useEffect, useState } from "react"
import SelectMaxEntries from "./components/SelectMaxEntries"
import Table from "./Table"
import InputSearch from "./components/InputSearch"
import EntriesCounter from "./components/EntriesCounter"
import TablePagination from "./components/TablePagination"

/**
 * Wrap together our table and some useful tools like research or filters
 */
export function TableWrapper({id, cols, items}: Props) {
  // store all useful information
  const [query, setQuery] = useState("")
  const [maxEntries, setMaxEntries] = useState(10)
  const [results, setResults] = useState(items.slice(0,10))
  const [resultLength, setResultLength] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    console.log(maxEntries + " " + currentPage + " " + resultLength)
    // filter results using the research query
    const filteredItems = items.filter(properties => 
      properties.some(property => property.includes(query)))
    setResultLength(filteredItems.length)
    // Slice results using the max entries limit & the current page
    const slicedItems = filteredItems.slice((maxEntries*currentPage-maxEntries), maxEntries*currentPage)
    setResults(slicedItems)
    console.log(maxEntries + " " + currentPage + " " + resultLength)
  }, [query, maxEntries, currentPage])
  return(
    <section>
      <h2 className="sr-only">
        {id}
      </h2>
      <div className="flex my-6">
        <SelectMaxEntries setFunction={setMaxEntries}/>
        <InputSearch setFunction={setQuery} />
      </div>
      <Table cols={cols} items={results} />
      <div className="flex my-6">
        <EntriesCounter resultLength={resultLength} maxEntries={maxEntries} 
          currentPage={currentPage} />
        <TablePagination resultLength={resultLength} maxEntries={maxEntries} 
          currentPage={currentPage} setFunction={setCurrentPage} />
      </div>
    </section>
  )
}
interface Props {
  id: string,
  cols: Array<string>,
  items: Array<Array<string>>
}