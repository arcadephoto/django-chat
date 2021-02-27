(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),i=n(8),o=n.n(i),r=(n(17),n(2)),c=n.n(r),u=n(5),h=n(7),d=n(9),l=n(10),p=n(1),j=n(12),b=n(11),m=n(3),x=n.n(m),g=(n(19),n(0)),f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={text:[],textInput:[],editInput:[],room:"",editID:"",username:"",email:"",password1:"",password2:"",password:"",loggedInUserName:""},a.handleLogout=a.handleLogout.bind(Object(p.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.submit=a.submit.bind(Object(p.a)(a)),a.edit=a.edit.bind(Object(p.a)(a)),a.delete=a.delete.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"componentDidMount",value:function(){var e=this;fetch("/api/v1/chatapp/chat/").then((function(e){return e.json()})).then((function(t){return e.setState({text:t})}))}},{key:"submit",value:function(){fetch("/api/v1/chatapp/post/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.textInput})})}},{key:"edit",value:function(){fetch("/api/v1/chatapp/".concat(this.state.editID,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.editInput,id:this.state.editID})})}},{key:"delete",value:function(){fetch("/api/v1/chatapp/".concat(this.state.editID,"/"),{method:"DELETE"})}},{key:"handleRegistration",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){var a,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/registration/",a);case 5:return i=e.sent,e.next=8,i.json().catch(s);case 8:(o=e.sent).key&&x.a.set("Authorization","Token ".concat(o.key)),this.setState({username:"",email:"",password1:"",password2:""});case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){var a,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/login/",a);case 5:return i=e.sent,e.next=8,i.json().catch(s);case 8:(o=e.sent).key&&(x.a.set("Authorization","Token ".concat(o.key)),this.setState({loggedInUserName:this.state.username})),this.setState({username:"",password:""});case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var e=Object(u.a)(c.a.mark((function e(t,n){var a,s,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":x.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/logout/",a);case 5:return i=e.sent,e.next=8,i.json().catch(s);case 8:(o=e.sent).key&&(x.a.remove("Authorization","Token ".concat(o.key)),this.setState({loggedInUserName:""})),this.setState({username:""});case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;console.log(this.state.text);var t=this.state.text.map((function(e){return Object(g.jsxs)("section",{children:[Object(g.jsxs)("p",{children:["ID No.: ",e.id]}),Object(g.jsxs)("p",{children:["ChatRoom: ",e.room]}),Object(g.jsxs)("p",{children:["Sender: ",e.owner]}),Object(g.jsxs)("p",{children:["Message: ",e.text]})]},e.id)})),n=Object(g.jsxs)("form",{onSubmit:this.submit,children:[Object(g.jsx)("label",{htmlFor:"sendText"}),Object(g.jsx)("input",{type:"text",placeholder:"Input text here",id:"sendText",name:"textInput",value:this.state.textInput,onChange:this.handleChange}),Object(g.jsx)("input",{type:"text",placeholder:"Chatroom Name",id:"room",name:"room",value:this.state.room,onChange:this.handleChange}),Object(g.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(g.jsx)("button",{className:"btn genbtn",type:"submit",children:"Send your text"})]}),a=Object(g.jsxs)("form",{onSubmit:this.edit,children:[Object(g.jsx)("label",{htmlFor:"editText"}),Object(g.jsx)("input",{placeholder:"txt id",id:"editID",name:"editID",value:this.state.editID,onChange:this.handleChange}),Object(g.jsx)("input",{type:"text",placeholder:"Edit text here",id:"editText",name:"editInput",value:this.state.editInput,onChange:this.handleChange}),Object(g.jsx)("button",{className:"btn genbtn",type:"submit",children:"Send your edit"})]}),s=Object(g.jsx)("form",{onSubmit:this.delete,children:Object(g.jsx)("button",{type:"submit",id:"delete",name:"delete",children:"Delete!"})}),i=Object(g.jsxs)("form",{onSubmit:function(t){return e.handleRegistration(t,e.state)},children:[Object(g.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(g.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(g.jsx)("input",{type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(g.jsx)("input",{type:"password",placeholder:"confirm pass",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(g.jsx)("button",{type:"submit",children:"Register"})]}),o=Object(g.jsxs)("form",{onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(g.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(g.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(g.jsx)("button",{type:"submit",children:"Log In"})]}),r=Object(g.jsxs)("form",{onSubmit:function(t){return e.handleLogout(t,e.state)},children:[Object(g.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(g.jsx)("button",{type:"submit",children:"Log Out"})]}),c=Object(g.jsxs)("p",{children:["Logged in: ",this.state.loggedInUserName]});return Object(g.jsxs)("div",{className:"App",children:[n,a,s,i,o,r,c,t]})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};o.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(f,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.8583567d.chunk.js.map