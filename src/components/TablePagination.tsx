import React from "react"
import { SetStateAction } from "react"
/**
 * Allow to navigate in our table's pages
 */
export default function TablePagination({resultLength, maxEntries, currentPage, setFunction}: Props) {
  const handleNavigate = (destinationPage: number) => {
    setFunction(destinationPage)
  }
  return(
    <div className="ml-auto flex gap-4">
      { // if current page is not 1, display "previous page" button
        currentPage !== 1 ? 
          <button onClick={() => {handleNavigate(currentPage - 1)}} >
            Previous
          </button>
        : ""
      }
      { // Create a button for each page
        [...Array(Math.floor(resultLength / maxEntries) + 1).keys()].map(page => {
          return <button className={page == currentPage - 1 ? "underline" : "" }
              onClick={() => {handleNavigate(page + 1)}}>
              {page + 1}
            </button>
        })
      }
      { // if current page is not the last, display "next page" button
        currentPage !== Math.floor(resultLength / maxEntries) + 1 ? 
          <button onClick={() => {handleNavigate(currentPage + 1)}} >
            Next
          </button>
        : ""
      }
    </div>
  )
}
interface Props {
  resultLength: number,
  maxEntries: number,
  currentPage: number,
  setFunction: React.Dispatch<SetStateAction<number>>,
}