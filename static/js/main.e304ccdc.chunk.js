(this["webpackJsonprepository-react-create"]=this["webpackJsonprepository-react-create"]||[]).push([[0],[,function(e,t,c){e.exports={item:"Statistics_item__tV6Wg",text:"Statistics_text__3K17J",title:"Statistics_title__2JYct"}},,,,,,function(e,t,c){e.exports={feedback:"FeedbackOptions_feedback__3jRky",item:"FeedbackOptions_item__9G9cQ",button:"FeedbackOptions_button__2SViE"}},,,,function(e,t,c){e.exports={container:"Container_container__3uNlN"}},function(e,t,c){e.exports={title:"Notification_title__1wF0J"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(9),i=c.n(s),r=(c(17),c(18),c(10)),o=c(3),l=c(4),j=c(6),b=c(5),u=c(7),d=c.n(u),O=c(0),h=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.options,c=e.onLeaveFeedback;return Object(O.jsx)("ul",{className:"list ".concat(d.a.feedback),children:t.map((function(e){return Object(O.jsx)("li",{className:d.a.item,children:Object(O.jsx)("button",{className:d.a.button,type:"button",value:e,onClick:function(){return c(e)},children:e})},e)}))})}}]),c}(a.Component),p=h,x=c(11),m=c.n(x);var f=function(e){var t=e.children;return Object(O.jsx)("div",{className:m.a.container,children:t})},v=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.title,c=e.children;return Object(O.jsx)("div",{children:Object(O.jsxs)(f,{children:[Object(O.jsx)("h1",{children:t}),c]})})}}]),c}(a.Component),k=v,N=c(1),_=c.n(N),y=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props,t=e.good,c=e.neutral,a=e.bad,n=e.total,s=e.positivePercentage;return Object(O.jsxs)("ul",{className:!0,children:[Object(O.jsxs)("li",{className:"list ".concat(_.a.item),children:[Object(O.jsx)("span",{className:_.a.title,children:"Good:"}),Object(O.jsx)("p",{className:_.a.text,children:t})]}),Object(O.jsxs)("li",{className:"list ".concat(_.a.item),children:[Object(O.jsx)("span",{className:_.a.title,children:"Neutral:"}),Object(O.jsx)("p",{className:_.a.text,children:c})]}),Object(O.jsxs)("li",{className:"list ".concat(_.a.item),children:[Object(O.jsx)("span",{className:_.a.title,children:"Bad:"}),Object(O.jsx)("p",{className:_.a.text,children:a})]}),Object(O.jsxs)("li",{className:"list ".concat(_.a.item),children:[Object(O.jsx)("span",{className:_.a.title,children:"Total:"}),Object(O.jsx)("p",{className:_.a.text,children:n})]}),Object(O.jsxs)("li",{className:"list ".concat(_.a.item),children:[Object(O.jsx)("span",{className:_.a.title,children:"Positive feedback:"}),Object(O.jsxs)("p",{className:_.a.text,children:[s," %"]})]})]})}}]),c}(a.Component),g=y,F=c(12),C=c.n(F),P=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(O.jsx)("p",{className:C.a.title,children:this.props.message})}}]),c}(a.Component),S=P,J=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.onClick=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return t+e}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this.state,t=e.good,c=e.neutral,a=e.bad,n=Object.keys(this.state),s=this.onClick,i=this.countTotalFeedback,r=this.countPositiveFeedbackPercentage;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{title:"Please leave feedback",children:Object(O.jsx)(p,{options:n,onLeaveFeedback:s})}),Object(O.jsx)(k,{title:"Statistics",children:i()>0?Object(O.jsx)(g,{good:t,neutral:c,bad:a,total:i(),positivePercentage:r()}):Object(O.jsx)(S,{message:"No feedback given"})})]})}}]),c}(a.Component),w=J;i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.e304ccdc.chunk.js.map