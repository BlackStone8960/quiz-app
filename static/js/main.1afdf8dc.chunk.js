(this["webpackJsonptech-quiz"]=this["webpackJsonptech-quiz"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(10),a=n.n(s),u=(n(16),n(5)),i=n(2),o=n(1),j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(u.b,{to:"/quiz/react",children:"React"}),Object(o.jsx)(u.b,{to:"/quiz/js",children:"Javascript"})]})},l=n(3),b=Object(c.createContext)(),d=function(e){var t=e.children,n=Object(c.useState)(null),r=Object(l.a)(n,2),s=r[0],a=r[1];return Object(o.jsx)(b.Provider,{value:{user:s,setUser:a},children:t})},O=function(){return Object(c.useContext)(b)},h=function(){var e=O().setUser,t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(""),u=Object(l.a)(a,2),j=u[0],b=u[1],d=Object(i.f)();return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:r,email:j}),d("/quiz-selection")},children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Name: "}),Object(o.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},type:"text"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Email: "}),Object(o.jsx)("input",{value:j,onChange:function(e){return b(e.target.value)},type:"email"})]}),Object(o.jsx)("button",{type:"submit",children:"Submit"})]})})},f=n(9),x={react:[{question:"Is React.js a framework?",answer:"true"},{question:"Functional conponent uses Hooks",answer:"true"},{question:"All lifecicle method are executed after component mounted",answer:"false"},{question:"Are props objects?",answer:"true"},{question:"Does React.js use realDOM?",answer:"false"},{question:"Do you get any errors if you create the components names start with a lowercase?",answer:"true"},{question:"Can we use React Hooks in Class components?",answer:"false"},{question:"Does componentDidMount() get executed after the fisrt rendering?",answer:"true"},{question:"The fragments let you add extra nodes to the DOM?",answer:"false"},{question:"Does the React component get re-rendered when you update the state without setState?",answer:"false"}],js:[]},p=n(11),v=Object(c.createContext)(),m=Object(p.a)(Array(10)),q=function(e,t){switch(t.type){case"ADD_ANSWER":return e.map((function(e,n){return t.payload.index===n?t.payload.score:e}));default:return e}},g=function(e){var t=e.children,n=Object(c.useReducer)(q,m),r=Object(l.a)(n,2),s=r[0],a=r[1];return Object(o.jsx)(v.Provider,{value:{score:s,dispatchScore:a},children:t})},w=function(){return Object(c.useContext)(v)},y=function(e){var t=e.question,n=e.answer,r=e.index,s=Object(c.useState)(null),a=Object(l.a)(s,2),u=a[0],i=a[1],j=w().dispatchScore;return Object(c.useEffect)((function(){u&&j({type:"ADD_ANSWER",payload:{index:r,score:n===u?10:0}})}),[u]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:t}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",value:"true",onChange:function(e){return i(e.target.value)},checked:"true"===u}),"Yes"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"radio",value:"false",onChange:function(e){return i(e.target.value)},checked:"false"===u}),"No"]})]})},S=function(){var e=Object(i.g)().quizId,t=w().score,n=Object(i.f)(),r=Object(c.useState)(""),s=Object(l.a)(r,2),a=s[0],u=s[1];return Object(o.jsxs)("div",{children:[x[e].map((function(e,t){return Object(c.createElement)(y,Object(f.a)(Object(f.a)({},e),{},{key:e.question,index:t}))})),Object(o.jsx)("div",{children:a}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),t.includes(void 0)?u("Answer all questions."):n("/score")},children:"SUBMIT"})]})},C=function(){var e=O().user,t=w().score,n=Object(c.useState)(0),r=Object(l.a)(n,2),s=r[0],a=r[1];return Object(c.useEffect)((function(){if(t){var e=t.reduce((function(e,t){return e+t}));a(e)}}),[t]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:e&&e.name}),Object(o.jsxs)("div",{children:["Your score is ",s]})]})},D=function(){return Object(o.jsx)(u.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(h,{})}),Object(o.jsx)(i.a,{path:"/quiz-selection",element:Object(o.jsx)(j,{})}),Object(o.jsx)(i.a,{path:"/quiz/:quizId",element:Object(o.jsx)(S,{})}),Object(o.jsx)(i.a,{path:"/score",element:Object(o.jsx)(C,{})})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(d,{children:Object(o.jsx)(g,{children:Object(o.jsx)(D,{})})})}),document.getElementById("root")),k()}},[[18,1,2]]]);
//# sourceMappingURL=main.1afdf8dc.chunk.js.map