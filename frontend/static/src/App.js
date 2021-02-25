import React, {Component} from 'react';
import './App.css';

// const base_url = "https://django-text-arcadephoto.herokuapp.com"

class App extends Component {
  constructor (props){
      super(props);
      this.state = {
        text: [],
        textInput: [],
        editInput: [],
        editID: "",
      }


  this.handleChange = this.handleChange.bind(this);
  this.submit = this.submit.bind(this);
  this.edit = this.edit.bind(this);
  this.delete = this.delete.bind(this);
    }


handleChange(event){
      this.setState({[event.target.name]: event.target.value});
    }

componentDidMount(){
  fetch("/api/v1/chatapp/chat/")
      .then(response => response.json())
      .then(response => this.setState({text: response}));
    }


submit(){
  fetch("/api/v1/chatapp/post/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: this.state.textInput}),
    })
}

edit(){
  fetch(`/api/v1/chatapp/${this.state.editID}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: this.state.editInput, id: this.state.editID}),
    })
}

delete(){
  fetch(`/api/v1/chatapp/${this.state.editID}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: this.state.editInput, id: this.state.editID}),
    })
}



  render(){
    const text = this.state.text.map((data) => (
      <p key={data.id}>{data.text} - ID No.: {data.id}</p>
    ))


    const textButton = <form onSubmit={this.submit}>
       <label htmlFor="sendText"></label>
       <input type="text" placeholder="Input text here" id="sendText" name="textInput" value={this.state.textInput} onChange={this.handleChange}/>
       <button className="btn genbtn" type="submit">Send your text</button>
       </form>


     const editButton = <form onSubmit={this.edit}>
        <label htmlFor="editText"></label>
        <input placeholder="txt id" id="editID" name="editID" value={this.state.editID} onChange={this.handleChange}/>
        <input type="text" placeholder="Edit text here" id="editText" name="editInput" value={this.state.editInput} onChange={this.handleChange}/>
        <button className="btn genbtn" type="submit">Send your edit</button>
        </form>

      const deleteButton = <form onSubmit={this.delete}>
        <button type="submit" id="delete" name="delete">Delete!</button></form>


  return (
    <div className="App">
      {textButton}
      {editButton}
      {deleteButton}
      {text}
    </div>
  );
}
}
export default App;
