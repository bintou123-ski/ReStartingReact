import React, { Component } from 'react';

const ChildComponent =(props)=>{
    return(
        <div>
            <button onClick={props.greetHandler}>greet Pareent</button>
        </div>
    )
}
export default ChildComponent;
