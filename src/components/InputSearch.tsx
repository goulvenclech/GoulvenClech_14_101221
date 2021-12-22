import React from "react"
import { SetStateAction } from "react"
/**
 * 
 */
export default function InputSearch({setFunction}: Props) {
  return(
    <div className="ml-auto">
      Search: 
      <input type="text" name="tableResearchInput" 
        onChange={(event) => {setFunction(event.target.value)}} 
        className="border border-black ml-1 px-1 text-sm" >
      </input>
    </div>
  )
}
interface Props {
  setFunction: React.Dispatch<SetStateAction<string>>
}