(this["webpackJsonptime-tracking-react"]=this["webpackJsonptime-tracking-react"]||[]).push([[0],{21:function(e,t,s){},40:function(e,t,s){},41:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),a=s(15),n=s.n(a),r=(s(21),s(3)),l=s(16),j=s.n(l),m=(s(40),s(41),s.p+"static/media/icon-ellipsis.a57a4ac8.svg"),o=s(0),d=function(e){var t,s=e.data,c=e.time;return t="daily"===c?Object(o.jsxs)("div",{className:"times grid",children:[Object(o.jsxs)("p",{className:"text-left fs-600 fw-300 current",children:[s.timeframes.daily.current,"hrs"]}),Object(o.jsxs)("p",{className:"text-light fs-200 text-right previous",children:["Yesterday - ",s.timeframes.daily.previous,"hrs"]})]}):"weekly"===c?Object(o.jsxs)("div",{className:"times grid",children:[Object(o.jsxs)("p",{className:"text-left fs-600 fw-300 current",children:[s.timeframes.weekly.current,"hrs"]}),Object(o.jsxs)("p",{className:"text-light fs-200 text-right previous",children:["Last week - ",s.timeframes.weekly.previous,"hrs"]})]}):"monthly"===c?Object(o.jsxs)("div",{className:"times grid",children:[Object(o.jsxs)("p",{className:"text-left fs-600 fw-300 current",children:[s.timeframes.monthly.current,"hrs"]}),Object(o.jsxs)("p",{className:"text-light fs-200 text-right previous",children:["Last month - ",s.timeframes.monthly.previous,"hrs"]})]}):Object(o.jsx)("div",{}),Object(o.jsx)("div",{className:"card flex",children:Object(o.jsxs)("div",{className:"card-info grid",children:[Object(o.jsx)("p",{className:"fw-500 text-left title",children:s.title}),Object(o.jsx)("button",{className:"btn btn-size",children:Object(o.jsx)("img",{src:m,alt:"change timeframe",className:"link"})}),t]})})},f=s.p+"static/media/image-jeremy.71cd41f1.png",b=(s(43),function(e){var t=e.text,s=e.onClick,c=e.color;return Object(o.jsx)("button",{onClick:s,className:"btn",style:{color:c},children:t})});b.defaultProps={text:""};var h=b,x=function(e){var t=e.daily,s=e.weekly,c=e.monthly,i=e.dailyBtn,a=e.weeklyBtn,n=e.monthlyBtn;return Object(o.jsxs)("div",{className:"profile flex bg-dark",children:[Object(o.jsxs)("div",{className:"profile-upper flex bg-blue",children:[Object(o.jsx)("img",{src:f,alt:"Jeremy"}),Object(o.jsxs)("div",{className:"profile-name flex",children:[Object(o.jsx)("p",{className:"text-light fs-200",children:"Report for"}),Object(o.jsx)("p",{className:"name fs-500 fw-300",children:"Jeremy Robson"})]})]}),Object(o.jsxs)("div",{className:"btn-div flex",children:[Object(o.jsx)(h,{text:"Daily",onClick:t,color:i}),Object(o.jsx)(h,{text:"Weekly",onClick:s,color:a}),Object(o.jsx)(h,{text:"Monthly",onClick:c,color:n})]})]})};var u=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)("daily"),n=Object(r.a)(a,2),l=n[0],m=n[1],f=Object(c.useState)(),b=Object(r.a)(f,2),h=b[0],u=b[1],O=Object(c.useState)(),p=Object(r.a)(O,2),y=p[0],v=p[1],g=Object(c.useState)(),N=Object(r.a)(g,2),k=N[0],w=N[1];return Object(c.useEffect)((function(){j.a.get("data.json").then((function(e){i(e.data.map((function(e){return{id:e.id,title:e.title,timeframes:e.timeframes}})))}))}),[]),Object(o.jsxs)("div",{className:"App container flex",children:[Object(o.jsx)(x,{daily:function(){m("daily"),u("white"),v(""),w("")},weekly:function(){m("weekly"),u(""),v("white"),w("")},monthly:function(){m("monthly"),u(""),v(""),w("white")},dailyBtn:h,weeklyBtn:y,monthlyBtn:k}),s.map((function(e){return Object(o.jsx)(d,{data:e,time:l},e.id)}))]})};n.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.9ed6f6ff.chunk.js.map