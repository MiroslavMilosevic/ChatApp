(this["webpackJsonpmy-chatapp"]=this["webpackJsonpmy-chatapp"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var o=a(1),s=a(0),r=a.n(s),c=a(29),n=a.n(c),l=(a(37),a(4)),i=a(9),u=a(2),d=(a(38),[{id:1,username:"milancemkc",password:"mkc"},{id:2,username:"jocara10",password:"spartacus"},{id:3,username:"pekula96",password:"kockazenepice"},{id:4,username:"suka99",password:"ooomajstore"},{id:5,username:"pero96",password:"mojpero"}]);function g(e){var t=e.usersArray,a=e.setUser,r=Object(s.useState)(""),c=Object(l.a)(r,2),n=c[0],i=c[1],d=Object(s.useState)(""),g=Object(l.a)(d,2),p=g[0],j=g[1],m=Object(u.f)();return Object(s.useEffect)((function(){}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{type:"text",placeholder:"username",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("input",{type:"password",placeholder:"password",value:p,onChange:function(e){j(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){console.log(n,p);var e=!1;t.forEach((function(t){t.username===n.trim()&&t.password===p.trim()&&(console.log("uspesno"),e=!0,localStorage.setItem("id",t.id.toString()),localStorage.setItem("username",t.username),localStorage.setItem("password",t.password),localStorage.setItem("isLoged","true"),a({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:!0}),setTimeout((function(){m.push("home")}),150))})),e||console.log("neuspesno")},children:"Uloguj se"}),Object(o.jsx)("button",{onClick:function(){localStorage.setItem("username",null),localStorage.setItem("password",null),localStorage.setItem("id",null),localStorage.setItem("isLoged",null),a({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:null})},children:"Set to null"})]})}var p=a(62);function j(e){var t=e.setUser,a=Object(u.f)();return Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){localStorage.setItem("username",null),localStorage.setItem("password",null),localStorage.setItem("id",null),localStorage.setItem("isLoged",null),t({id:null,username:null,password:null,isLoged:null}),a.push("/login")},children:"LogOut"})})}function m(e){var t=e.usersArray,a=e.setUser,r=Object(s.useState)({}),c=Object(l.a)(r,2),n=c[0];c[1];return Object(s.useEffect)((function(){a({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")})}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{setUser:a}),null!==localStorage.getItem("isLoged")&&"null"!==localStorage.getItem("isLoged")?Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)("button",{onClick:function(){console.log(localStorage.getItem("isLoged")),console.log(n.isLoged)},children:"DUGME"}),Object(o.jsxs)("div",{children:[" ",t.map((function(e){return Object(o.jsxs)("p",{children:["Idi na Chat sa: ",Object(o.jsx)(i.b,{to:"chat/".concat(e.id),children:e.username},Object(p.a)())," "]},Object(p.a)())}))," "]})," "]}):"adfdfasdfas"]})}var b=a(14),O=a(11),f=a.n(O),h=function(e){return f.a.get("https://script.google.com/macros/s/AKfycbyaPSgO1KOnrE1vPswfyrByQwhcMtJH5t8VfErd_pc3viSAkU4/exec?id=".concat(e+1))},S=function(e,t){return f.a.post("https://script.google.com/macros/s/AKfycbySS5xyOi8U9KApKftx72Hm5Uy0FcOt3mG6zWKKQ-Ti9OBIhj8/exec?id=".concat(e,"&broj=").concat(t))};function x(e){return e.length<=200&&e.length>0&&!e.includes(";")?[!0,"poruka odgovara formatu"]:e.length>200?[!1,"poruka ima preko 200 karaktera "]:e.length<=0?[!1,"ne mozete poslati praznu poruku"]:e.includes(";")?[!1,"zabranjeno je koristiti neki od karatera iz vase poruke"]:void 0}function I(e){var t=e.setUserApp,a=Object(s.useState)(Object(u.g)().id),r=Object(l.a)(a,1)[0],c=Object(s.useState)({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")}),n=Object(l.a)(c,1)[0],i=Object(s.useState)([]),d=Object(l.a)(i,2),g=d[0],m=d[1],O=Object(s.useState)([]),I=Object(l.a)(O,2),v=I[0],w=I[1],k=Object(s.useState)([]),y=Object(l.a)(k,2),U=y[0],L=y[1],A=Object(s.useState)(""),K=Object(l.a)(A,2),E=K[0],P=K[1];window.onbeforeunload=function(){S(n.id,Number(localStorage.getItem("redZaUpis")))},Object(s.useEffect)((function(){(function(e){return f.a.get("https://script.google.com/macros/s/AKfycbySS5xyOi8U9KApKftx72Hm5Uy0FcOt3mG6zWKKQ-Ti9OBIhj8/exec?id=".concat(e))})(n.id).then((function(e){console.log(e.data),localStorage.setItem("redZaUpis",e.data)})),h(Number(r)).then((function(e){var t=e.data.map((function(e){return{id:e.split(";")[0],idPoslao:e.split(";")[1],poruka:e.split(";")[2],date:Date.parse(e.split(";")[3]),stringDate:e.split(";")[3]}}));w(t)})),h(Number(n.id)).then((function(e){var t=e.data.map((function(e){return{id:e.split(";")[0],idPoslao:e.split(";")[1],poruka:e.split(";")[2],date:Date.parse(e.split(";")[3]),stringDate:e.split(";")[3]}}));console.log(t),m(t)}));var e=setInterval((function(){h(Number(r)).then((function(e){var t=e.data.map((function(e){return{id:e.split(";")[0],idPoslao:e.split(";")[1],poruka:e.split(";")[2],date:Date.parse(e.split(";")[3]),stringDate:e.split(";")[3]}}));w(t)}))}),2e3);return function(){clearInterval(e),console.log("odjavaaaaaaaaaa"+localStorage.getItem("redZaUpis")),S(n.id,Number(localStorage.getItem("redZaUpis")))}}),[]),Object(s.useEffect)((function(){var e=[];e=n.id!==r?[].concat(Object(b.a)(v.filter((function(e){return e.idPoslao===n.id}))),Object(b.a)(g.filter((function(e){return e.idPoslao===r})))):Object(b.a)(g.filter((function(e){return e.idPoslao===n.id}))),L(e),console.log(U)}),[v,g]);var D=function(){if(x(E)[0]){!function(e,t,a,o){f.a.post("https://script.google.com/macros/s/AKfycbyaPSgO1KOnrE1vPswfyrByQwhcMtJH5t8VfErd_pc3viSAkU4/exec?poruka=".concat(e,"&id=").concat(t,"&idPoslao=").concat(a,"&redZaUpis=").concat(o))}(E,n.id,r,localStorage.getItem("redZaUpis")),localStorage.setItem("redZaUpis",Number(localStorage.getItem("redZaUpis"))+1);var e=Object(b.a)(g);e.push({id:n.id,idPoslao:r,poruka:E,date:Date.parse((new Date).toString()),stringDate:(new Date).toString()}),m(e),P("")}else alert(x(E)[1])};return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){console.log(localStorage.getItem("redZaUpis"))},children:"DUGME"}),Object(o.jsx)(j,{setUser:t}),Object(o.jsx)("h1",{children:"chat sa korisnikom sa id-om: "+r}),Object(o.jsx)("input",{type:"text",value:E,placeholder:"poruka...",onChange:function(e){P(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&D()}}),U.sort((function(e,t){return e.date-t.date})).map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:e.poruka+" | "+e.id+"   | "},Object(p.a)())},Object(p.a)())}))]})}var v=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")}),n=Object(l.a)(c,2),p=n[0],j=n[1];return Object(s.useEffect)((function(){j({id:localStorage.getItem("id"),username:localStorage.getItem("username"),password:localStorage.getItem("password"),isLoged:localStorage.getItem("isLoged")}),r(d)}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(i.a,{children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/home",children:"null"!==p.isLoged&&null!==p.isLoged?Object(o.jsx)(m,{usersArray:a,setUser:j}):Object(o.jsx)("p",{children:"nisi ulogovan"})}),Object(o.jsx)(u.a,{exact:!0,path:"/",children:Object(o.jsx)("button",{onClick:function(){console.log(a)},children:"abcdefg"})}),Object(o.jsx)(u.a,{exact:!0,path:"/login",children:Object(o.jsx)(g,{usersArray:a,setUser:j})}),Object(o.jsx)(u.a,{exact:!0,path:"/register"}),Object(o.jsx)(u.a,{exact:!0,path:"/chat/:id",children:"null"!==p.isLoged&&null!==p.isLoged?Object(o.jsx)(I,{setUserApp:j}):Object(o.jsx)("p",{children:"nisi ulogovan"})})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.92c098a7.chunk.js.map