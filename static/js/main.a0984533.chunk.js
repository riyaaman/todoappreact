(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(7),a=c.n(s),d=(c(12),c(6)),j=c(4),r=(c(13),c(0));var l=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(""),a=Object(j.a)(s,2),l=a[0],o=a[1],u=Object(n.useState)([]),b=Object(j.a)(u,2),h=b[0],O=b[1];return h.length,Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("div",{className:"mainHeading",children:Object(r.jsx)("h1",{children:"ToDo List"})}),Object(r.jsxs)("div",{className:"subHeading",children:[Object(r.jsx)("br",{}),Object(r.jsx)("h2",{children:"Whoop, it's Wednesday \ud83c\udf1d \u2615 "})]}),Object(r.jsxs)("div",{className:"input",children:[Object(r.jsx)("input",{type:"text",value:l,placeholder:"\ud83d\udd8a\ufe0f Add item...",onChange:function(e){return o(e.target.value)}}),Object(r.jsx)("i",{className:"fas fa-plus",onClick:function(){i([].concat(Object(d.a)(c),[{id:Date.now(),date:Date().toLocaleString(),text:l,status:!1}])),o("")}})]}),Object(r.jsx)("div",{className:"todos",children:c.map((function(e){return Object(r.jsxs)("div",{className:"todo",children:[Object(r.jsxs)("div",{className:"left",children:[Object(r.jsx)("input",{value:e.status,type:"checkbox",name:"",id:"",onChange:function(t){console.log(t.target.value),console.log(e),i(c.filter((function(c){return c.id===e.id&&(c.status=t.target.checked),c})))}}),Object(r.jsx)("p",{children:e.text})]}),Object(r.jsx)("div",{className:"right",children:Object(r.jsx)("i",{onClick:function(){O((function(t){return[].concat(Object(d.a)(t),[e])})),i(c.filter((function(t){return t.id!==e.id?e:null})))},className:"fas fa-times"})})]})}))}),Object(r.jsxs)("div",{id:"container",children:[Object(r.jsxs)("div",{id:"left",children:["Active Items",c.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:e.text})})}))]}),Object(r.jsxs)("div",{id:"right",children:["Checked Items",c.map((function(e,t){return e.status?Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:e.text})}):null}))]}),Object(r.jsxs)("div",{id:"center",children:["Removed Items",h.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:e.text})})}))]})]})]})},o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root")),o()}},[[15,1,2]]]);
//# sourceMappingURL=main.a0984533.chunk.js.map