(this["webpackJsonprepository-react-create"]=this["webpackJsonprepository-react-create"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(7),a=n.n(i),s=(n(13),n(8)),o=n(2),j=n(3),u=n(5),b=n(4),l=n(0),d=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(l.jsx)("ul",{children:this.props.options.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",value:t,onClick:function(){return e.props.onLeaveFeedback(t)},children:t})},t)}))})}}]),n}(c.Component),h=d,p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:this.props.title}),this.props.children]})}}]),n}(c.Component),O=p,f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:["Good: ",Object(l.jsx)("p",{children:this.props.good})]}),Object(l.jsxs)("li",{children:["Neutral: ",Object(l.jsx)("p",{children:this.props.neutral})]}),Object(l.jsxs)("li",{children:["Bad: ",Object(l.jsx)("p",{children:this.props.bad})]}),Object(l.jsxs)("li",{children:["Total: ",Object(l.jsx)("p",{children:this.props.total})]}),Object(l.jsxs)("li",{children:["Positive feedback: ",Object(l.jsxs)("p",{children:[this.props.positivePercentage," %"]})]})]})}}]),n}(c.Component),v=f,x=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(l.jsx)("p",{children:this.props.message})}}]),n}(c.Component),k=x,y=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.onClick=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return t+e}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,r=Object.keys(this.state);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{title:"Please leave feedback",children:Object(l.jsx)(h,{options:r,onLeaveFeedback:this.onClick})}),Object(l.jsx)(O,{title:"Statistics",children:this.countTotalFeedback()>0?Object(l.jsx)(v,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(l.jsx)(k,{message:"No feedback given"})})]})}}]),n}(c.Component),g=y;a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.33131a16.chunk.js.map