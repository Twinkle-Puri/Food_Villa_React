import React from "react";
import { ShimmerThumbnail } from "react-shimmer";
const ShimmerUI = () =>{
    // npm install react-shimmer-effects --save/
//    return( Array.fill(10).map( data => {
    return( <div className="restaurant-list">
       {Array(10).fill(" ").map((el,index)=>
       
       <div className="shimmer-card" key={index}></div>
       )} 
    </div>)
    // return <ShimmerThumbnail height={250} rounded/>
}
export default ShimmerUI;