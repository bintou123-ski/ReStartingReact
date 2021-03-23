import React from "react";

class Example2 extends React.Component {
  
    render() { 
        const {name, heroname} = this.props;
        const {children} = this.props
        return ( 
            <div>
                <h1>Welcome {name} et {heroname}</h1>
                {children}
            </div>
         );
    }
}
 
export default Example2;