import React from "react"

class Message extends React.Component {
    state = { message:'welcome to subscribe' }

    Ssubscribe(){
        this.setState({message:'Thank for your subscriibe'})
    }
    render() { 
        return (
            <div>
               <h1>{this.state.message}</h1>
              <button onClick={()=>this.Ssubscribe()}>Subscribe</button>
            </div>
          );
    }
}
 
export default Message;