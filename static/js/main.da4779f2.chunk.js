(this["webpackJsonptime-tracking-react"]=this["webpackJsonptime-tracking-react"]||[]).push([[0],{23:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(16),i=c.n(a),r=(c(23),c(7)),l=c.n(r),o=c(17),j=c(3),d=c(18),m=c.n(d),b=(c(43),c(44),c.p+"static/media/icon-ellipsis.a57a4ac8.svg"),u=c(0),f=function(e){var t,c=e.data,n=e.resetGenTime,a=e.genTime,i=Object(s.useState)("daily"),r=Object(j.a)(i,2),l=r[0],o=r[1];""!==a&&a!==l&&o(a),t="daily"===l?Object(u.jsxs)("div",{className:"times grid",children:[Object(u.jsxs)("p",{className:"text-left fs-600 fw-300 current",children:[c.timeframes.daily.current,"hrs"]}),Object(u.jsxs)("p",{className:"text-light fs-200 text-right previous",children:["Yesterday - ",c.timeframes.daily.previous,"hrs"]})]}):"weekly"===l?Object(u.jsxs)("div",{className:"times grid",children:[Object(u.jsxs)("p",{className:"text-left fs-600 fw-300 current",children:[c.timeframes.weekly.current,"hrs"]}),Object(u.jsxs)("p",{className:"text-light fs-200 text-right previous",children:["Last week - ",c.timeframes.weekly.previous,"hrs"]})]}):"monthly"===l?Object(u.jsxs)("div",{className:"times grid",children:[Object(u.jsxs)("p",{className:"text-left fs-600 fw-300 current",children:[c.timeframes.monthly.current,"hrs"]}),Object(u.jsxs)("p",{className:"text-light fs-200 text-right previous",children:["Last month - ",c.timeframes.monthly.previous,"hrs"]})]}):Object(u.jsx)("div",{});var d={backgroundImage:"url(".concat(c.background.icon,")"),backgroundColor:"".concat(c.background.color)};return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"card flex",style:d,children:Object(u.jsxs)("div",{className:"card-info grid",children:[Object(u.jsx)("p",{className:"fw-500 text-left title",children:c.title}),Object(u.jsx)("button",{className:"btn btn-size",onClick:function(){n(),"daily"===l?o("weekly"):"weekly"===l?o("monthly"):"monthly"===l&&o("daily")},children:Object(u.jsx)("img",{src:b,alt:"change timeframe",className:"link"})}),t]})})})},h=c.p+"static/media/image-jeremy.71cd41f1.png",x=(c(46),function(e){var t=e.text,c=e.onClick,s=e.color;return Object(u.jsx)("button",{onClick:c,className:"btn",style:{color:s},children:t})});x.defaultProps={text:""};var O=x,y=function(e){var t=e.daily,c=e.weekly,s=e.monthly,n=e.dailyBtn,a=e.weeklyBtn,i=e.monthlyBtn;return Object(u.jsxs)("div",{className:"profile flex bg-dark",children:[Object(u.jsxs)("div",{className:"profile-upper flex bg-blue",children:[Object(u.jsx)("img",{src:h,alt:"Jeremy"}),Object(u.jsxs)("div",{className:"profile-name flex",children:[Object(u.jsx)("p",{className:"text-light fs-200",children:"Report for"}),Object(u.jsx)("p",{className:"name fs-500 fw-300",children:"Jeremy Robson"})]})]}),Object(u.jsxs)("div",{className:"btn-div flex",children:[Object(u.jsx)(O,{text:"Daily",onClick:t,color:n}),Object(u.jsx)(O,{text:"Weekly",onClick:c,color:a}),Object(u.jsx)(O,{text:"Monthly",onClick:s,color:i})]})]})};var p=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(j.a)(a,2),r=i[0],d=i[1],b=Object(s.useState)("white"),h=Object(j.a)(b,2),x=h[0],O=h[1],p=Object(s.useState)(""),g=Object(j.a)(p,2),k=g[0],v=g[1],w=Object(s.useState)(""),N=Object(j.a)(w,2),B=N[0],C=N[1],S=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("/time-tracking-dashboard/data.json");case 2:t=e.sent,n(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){d(""),O(""),v(""),C("")};return Object(s.useEffect)((function(){S()}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"App container flex",children:[Object(u.jsx)(y,{daily:function(){d("daily"),O("white"),v(""),C("")},weekly:function(){d("weekly"),O(""),v("white"),C("")},monthly:function(){d("monthly"),O(""),v(""),C("white")},dailyBtn:x,weeklyBtn:k,monthlyBtn:B}),c.map((function(e){return Object(u.jsx)(f,{data:e,resetGenTime:J,genTime:r},e.id)}))]})})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.da4779f2.chunk.js.map