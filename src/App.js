import React from "react";
import ReactDOM from "react-dom";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Message from "./components/Message";
import Counter from "./components/Counter";

class  App extends React.Component {
    render() { 
        return (  
         <div>
             <FunctionClick/>
            {/*} <Counter/>
            <Message/>
            <Example name="bin" heroname='superwoman'>
            <button>Click here</button>
            </Example>
        <Example2 name= 'oumou' heroname="batwoman">
            <p>fhuehrrrhhhr</p>
        </Example2>*/}
        </div>
        );
    }
}

export default  App;