(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n.n(i),s=n(4),c=n.n(s),d=(n(14),n(5)),h=n(6),o=n(7),u=n(1),l=n(9),r=n(8),p=(n(15),n(0)),b=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(t){var i;return Object(h.a)(this,n),(i=e.call(this,t)).state={text:[],textInput:[],editInput:[],editID:""},i.handleChange=i.handleChange.bind(Object(u.a)(i)),i.submit=i.submit.bind(Object(u.a)(i)),i.edit=i.edit.bind(Object(u.a)(i)),i.delete=i.delete.bind(Object(u.a)(i)),i}return Object(o.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(d.a)({},t.target.name,t.target.value))}},{key:"componentDidMount",value:function(){var t=this;fetch("/api/v1/chatapp/chat/").then((function(t){return t.json()})).then((function(e){return t.setState({text:e})}))}},{key:"submit",value:function(){fetch("/api/v1/chatapp/post/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.textInput})})}},{key:"edit",value:function(){fetch("/api/v1/chatapp/".concat(this.state.editID,"/"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.editInput,id:this.state.editID})})}},{key:"delete",value:function(){fetch("/api/v1/chatapp/".concat(this.state.editID,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:this.state.editInput,id:this.state.editID})})}},{key:"render",value:function(){var t=this.state.text.map((function(t){return Object(p.jsxs)("p",{children:[t.text," - ID No.: ",t.id]},t.id)})),e=Object(p.jsxs)("form",{onSubmit:this.submit,children:[Object(p.jsx)("label",{htmlFor:"sendText"}),Object(p.jsx)("input",{type:"text",placeholder:"Input text here",id:"sendText",name:"textInput",value:this.state.textInput,onChange:this.handleChange}),Object(p.jsx)("button",{className:"btn genbtn",type:"submit",children:"Send your text"})]}),n=Object(p.jsxs)("form",{onSubmit:this.edit,children:[Object(p.jsx)("label",{htmlFor:"editText"}),Object(p.jsx)("input",{placeholder:"txt id",id:"editID",name:"editID",value:this.state.editID,onChange:this.handleChange}),Object(p.jsx)("input",{type:"text",placeholder:"Edit text here",id:"editText",name:"editInput",value:this.state.editInput,onChange:this.handleChange}),Object(p.jsx)("button",{className:"btn genbtn",type:"submit",children:"Send your edit"})]}),i=Object(p.jsx)("form",{onSubmit:this.delete,children:Object(p.jsx)("button",{type:"submit",id:"delete",name:"delete",children:"Delete!"})});return Object(p.jsxs)("div",{className:"App",children:[e,n,i,t]})}}]),n}(i.Component),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),j()}},[[17,1,2]]]);
//# sourceMappingURL=main.e2f2a399.chunk.js.map