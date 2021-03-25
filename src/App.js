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
import NameList from "./components/NameList";
import Inline from "./components/Inline";
import StyleSheet from "./components/StyleSheet";
//import  "./appStyle.css";
//import  style from ".appStyle.module.css";
import Form from "./components/Form";



class  App extends React.Component {
    render() { 
        return (  
         <div>
             {/* <Form/>
            <h1 className="error">Error</h1>
             <h1 className={style.success}>Success</h1>
             <Inline/>
              <StyleSheet A="true"/>
              <NameList/>
             <UserGreeting/>
              <ParentComponent/>
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