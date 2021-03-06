import React, {Component} from 'react';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';


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
        isLoggedIn: !!Cookies.get('Authorization'),
        loggedInUserName: null,
        roomname: "",
        roomlist: [],
      }
  this.handleLogout = this.handleLogout.bind(this);
  this.handleRegistration = this.handleRegistration.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.submit = this.submit.bind(this);
  this.edit = this.edit.bind(this);
  this.delete = this.delete.bind(this);
  this.createChat = this.createChat.bind(this);
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
      if(localStorage.getItem('chatUser')){
        this.setState({isLoggedIn: true})};
        this.setState({loggedInUserName: localStorage.getItem('chatUser')})

  fetch("/api/v1/chatapp/room/")
      .then(response => response.json())
      .then(response => this.setState({roomlist: response}));

      }



submit(event){
  event.preventDefault()
  fetch("/api/v1/chatapp/post/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify({text: this.state.textInput}),
    })
    .then(response => response.json())
this.setState({username: "", textInput: ""})
window.location.reload();
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

delete(target){
  // event.preventDefault();
  fetch(`/api/v1/chatapp/${target}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
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
localStorage.setItem('chatUser', this.state.username)
}

this.setState({username: "", password: "",})
window.location.reload()
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


Cookies.remove('Authorization', `Token ${data.key}`);
localStorage.removeItem('chatUser')
this.setState({isLoggedIn: false});
this.setState({loggedInUserName: "",});

this.setState({username: "",})
}


createChat(event){
    event.preventDefault()
    fetch("/api/v1/chatapp/room/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify({roomname: this.state.roomname}),
      })
      .then(response => response.json())
  }





  render(){

    const roomlist = this.state.roomlist.map((data) =>(

      <section className="card" key={data.id}>
          <p>{data.roomname}</p>
          </section>
        ))

    const createChat = (<div>
<input type="text" placeholder="Name of new chatroom" id="roomname" name="roomname" value={this.state.roomname} onChange={this.handleChange}/>
    <button onClick={this.createChat}>Create Chat Room</button></div>)

    const text = this.state.text.map((data) => (
      <section className="card" key={data.id}>
      <p>ChatRoom: {data.roomname}</p>
      <p>Sender: {data.user}</p>
      <p>Message: {data.text}</p>
      <button type="submit" className="btn btn-primary" onClick={()=> this.delete(data.id)}>Delete</button></section>
    ))


    const textButton = <form onSubmit={this.submit}>
       <label htmlFor="sendText"></label>
       <p><input type="text" placeholder="Input text here" id="sendText" name="textInput" value={this.state.textInput} onChange={this.handleChange}/></p>
       <p><button className="btn-primary btn" type="submit">Send your text</button></p>
       </form>

   const editButton = <form onSubmit={this.edit}>
      <label htmlFor="editText"></label>
      <p><input placeholder="txt id" id="editID" name="editID" value={this.state.editID} onChange={this.handleChange}/></p>
      <p><input type="text" placeholder="Edit text here" id="editText" name="editInput" value={this.state.editInput} onChange={this.handleChange}/></p>
      <p><button className="btn-primary btn" type="submit">Send your edit</button></p>
      </form>



  const registerForm = (<form onSubmit={(e) => this.handleRegistration(e, this.state)}>
      <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.handleInput}/>
      <input type="password" placeholder="password" name="password1" value={this.state.password1} onChange={this.handleInput}/>
      <input type="password" placeholder="confirm pass" name="password2" value={this.state.password2} onChange={this.handleInput}/>
      <p><button className="btn-primary btn" type="submit">Register</button></p>
      </form>)

  const loginForm = (<form onSubmit={(e) => this.handleLogin(e, this.state)}>
      <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleInput}/>
      <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput}/>
      <p><button className="btn btn-primary" type="submit">Log In</button></p>
      </form>)

  const logoutForm = (<form onSubmit={(e) => this.handleLogout(e, this.state)}>
      <button className="btn-primary" type="submit">Log Out</button>
      </form>)

  const loggedInUserName = <p>Hello, {this.state.loggedInUserName}!</p>

  return (
    <div className="container">
    <div className="row-12 navbar header"><h1>Chat 'Em Up!</h1><p>The professional and totally functional chat app</p>
    <span>{this.state.isLoggedIn === false ? loginForm : null}</span><span>{this.state.isLoggedIn !== false ? logoutForm : null }</span>
    {this.state.loggedInUserName ? loggedInUserName : null}
    </div>
    <div className="row">
    <div className="col-4 card">{this.state.isLoggedIn !== false ? textButton : <h4>Welcome! Please register or log in!</h4>}</div>
    <div className="col-4">{this.state.isLoggedIn !== false ? editButton : null}</div>
    <div className="col-4 card">{!localStorage.getItem('chatUser') ? registerForm : null}</div>
    </div>

    <div className="row">
    <div className="col-3 card"> </div>

      </div>

      <div className="row">{createChat}
      <div className="col-9"> {this.state.isLoggedIn !== false ? text : null }</div>
      <div className="col-3"><h4>Available Chatrooms</h4>
      {roomlist}</div>
      </div>
      </div>
  );
}
}
export default App;
