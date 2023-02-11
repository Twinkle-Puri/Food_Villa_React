import React from "react";
import { ShimmerThumbnail } from "react-shimmer";
const ShimmerUI = () =>{
    // npm install react-shimmer-effects --save/
//    return( Array.fill(10).map( data => {
    return( <div className="flex-wrap-reverse" data-testid ="shimmer"  style ={{display:"flex"}}>
       {Array(10).fill(" ").map((el,index)=>
       
       <div className="card w-52 h-64 p-2 m-2 shadow-lg bg-slate-200 " key={index}></div>
       )} 
    </div>)
    // return <ShimmerThumbnail height={250} rounded/>
}
export default ShimmerUI;