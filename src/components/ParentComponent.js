import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
 state={parentName:'Parent'}

 greetParent=()=>{
alert(`Hello ${this.state.parentName}`)
 }
    render() { 
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
          );
    }
}
 
export default ParentComponent;