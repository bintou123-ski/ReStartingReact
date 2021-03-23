
import React from "react";

const Example = ({name,heroname,children})=>{
    return(
        <div>
            <h1>Hello {name} et {heroname}</h1>
            {children}
        </div>
    )
}
export default Example;