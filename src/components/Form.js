import React, { Component } from 'react';

class Formm extends Component {
    state = {  
        userName:'',
      comment:'',
      topic:'React'
}

    handleUserNameChange =(e)=>{
this.setState({userName:e.target.value})
    }
handleCommentChange =(e)=>{
    this.setState({comment:e.target.value})
}
handleTopicChange =(e)=>{
    this.setState({topic:e.target.value})
}
handleSubmit =(e)=>{
   e.preventDefault();
   alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
}
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input type="text" value={this.state.userName}
                    onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label>Comment: </label>
                <textarea type="text" value={this.state.comment}
            onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <label>Topic:</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
              
            </form>
         );
    }
}
 
export default Formm;