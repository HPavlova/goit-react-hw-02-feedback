(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(3),i=n.n(r),o=(n(13),n(14),n(4)),s=n(5),d=n(6),u=n(8),b=n(7),j=(n(15),n(0)),l=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t}),n]})},h=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(j.jsx)("button",{type:"button",name:e,onClick:n,children:e},e)}))},v=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positivePercentage;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Good: ",t]}),Object(j.jsxs)("p",{children:["Neutral: ",n]}),Object(j.jsxs)("p",{children:["Bad: ",c]}),Object(j.jsxs)("p",{children:["Total: ",a]}),Object(j.jsxs)("p",{children:["Positive feedback: ",r," %"]})]})},O=function(e){var t=e.message;return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:t})})},f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.hendleIncrement=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback(),t=this.state.good/e*100;return Math.round(t)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage();return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{title:"Please leave feedback",children:Object(j.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:this.hendleIncrement})}),0===a?Object(j.jsx)(O,{message:"No feedback given"}):Object(j.jsx)(l,{title:"Statistics",children:Object(j.jsx)(v,{good:t,neutral:n,bad:c,total:a,positivePercentage:r})})]})}}]),n}(c.Component),p=f;var x=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p,{})})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f9c8747b.chunk.js.map