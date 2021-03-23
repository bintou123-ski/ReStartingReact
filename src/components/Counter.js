import React, { Component } from 'react'

class Counter extends React.Component {
    state = { count:0 }

    increment(){
        this.setState((prevState)=>({
            count:prevState.count +1
        }))

    }
    render() { 
        return ( 
            <div>count- {this.state.count}
            <button onClick={()=>this.increment()}>Increment</button>
            </div>
         );
    }
}
 
export default Counter;
