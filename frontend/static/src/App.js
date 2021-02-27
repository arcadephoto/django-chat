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
        room: "",
        editID: "",
        username: '',
        email: '',
        password1: '',
        password2: '',
        password: '',
        // isLoggedIn: !!Cookies.get('Authorization'),
        loggedInUserName: '',
      }
  this.handleLogout = this.handleLogout.bind(this);
  this.handleRegistration = this.handleRegistration.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.submit = this.submit.bind(this);
  this.edit = this.edit.bind(this);
  this.delete = this.delete.bind(this);
    }

handleInput(event){
      this.setState({[event.target.name]: event.target.value});
    }

handleChange(event){
      this.setState({[event.target.name]: event.target.value});
    }

componentDidMount(){
  fetch("/api/v1/chatapp/chat/")
      .then(response => response.json())
      .then(response => this.setState({text: response}));
    }


submit(event){
  event.preventDefault()
  fetch("/api/v1/chatapp/post/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify({text: this.state.textInput, owner: this.state.username, room: this.state.room}),
    })
    .then(response => response.json())
    .then(json => console.log(json))
this.setState({username: "", room: "", textInput: ""})
}

edit(event){
  event.preventDefault()
  fetch(`/api/v1/chatapp/${this.state.editID}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify({text: this.state.editInput, id: this.state.editID}),
    })
}

delete(event){
  event.preventDefault()
  fetch(`/api/v1/chatapp/${this.state.editID}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    }).then(response => console.log(response))
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
this.setState({username: "", email: "", password1: "", password2: ""})
}

async handleLogin(e, obj){
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
const response = await fetch('/rest-auth/login/', options);
const data = await response.json().catch(handleError);

if(data.key) {
Cookies.set('Authorization', `Token ${data.key}`);
this.setState({loggedInUserName: this.state.username})
}

this.setState({username: "", password: "",})
}

async handleLogout(e, obj){
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
const response = await fetch('/rest-auth/logout/', options);
const data = await response.json().catch(handleError);

if(data.key) {
Cookies.remove('Authorization', `Token ${data.key}`);
this.setState({loggedInUserName: "",});
}
this.setState({username: "",})
}



  render(){
    console.log(this.state.text)
    // console.log(Cookies.get('Authorization'));

    const text = this.state.text.map((data) => (
      <section key={data.id}>
      <p>ID No.: {data.id}</p>
      <p>ChatRoom: {data.room}</p>
      <p>Sender: {data.owner}</p>
      <p>Message: {data.text}</p></section>
    ))


    const textButton = <form onSubmit={this.submit}>
       <label htmlFor="sendText"></label>
       <input type="text" placeholder="Input text here" id="sendText" name="textInput" value={this.state.textInput} onChange={this.handleChange}/>
       <input type="text" placeholder="Chatroom Name" id="room" name="room" value={this.state.room} onChange={this.handleChange}/>
       <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
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



  const registerForm = (<form onSubmit={(e) => this.handleRegistration(e, this.state)}>
      <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
      <input type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
      <input type="password" placeholder="confirm pass" name="password2" value={this.state.password2} onChange={this.handleInput}/>
      <button type="submit">Register</button>
      </form>)

  const loginForm = (<form onSubmit={(e) => this.handleLogin(e, this.state)}>
      <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
      <button type="submit">Log In</button>
      </form>)

  const logoutForm = (<form onSubmit={(e) => this.handleLogout(e, this.state)}>
      <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <button type="submit">Log Out</button>
      </form>)

  const loggedInUserName = <p>Logged in: {this.state.loggedInUserName}</p>

  return (
    <div className="App">
      {textButton}
      {editButton}
      {deleteButton}
      {registerForm}
      {loginForm}
      {logoutForm}
      {loggedInUserName}
      {text}
      </div>
  );
}
}
export default App;
