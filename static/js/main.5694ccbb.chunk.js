(this["webpackJsonpclassting-app"]=this["webpackJsonpclassting-app"]||[]).push([[0],{15:function(e,t,c){},48:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(17),r=c.n(n),i=(c(48),c(18),c(12)),l=c(5),j=(c(15),c(26)),o=c.n(j),b=c(36),d=c(7),O=c(99),u=c(13),h=c(37),x=c.n(h),m=c(38),p=c(1);var g=function(e){return Object(p.jsx)("div",{children:Object(p.jsx)(u.a,{onClick:e.clickFunc,variant:"outline-light",className:e.styles,children:e.btnText})})};var v=function(e){var t=Object(s.useState)(0),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(0),i=Object(d.a)(r,2),l=i[0],j=i[1],o=Object(s.useState)("NextBtn DisplayNone"),b=Object(d.a)(o,2),O=b[0],u=b[1];return localStorage.setItem("select",a),e.setNext!==l&&(n(0),j(e.setNext),u("NextBtn DisplayNone")),Object(p.jsxs)(p.Fragment,{children:[e.dataSet.map((function(t,c){return Object(p.jsxs)(m.a,{id:"radio-".concat(c),type:"radio",variant:"outline-success",name:"radio",className:"SelectBtn",value:t,checked:a===t,style:{pointerEvents:e.canClick},onChange:function(e){return function(e){n(e.currentTarget.value),u("NextBtn")}(e)},children:[Object(p.jsx)("div",{className:"ProblemNum",children:c+1}),t]},c)})),Object(p.jsx)(g,{styles:O,clickFunc:e.clickFuncs,btnText:e.btnTexts})]})};var f=function(e){return Object(p.jsx)("div",{className:"QuizArea",children:Object(p.jsx)("p",{children:e.question})})},N=c(39),S=c.n(N);var w=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(S.a,{type:"Oval",color:"#00C896",height:30,width:30,timeout:3e3})})};var y=function(e){var t=Object(s.useState)(parseInt(e.mm)),c=Object(d.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(parseInt(e.ss)),i=Object(d.a)(r,2),l=i[0],j=i[1];return!0===e.stop&&localStorage.setItem("time","".concat(a," : ").concat(l<10?"0".concat(l):l)),Object(s.useEffect)((function(){var e=setInterval((function(){parseInt(l)<59&&j(parseInt(l)+1),59===parseInt(l)&&(n(parseInt(a)+1),j(0))}),1e3);return function(){return clearInterval(e)}}),[a,l]),Object(p.jsx)("div",{className:"ContextAlign",children:Object(p.jsxs)("div",{className:"Timer",children:[a," : ",l<10?"0".concat(l):l]})})};function C(e,t){var c=t[e].incorrect_answers,s=["","","",""],a=0;s[Math.floor(3*Math.random())+0]=t[e].correct_answer;for(var n=0;n<s.length;n++)if(""===s[n]){var r=c[a].indexOf("&"),i=c[a].indexOf(";");if(r){var l=c[a].substr(0,r);l+=c[a].substr(i+1,c[a].length),c[a]=l}s[n]=c[a],a++}return s}function I(e){var t=e.indexOf("&"),c=e.indexOf(";");if(t){var s=e.substr(0,t);s+=e.substr(c+1,e.length),e=s}return e}var A=function(e){var t=Object(s.useState)([]),c=Object(d.a)(t,2),n=c[0],r=c[1],i=Object(s.useState)(!1),j=Object(d.a)(i,2),h=j[0],m=j[1],g=Object(s.useState)([]),N=Object(d.a)(g,2),S=N[0],A=N[1],k=Object(s.useState)(0),B=Object(d.a)(k,2),F=B[0],T=B[1],z=Object(s.useState)("\ub2e4\uc74c \ubb38\uc81c"),M=Object(d.a)(z,2),E=M[0],L=M[1],_=Object(s.useState)(""),q=Object(d.a)(_,2),R=q[0],P=q[1],D=Object(s.useState)([]),J=Object(d.a)(D,2),H=J[0],Q=J[1],U=Object(s.useState)([]),G=Object(d.a)(U,2),K=G[0],V=G[1],W=Object(s.useState)([]),X=Object(d.a)(W,2),Y=X[0],Z=X[1],$=Object(l.f)(),ee=Object(s.useState)(!1),te=Object(d.a)(ee,2),ce=te[0],se=te[1],ae=function(){return se(!1)};Object(s.useEffect)((function(){if(void 0!==e.wrongArr)0!==e.wrongArr.length&&r(e.wrongArr);else{var t=function(){var e=Object(b.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple");case 3:t=e.sent,r(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();t()}}),[e.wrongArr]);var ne=function(){var e=n[F].correct_answer,t=localStorage.getItem("select"),c=!1,s=[];return e===t?(s.push("\ub9de\uc558\uc2b5\ub2c8\ub2e4 :)"),Q(H.concat(F))):(s.push("\ud2c0\ub838\uc2b5\ub2c8\ub2e4 :("),c=!0,V(K.concat(F)),Z(Y.concat(n[F]))),F+1===n.length-1&&L("\uacb0\uacfc \ubcf4\uae30"),s.push(n[F].question),s.push(e),!0===c&&s.push(t),A(s),se(!0),!0},re=function(){return a.a.useEffect((function(){localStorage.setItem("correct",H),localStorage.setItem("fail",K),localStorage.setItem("wrongset",JSON.stringify(Y))})),!0};return Object(p.jsx)("div",{className:"QuizPage",children:Object(p.jsx)("div",{className:"Container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-sm-12 LogoArea",children:[Object(p.jsx)("img",{src:"https://about.classting.com/images/classting_logo.png",className:"App-logo",alt:"profile"}),Object(p.jsx)(y,{mm:"0",ss:"0",stop:h})]}),Object(p.jsx)("div",{className:"col-sm-12 ContentArea",children:0!==n.length?Object(p.jsx)(f,{question:I(n[F].question)}):""}),Object(p.jsx)("div",{className:"Loding",children:"none"===R?Object(p.jsx)(w,{}):Object(p.jsxs)("p",{className:"contentText",children:[" ",Object(p.jsx)("b",{children:F})," / ",n.length]})}),Object(p.jsx)("div",{className:"col-sm-12 SelectArea",children:0!==n.length?Object(p.jsx)(v,{dataSet:C(F,n),setNext:F,canClick:R,clickFuncs:function(){F<n.length-1?(ne(),T(F+1)):F===n.length-1&&(ne(),m(!0),P("none"),setTimeout((function(){return $.push("result")}),1e3))},btnTexts:E}):""}),Object(p.jsx)(re,{}),Object(p.jsxs)(O.a,{animation:!1,show:ce,onHide:ae,backdrop:"static",keyboard:!1,className:"ModalStyle",children:[Object(p.jsx)(O.a.Header,{children:Object(p.jsx)(O.a.Title,{children:S[0]})}),Object(p.jsxs)(O.a.Body,{className:"ModalInner",children:[Object(p.jsx)("p",{className:"CheckQuestion",children:S[1]}),Object(p.jsx)("b",{children:Object(p.jsx)("p",{className:"CheckAnswer",children:S[2]})}),Object(p.jsx)("b",{children:Object(p.jsx)("p",{className:"MyAnswer",children:S[3]})})]}),Object(p.jsx)(O.a.Footer,{children:Object(p.jsx)(u.a,{variant:"primary",onClick:ae,children:"\ub2e4\uc74c \ubb38\uc81c \ud480\uae30"})})]})]})})})},k=c(43);var B=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"RESULT"}),Object(p.jsx)(k.a,{data:(t=e.correct,c=e.wrong,{labels:["\ub9de\uc558\uc2b5\ub2c8\ub2e4","\ud2c0\ub838\uc2b5\ub2c8\ub2e4"],datasets:[{data:[t,c],backgroundColor:["#00C896","#1B1D22"],hoverBackgroundColor:["#FF6384","#36A2EB"]}]})})]});var t,c};var F=function(){var e=localStorage.getItem("correct"),t=localStorage.getItem("fail"),c=localStorage.getItem("time");return e=""===e?0:e.split(",").length,t=""===t?0:t.split(",").length,Object(p.jsx)("div",{className:"ResultPage",children:Object(p.jsx)("div",{className:"Container",children:Object(p.jsxs)("div",{className:"row ContextAlign",children:[Object(p.jsx)("div",{className:"col-sm-12 LogoArea",children:Object(p.jsx)("img",{src:"https://about.classting.com/images/classting_logo.png",className:"App-logo",alt:"profile"})}),Object(p.jsx)("div",{className:"ResultSpace",children:Object(p.jsx)("b",{children:Object(p.jsx)("p",{children:"FINISH Time"})})}),Object(p.jsx)("div",{className:"ResultSpace",children:Object(p.jsx)("p",{children:c})}),Object(p.jsx)("div",{className:"ResultSpace",children:Object(p.jsxs)("p",{children:["\ub9de\uc740 \ubb38\uc81c ",Object(p.jsx)("b",{children:e})," \uac1c"]})}),Object(p.jsx)("div",{className:"ResultSpace",children:Object(p.jsxs)("p",{children:["\ud2c0\ub9b0 \ubb38\uc81c ",Object(p.jsx)("b",{children:t})," \uac1c"]})}),Object(p.jsx)("div",{className:"ChartSpace",children:Object(p.jsx)(B,{correct:e,wrong:t})}),Object(p.jsxs)("div",{className:"ButtonSpace",children:[Object(p.jsx)(i.b,{to:"/",children:Object(p.jsx)(u.a,{variant:"secondary",size:"lg",className:"StartBtn",children:"\ub2e4\uc2dc \ud480\uae30"})}),Object(p.jsx)(i.b,{to:"/practice",children:Object(p.jsx)(u.a,{variant:"secondary",size:"lg",className:"StartBtn",children:"\uc624\ub2f5 \ub178\ud2b8"})})]})]})})})};var T=function(){return Object(p.jsx)("div",{className:"Main",children:Object(p.jsx)("div",{className:"Container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-sm-12",children:Object(p.jsx)("img",{src:"https://about.classting.com/images/classting_logo.png",className:"App-logo",alt:"profile"})}),Object(p.jsx)("div",{className:"BlankSpace",children:" "}),Object(p.jsx)(i.b,{to:"/quiz",children:Object(p.jsx)(u.a,{variant:"secondary",size:"lg",className:"StartBtn",children:"\ud034\uc988 \ud480\uae30 \uc2dc\uc791"})}),Object(p.jsx)(i.b,{to:"/practice",children:Object(p.jsx)(u.a,{variant:"secondary",size:"lg",className:"StartBtn",children:"\uc624\ub2f5 \ub178\ud2b8"})})]})})})};var z=function(){return Object(p.jsx)("div",{className:"Main",children:Object(p.jsx)("div",{className:"Container",children:Object(p.jsxs)("div",{className:"row ContextAlign",children:[Object(p.jsx)("div",{className:"col-sm-12 LogoArea",children:Object(p.jsx)("img",{src:"https://about.classting.com/images/classting_logo.png",className:"App-logo",alt:"profile"})}),Object(p.jsx)("p",{children:"\ud2c0\ub9b0 \ubb38\uc81c\uac00 \uc5c6\uc5b4\uc694 :)"}),Object(p.jsx)(i.b,{to:"/",children:Object(p.jsx)(u.a,{variant:"secondary",size:"lg",className:"StartBtn",children:"\ub3cc\uc544\uac00\uae30"})})]})})})};var M=function(){var e=JSON.parse(localStorage.getItem("wrongset"));return Object(p.jsx)("div",{className:"Main",children:Object(p.jsx)("div",{className:"Container",children:0===e.length?Object(p.jsx)(z,{}):Object(p.jsx)(A,{wrongArr:e})})})};var E=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(i.a,{children:Object(p.jsx)(l.c,{children:Object(p.jsxs)(i.a,{basename:"/classting-app",children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:T}),Object(p.jsx)(l.a,{path:"/quiz",component:A}),Object(p.jsx)(l.a,{path:"/result",component:F}),Object(p.jsx)(l.a,{path:"/practice",component:M}),Object(p.jsx)(l.a,{path:"/none",component:z})]})})})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,100)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),L()}},[[96,1,2]]]);
//# sourceMappingURL=main.5694ccbb.chunk.js.map