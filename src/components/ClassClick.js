import React from "react";

class ClassClick extends React.Component {
    state ={message:'hellooo'}
    handleClick=()=>{
       this.setState({message:"good  bye"})
    }
    render() { 
        return ( 
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Click Class</button>
            </div>
         );
    }
}
 
export default ClassClick;