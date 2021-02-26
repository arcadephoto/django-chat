(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(4),s=n.n(a),i=n(8),r=n.n(i),o=(n(17),n(2)),c=n.n(o),u=n(5),h=n(7),d=n(9),l=n(10),p=n(1),b=n(12),j=n(11),m=n(3),f=n.n(m),g=(n(19),n(0)),x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={text:[],textInput:[],editInput:[],editID:"",username:"",email:"",password1:"",password2:"",password:"",loggedInUserName:""},a.handleLogout=a.handleLogout.bind(Object(p.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(p.a)(a)),a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.submit=a.submit.bind(Object(p.a)(a)),a.edit=a.edit.bind(Object(p.a)(a)),a.delete=a.delete.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(h.a)({},t.target.name,t.target.value))}},{key:"handleChange",value:function(t){this.setState(Object(h.a)({},t.target.name,t.target.value))}},{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/chatapp/chat/").then((function(t){return t.json()})).then((function(e){return t.setState({text:e})}))}},{key:"submit",value:function(){fetch("/api/v1/chatapp/post/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.textInput})})}},{key:"edit",value:function(){fetch("/api/v1/chatapp/".concat(this.state.editID,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.editInput,id:this.state.editID})})}},{key:"delete",value:function(){fetch("/api/v1/chatapp/".concat(this.state.editID,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.editInput,id:this.state.editID})})}},{key:"handleRegistration",value:function(){var t=Object(u.a)(c.a.mark((function t(e,n){var a,s,i,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(n)},s=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/registration/",a);case 5:return i=t.sent,t.next=8,i.json().catch(s);case 8:(r=t.sent).key&&f.a.set("Authorization","Token ".concat(r.key)),this.setState({username:"",email:"",password1:"",password2:""});case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleLogin",value:function(){var t=Object(u.a)(c.a.mark((function t(e,n){var a,s,i,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(n)},s=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/login/",a);case 5:return i=t.sent,t.next=8,i.json().catch(s);case 8:(r=t.sent).key&&(f.a.set("Authorization","Token ".concat(r.key)),this.setState({loggedInUserName:this.state.username})),this.setState({username:"",password:""});case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleLogout",value:function(){var t=Object(u.a)(c.a.mark((function t(e,n){var a,s,i,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":f.a.get("csrftoken")},body:JSON.stringify(n)},s=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/logout/",a);case 5:return i=t.sent,t.next=8,i.json().catch(s);case 8:(r=t.sent).key&&(f.a.remove("Authorization","Token ".concat(r.key)),this.setState({loggedInUserName:""})),this.setState({username:""});case 11:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.text.map((function(t){return Object(g.jsxs)("p",{children:[t.text," - ID No.: ",t.id]},t.id)})),n=Object(g.jsxs)("form",{onSubmit:this.submit,children:[Object(g.jsx)("label",{htmlFor:"sendText"}),Object(g.jsx)("input",{type:"text",placeholder:"Input text here",id:"sendText",name:"textInput",value:this.state.textInput,onChange:this.handleChange}),Object(g.jsx)("button",{className:"btn genbtn",type:"submit",children:"Send your text"})]}),a=Object(g.jsxs)("form",{onSubmit:this.edit,children:[Object(g.jsx)("label",{htmlFor:"editText"}),Object(g.jsx)("input",{placeholder:"txt id",id:"editID",name:"editID",value:this.state.editID,onChange:this.handleChange}),Object(g.jsx)("input",{type:"text",placeholder:"Edit text here",id:"editText",name:"editInput",value:this.state.editInput,onChange:this.handleChange}),Object(g.jsx)("button",{className:"btn genbtn",type:"submit",children:"Send your edit"})]}),s=Object(g.jsx)("form",{onSubmit:this.delete,children:Object(g.jsx)("button",{type:"submit",id:"delete",name:"delete",children:"Delete!"})}),i=Object(g.jsxs)("form",{onSubmit:function(e){return t.handleRegistration(e,t.state)},children:[Object(g.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(g.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(g.jsx)("input",{type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(g.jsx)("input",{type:"password",placeholder:"confirm pass",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(g.jsx)("button",{type:"submit",children:"Register"})]}),r=Object(g.jsxs)("form",{onSubmit:function(e){return t.handleLogin(e,t.state)},children:[Object(g.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(g.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(g.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(g.jsx)("button",{type:"submit",children:"Log In"})]}),o=Object(g.jsxs)("form",{onSubmit:function(e){return t.handleLogout(e,t.state)},children:[Object(g.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(g.jsx)("button",{type:"submit",children:"Log Out"})]}),c=Object(g.jsxs)("p",{children:["Logged in: ",this.state.loggedInUserName]});return Object(g.jsxs)("div",{className:"App",children:[n,a,s,i,r,o,c,e]})}}]),n}(a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),i(t),r(t)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.55215fd3.chunk.js.map