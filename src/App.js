import React from "react";
import ReactDOM from "react-dom";
import Example from "./components/Example";
import Example2 from "./components/Example2";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

class  App extends React.Component {
    render() { 
        return (  
         <div>
             <UserGreeting/>
              {/* <ParentComponent/>
           <FunctionClick/>
             <ClassClick/>
            } <Counter/>
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