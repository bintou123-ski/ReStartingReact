import React from "react";

const FunctionClick =()=>{
  function handleClick(){
      console.log("clicked on me")
  }
    return(
        <div>
         <button onClick={handleClick}>Click funtion</button>
        </div>
    )
}
export default FunctionClick;