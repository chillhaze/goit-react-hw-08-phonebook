(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{156:function(n,e,t){},179:function(n,e,t){"use strict";t.r(e);var a=t(1),c=t.n(a),r=t(34),i=t.n(r),o=t(18),s=t(19),l=t(21),d=t(5),u=Object(l.b)("contacts/filtered"),b=Object(l.d)("",Object(d.a)({},u,(function(n,e){return e.payload}))),p=t(40),j=t(100),x=t.n(j),f=t(25),h=t.n(f),O=t(39),m=t(27),g=t.n(m);g.a.defaults.baseURL="https://connections-api.herokuapp.com/";var v,w=function(n){g.a.defaults.headers.common.Authorization="Bearer ".concat(n)},y=function(){g.a.defaults.headers.common.Authorization=""},k=Object(l.c)("auth/signup",function(){var n=Object(O.a)(h.a.mark((function n(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.post("users/signup",e);case 3:return t=n.sent,a=t.data,w(a.token),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()),C=Object(l.c)("auth/login",function(){var n=Object(O.a)(h.a.mark((function n(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=4,g.a.post("users/login",e);case 4:return t=n.sent,a=t.data,w(a.token),n.abrupt("return",a);case 10:n.prev=10,n.t0=n.catch(1);case 12:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()),S=Object(l.c)("auth/logout",function(){var n=Object(O.a)(h.a.mark((function n(e){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.post("users/logout",e);case 3:y(),n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()),z=Object(l.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(v={},Object(d.a)(v,k.fulfilled,(function(n,e){n.user=e.payload.user,n.token=e.payload.token,n.isLoggedIn=!0})),Object(d.a)(v,C.fulfilled,(function(n,e){n.user=e.payload.user,n.token=e.payload.token,n.isLoggedIn=!0})),Object(d.a)(v,S.fulfilled,(function(n,e){n.user={name:null,email:null},n.token=null,n.isLoggedIn=!1})),v)});g.a.defaults.baseURL="https://connections-api.herokuapp.com";var A,L,T,F,I,W,D,M,q,R,Z,P,B,U,E,G,J,N,V,$,H,K,Q,X,Y,_,nn,en,tn,an,cn=Object(l.c)("contacts/get-contacts",function(){var n=Object(O.a)(h.a.mark((function n(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.get("/contacts",e);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()),rn=Object(l.c)("contacts/create-contact",function(){var n=Object(O.a)(h.a.mark((function n(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.post("/contacts",e);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()),on=Object(l.c)("contacts/delete-contact",function(){var n=Object(O.a)(h.a.mark((function n(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.delete("/contacts/".concat(e),e);case 3:return t=n.sent,a=t.data,n.abrupt("return",a);case 8:n.prev=8,n.t0=n.catch(0);case 10:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()),sn=(Object(l.c)("contacts/update-contact",function(){var n=Object(O.a)(h.a.mark((function n(e){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.a.patch("/contacts/".concat(e.id),e);case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}()),Object(l.e)({name:"contacts",initialState:{contact:{name:null,number:null},allContacts:null,token:null},extraReducers:(A={},Object(d.a)(A,cn.fulfilled,(function(n,e){n.allContacts=e.payload,n.token=e.payload.token})),Object(d.a)(A,rn.fulfilled,(function(n,e){n.contact=e.payload,n.token=e.payload.token})),Object(d.a)(A,on.fulfilled,(function(n,e){n.contact=e.payload,n.token=e.payload.token})),A)})),ln=Object(s.a)(Object(l.f)({serializableCheck:{ignoredActions:[p.a,p.f,p.b,p.c,p.d,p.e]}})),dn={key:"auth",storage:x.a,whitelist:["token"],blacklist:["filtered"]},un=Object(l.a)({reducer:{contacts:sn.reducer,auth:Object(p.g)(dn,z.reducer),filtered:b},middleware:ln,devTools:!1}),bn=(Object(p.h)(un),t(37)),pn=(t(156),t(16)),jn=t(20),xn=t(14),fn=t(15),hn=fn.a.header(L||(L=Object(xn.a)(["\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #ffffff3d;\n  border-bottom: 1px solid #c7c7c7;\n  /* box-shadow: 1px 3px 10px -4px #050505; */\n  align-items: center;\n"]))),On=fn.a.div(T||(T=Object(xn.a)(["\n  display: flex;\n"]))),mn=function(n){return n.auth.isLoggedIn},gn=function(n){return n.auth.user.name},vn=t(68),wn=t(226),yn=t(2),kn=function(){var n=Object(o.c)(mn);return Object(yn.jsxs)(On,{children:[Object(yn.jsx)(bn.b,{exact:!0,to:"/",children:Object(yn.jsx)(wn.a,{sx:{mr:1},children:"Home"})}),n?Object(yn.jsx)(bn.b,{exact:!0,to:"/contacts",children:Object(yn.jsx)(wn.a,{variant:"outlined",children:"Contacts"})}):Object(yn.jsxs)(wn.a,{href:"#text-buttons",disabled:!0,children:["Contacts",Object(yn.jsx)(vn.a,{style:{marginLeft:5}})]})]})},Cn=fn.a.div(F||(F=Object(xn.a)(["\n  display: flex;\n"]))),Sn=function(){return Object(yn.jsxs)(Cn,{children:[Object(yn.jsx)(bn.b,{to:"/login",children:Object(yn.jsx)(wn.a,{variant:"outlined",children:"Log in"})}),Object(yn.jsx)(bn.b,{to:"/signup",children:Object(yn.jsx)(wn.a,{variant:"outlined",sx:{ml:1},children:"Sign Up"})})]})},zn=fn.a.div(I||(I=Object(xn.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),An=fn.a.h2(W||(W=Object(xn.a)(["\n  padding: 5px;\n  font-weight: 400;\n"]))),Ln=fn.a.span(D||(D=Object(xn.a)(["\n  font-weight: 600;\n  font-size: 24px;\n"]))),Tn=t(215),Fn=function(){var n=Object(o.b)(),e=Object(o.c)(gn);return Object(yn.jsx)(Tn.a,{children:Object(yn.jsxs)(zn,{children:[Object(yn.jsxs)(An,{children:["Online: ",Object(yn.jsx)(Ln,{children:e})]}),Object(yn.jsx)(wn.a,{sx:{ml:1},variant:"contained",type:"button",onClick:function(){return n(S())},children:"Log out"})]})})},In=t(225),Wn=t(82),Dn=t.n(Wn),Mn=t(81),qn=t.n(Mn),Rn=function(n){var e=n.onClick,t=n.theme,a=Object(o.c)(mn);return Object(yn.jsx)(Tn.a,{children:Object(yn.jsxs)(hn,{children:[Object(yn.jsx)(kn,{}),Object(yn.jsx)(In.a,{sx:{ml:1},onClick:e,children:"dark"===t.palette.mode?Object(yn.jsx)(qn.a,{}):Object(yn.jsx)(Dn.a,{})}),a?Object(yn.jsx)(Fn,{}):Object(yn.jsx)(Sn,{})]})})},Zn=fn.a.div(M||(M=Object(xn.a)(["\n  margin: 10px auto 20px;\n  padding: 100px 10px;\n\n  background-color: #ffffff3d;\n  /* border: 1px solid #1976d2; */\n  /* border-radius: 5px; */\n  /* box-shadow: 1px 3px 10px -4px #050505; */\n"]))),Pn=fn.a.div(q||(q=Object(xn.a)(["\n  text-align: center;\n"]))),Bn=t(227),Un=function(){return Object(yn.jsx)(Tn.a,{children:Object(yn.jsx)(Zn,{children:Object(yn.jsx)(Pn,{children:Object(yn.jsx)(Bn.a,{variant:"h2",component:"h2",children:"Wellcome to Phonebook-App"})})})})},En=t(222),Gn=t(218),Jn=t(230),Nn=t(223),Vn=t(229),$n=t(69),Hn=t.n($n),Kn=t(228),Qn=fn.a.div(R||(R=Object(xn.a)(["\n  margin: 10px auto 20px;\n  padding: 30px 10px;\n\n  background-color: #ffffff3d;\n  border-radius: 3px;\n"]))),Xn=function(){var n=Object(o.b)();return Object(yn.jsxs)(Kn.a,{component:"main",maxWidth:"xs",children:[Object(yn.jsx)(Tn.a,{}),Object(yn.jsxs)(Vn.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(yn.jsx)(En.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(yn.jsx)(Hn.a,{})}),Object(yn.jsx)(Bn.a,{component:"h1",variant:"h5",children:"Log in"}),Object(yn.jsx)(Qn,{children:Object(yn.jsxs)(Vn.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={email:t.get("email"),password:t.get("password")};n(C(a))},noValidate:!0,sx:{mt:1},children:[Object(yn.jsx)(Gn.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(yn.jsx)(Gn.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),Object(yn.jsx)(wn.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(yn.jsxs)(Nn.a,{container:!0,children:[Object(yn.jsx)(Nn.a,{item:!0,xs:!0}),Object(yn.jsx)(Nn.a,{item:!0,children:Object(yn.jsx)(Jn.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})})]})]})},Yn=t(220),_n=fn.a.div(Z||(Z=Object(xn.a)(["\n  margin: 0 auto 20px;\n  padding: 20px 10px;\n\n  max-width: 800px;\n\n  background-color: #fff;\n  border: 1px solid teal;\n  border-radius: 5px;\n  box-shadow: 1px 3px 10px -4px #050505;\n"]))),ne=fn.a.form(P||(P=Object(xn.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),ee=fn.a.label(B||(B=Object(xn.a)(["\n  color: rgb(111, 121, 124);\n  font-size: 15px;\n  line-height: 20px;\n\n  &:not(last-child) {\n    margin-bottom: 10px;\n  }\n"]))),te=fn.a.input(U||(U=Object(xn.a)(["\n  display: block;\n  padding: 5px 5px;\n\n  border-color: teal;\n  border-radius: 5px;\n\n  &:focus,\n  &:focus-visible,\n  &:active {\n    display: block;\n    padding: 5px 5px;\n\n    border-color: red;\n    outline-color: red;\n  }\n"]))),ae=fn.a.button(E||(E=Object(xn.a)(["\n  display: inline-block;\n  padding: 10px 30px;\n  width: 180px;\n\n  margin-top: 40px;\n\n  border: 0.1em solid #353434;\n\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-decoration: none;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  color: #fff;\n  background-color: teal;\n  text-align: center;\n  transition: all 0.3s;\n  cursor: pointer;\n\n  &:focus,\n  &:focus-visible,\n  &:active {\n    color: #000000;\n    background-color: #92f9f952;\n    box-shadow: 1px 3px 10px -4px #050505;\n  }\n"]))),ce=function(){var n=Object(o.b)(),e=Object(a.useState)(""),t=Object(pn.a)(e,2),c=t[0],r=t[1],i=Object(a.useState)(""),s=Object(pn.a)(i,2),l=s[0],d=s[1],u=Object(Yn.a)(),b=Object(Yn.a)(),p=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":d(a);break;default:return}},j=function(){r(""),d("")};return Object(yn.jsx)(_n,{children:Object(yn.jsxs)(ne,{onSubmit:function(e){e.preventDefault(),n(rn({name:c,number:l})),n(cn()),j()},children:[Object(yn.jsxs)(ee,{htmlFor:u,children:["Name",Object(yn.jsx)(te,{type:"text",placeholder:"Mark Zuckerberg",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p,id:u})]}),Object(yn.jsxs)(ee,{htmlFor:b,children:["Number",Object(yn.jsx)(te,{type:"tel",placeholder:"xxx-xx-xx",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p,id:b})]}),Object(yn.jsx)(ae,{type:"submit",children:"Add contact"})]})})},re=fn.a.div(G||(G=Object(xn.a)(["\n  justify-content: center;\n  text-align: center;\n  padding: 20px 10px;\n"]))),ie=fn.a.h2(J||(J=Object(xn.a)(["\n  color: rgb(111, 121, 124);\n"]))),oe=fn.a.input(N||(N=Object(xn.a)(["\n  margin: 0 auto;\n  display: block;\n  padding: 5px 5px;\n\n  border-color: teal;\n  border-radius: 5px;\n\n  &:focus,\n  &:focus-visible,\n  &:focus {\n    display: block;\n    padding: 5px 5px;\n\n    border-color: red;\n    outline-color: red;\n  }\n"]))),se=function(n){return n.filtered},le=function(n){return n.contacts.allContacts},de=function(){var n=Object(o.c)(se),e=Object(o.b)();return Object(yn.jsxs)(re,{children:[Object(yn.jsx)(ie,{children:"Search by name"}),Object(yn.jsx)(oe,{type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:n,onChange:function(n){return e(u(n.currentTarget.value))}})]})},ue=t(70),be=t(104),pe=(t(103),fn.a.li(V||(V=Object(xn.a)(["\n  position: relative;\n  min-width: 160px;\n  width: 22%;\n  padding: 10px 10px;\n  margin: 7px;\n\n  color: rgb(111, 121, 124);\n  font-size: 14px;\n  line-height: 20px;\n\n  background-color: #fff;\n  border: 1px solid teal;\n  border-radius: 5px;\n  box-shadow: 1px 3px 10px -4px #050505;\n\n  transition: transform 0.25s linear, -webkit-transform 0.25s linear;\n  overflow: hidden;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n"])))),je=fn.a.p($||($=Object(xn.a)(["\n  font-weight: 400;\n"]))),xe=fn.a.p(H||(H=Object(xn.a)(["\n  font-weight: 600;\n"]))),fe=fn.a.button(K||(K=Object(xn.a)(["\n  padding: 5px;\n  font-size: 20px;\n  line-height: 10px;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: teal;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  cursor: pointer;\n"]))),he=function(n){var e=n.id,t=n.name,a=n.number,c=Object(o.b)();return Object(yn.jsxs)(pe,{children:[Object(yn.jsxs)(je,{children:[Object(yn.jsx)(ue.a,{style:{paddingTop:"2",marginRight:"5"}}),t,":"]}),Object(yn.jsxs)(xe,{children:[Object(yn.jsx)(be.a,{style:{paddingTop:"2",marginRight:"5"}}),a]}),Object(yn.jsx)(fe,{type:"button",onClick:function(){c(on(e)),c(cn())},children:Object(yn.jsx)(vn.b,{style:{width:"15"}})})]})},Oe=fn.a.div(Q||(Q=Object(xn.a)(["\n  max-width: 800px;\n"]))),me=fn.a.ul(X||(X=Object(xn.a)(["\n  padding: 20px 5px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  border: 1px solid teal;\n  border-radius: 5px;\n"]))),ge=(fn.a.li(Y||(Y=Object(xn.a)(["\n  position: relative;\n  min-width: 160px;\n  width: 22%;\n  padding: 10px 15px;\n  margin: 7px;\n\n  color: rgb(111, 121, 124);\n  font-size: 14px;\n  line-height: 20px;\n\n  background-color: #fff;\n  border: 1px solid teal;\n  border-radius: 5px;\n  box-shadow: 1px 3px 10px -4px #050505;\n\n  transition: transform 0.25s linear, -webkit-transform 0.25s linear;\n  overflow: hidden;\n"]))),function(){var n=Object(o.b)(),e=(Object(o.c)(se),Object(o.c)(le));return Object(a.useEffect)((function(){n(cn())}),[n]),Object(yn.jsx)(Oe,{children:e&&Object(yn.jsx)(me,{children:e.map((function(n){var e=n.id,t=n.name,a=n.number;return Object(yn.jsx)(he,{id:e,name:t,number:a},e)}))})})}),ve=t(105),we=fn.a.div(_||(_=Object(xn.a)(["\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px 10px;\n"]))),ye=fn.a.h1(nn||(nn=Object(xn.a)(["\n  padding: 5px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  color: teal;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.5;\n  font-style: italic;\n\n  display: flex;\n  align-items: center;\n"]))),ke=fn.a.h2(en||(en=Object(xn.a)(["\n  padding: 5px;\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  color: teal;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.5;\n  font-style: italic;\n\n  display: flex;\n  align-items: center;\n"]))),Ce=(fn.a.div(tn||(tn=Object(xn.a)(["\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 40%;\n  left: 47%;\n"]))),function(){var n=Object(o.c)(mn);return Object(yn.jsx)("div",{children:Object(yn.jsx)(yn.Fragment,{children:n&&Object(yn.jsxs)(we,{children:[Object(yn.jsxs)(ye,{children:["Phonebook ",Object(yn.jsx)(ve.a,{style:{marginLeft:"3"}})]}),Object(yn.jsx)(ce,{}),Object(yn.jsx)(de,{}),Object(yn.jsxs)(ke,{children:["Contacts",Object(yn.jsx)(ue.b,{style:{marginLeft:"3"}})]}),Object(yn.jsx)(ge,{})]})})})}),Se=fn.a.div(an||(an=Object(xn.a)(["\n  margin: 10px auto 20px;\n  padding: 30px 10px;\n\n  background-color: #ffffff3d;\n  border-radius: 3px;\n"]))),ze=function(){var n=Object(o.b)();return Object(yn.jsxs)(Kn.a,{component:"main",maxWidth:"xs",children:[Object(yn.jsx)(Tn.a,{}),Object(yn.jsxs)(Vn.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(yn.jsx)(En.a,{sx:{m:1,bgcolor:"secondary.main"},children:Object(yn.jsx)(Hn.a,{})}),Object(yn.jsx)(Bn.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(yn.jsx)(Se,{children:Object(yn.jsxs)(Vn.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault();var t=new FormData(e.currentTarget);console.log({name:t.get("name"),email:t.get("email"),password:t.get("password")});var a={name:t.get("name"),email:t.get("email"),password:t.get("password")};n(k(a))},sx:{mt:3},children:[Object(yn.jsxs)(Nn.a,{container:!0,spacing:2,children:[Object(yn.jsx)(Nn.a,{item:!0,xs:12,children:Object(yn.jsx)(Gn.a,{autoComplete:"given-name",name:"name",required:!0,fullWidth:!0,id:"firstName",label:"Name",autoFocus:!0})}),Object(yn.jsx)(Nn.a,{item:!0,xs:12,children:Object(yn.jsx)(Gn.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})}),Object(yn.jsx)(Nn.a,{item:!0,xs:12,children:Object(yn.jsx)(Gn.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password"})})]}),Object(yn.jsx)(wn.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(yn.jsx)(Nn.a,{container:!0,justifyContent:"flex-end",children:Object(yn.jsx)(Nn.a,{item:!0,children:Object(yn.jsx)(Jn.a,{href:"/login",variant:"body2",children:"Already have an account? Sign in"})})})]})})]})]})},Ae=t(106),Le=t(224),Te=function(){var n=Object(a.useState)(!1),e=Object(pn.a)(n,2),t=e[0],c=e[1],r=a.useMemo((function(){return Object(Ae.a)({palette:{mode:t?"dark":"light"}})}),[t]);return Object(yn.jsx)(yn.Fragment,{children:Object(yn.jsxs)(Le.a,{theme:r,children:[Object(yn.jsx)(Rn,{onClick:function(){c(!t)},theme:r}),Object(yn.jsxs)(jn.c,{children:[Object(yn.jsx)(jn.a,{exact:!0,path:"/",component:Un}),Object(yn.jsx)(jn.a,{exact:!0,path:"/contacts",component:Ce}),Object(yn.jsx)(jn.a,{path:"/signup",component:ze}),Object(yn.jsx)(jn.a,{path:"/login",component:Xn})]})]})})},Fe=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,231)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),c(n),r(n),i(n)}))};i.a.render(Object(yn.jsx)(c.a.StrictMode,{children:Object(yn.jsx)(o.a,{store:un,children:Object(yn.jsx)(bn.a,{children:Object(yn.jsx)(Te,{})})})}),document.getElementById("root")),Fe()}},[[179,1,2]]]);
//# sourceMappingURL=main.2ffb05a9.chunk.js.map