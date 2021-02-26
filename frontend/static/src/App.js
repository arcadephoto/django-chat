import React, {Component} from 'react';
import Cookies from 'js-cookie';

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
        username: '',
        email: '',
        password1: '',
        password2: '',
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

async handleRegistration(e, obj){
e.preventDefault();

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRFToken': Cookies.get('csrftoken'),
    },
    body: JSON.stringify(obj),
};
const handleError = (err) => console.warn(err);
const response = await fetch('/rest-auth/registration/', options);
const data = await response.json().catch(handleError);

if(data.key) {
Cookies.set('Authorization', `Token ${data.key}`);
}
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



  const form = (<form onSubmit={(e) => this.handleRegistration(e, this.state)}>
      <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
      <input type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
      <input type="password" placeholder="confirm pass" name="password2" value={this.state.password2} onChange={this.handleInput}/>
      <button type="submit">Submit yo bidness!</button>
      </form>)





  return (
    <div className="App">
      {textButton}
      {editButton}
      {deleteButton}
      {form}
      {text}
    </div>
  );
}
}
export default App;
