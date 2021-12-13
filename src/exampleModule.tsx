import React from 'react';

interface Props{
    text:string
}

export const Test = ({text}:Props)=>{
    return(
        <p>{text}</p>            
    )
}
