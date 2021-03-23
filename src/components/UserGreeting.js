import React, { Component } from 'react';

class UserGreeting extends React.Component {
    state = {isLoggIn : true}
    render(){
        let message
        if(this.state.isLoggIn){
          message=  <div>Welcoomee</div>
        }
        else{
            message= <div>No welcome</div>
        };

        return(
            <div>{message}</div>
        )

       
 // return this.state.isLoggIn && <div>Welcome bintou</div>
        //return this.state.isLoggIn ? (<div>Welcome bintou</div>):(<div>No welcome</div>)
    }
    }
   
 
export default UserGreeting;