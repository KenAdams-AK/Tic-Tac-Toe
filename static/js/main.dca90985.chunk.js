(this["webpackJsonpreact-boilerplate"]=this["webpackJsonpreact-boilerplate"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),l=a.n(r),u=(a(12),a(4)),o=a(1);var i=function(e){var t=e.value,a=e.onClick,n=t?"squares ".concat(t):"squares";return c.a.createElement("button",{className:n,onClick:a},t)};var s=function(e){var t=e.squares,a=e.onClick;return c.a.createElement("div",{className:"PlayField"},t.map((function(e,t){return c.a.createElement(i,{key:t,value:e,onClick:function(){return a(t)}})})))};var m=function(){var e=Object(n.useState)([Array(9).fill(null)]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),i=Object(o.a)(l,2),m=i[0],b=i[1],f=Object(n.useState)(!0),v=Object(o.a)(f,2),E=v[0],O=v[1],j=Object(n.useState)(!1),p=Object(o.a)(j,2),d=p[0],k=p[1],h=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(o.a)(t[a],3),c=n[0],r=n[1],l=n[2];if(e[c]&&e[c]===e[r]&&e[c]===e[l])return e[c]}return null}(a[m]),C=E?"X":"O";return Object(n.useEffect)((function(){m>8&&!h&&k(!0)}),[m,h]),c.a.createElement("div",{className:"Game"},d?c.a.createElement("h2",null,"Draw!"):c.a.createElement("h2",null,h?"Winner: ".concat(h,"!"):"Next Player: ".concat(C)),c.a.createElement(s,{squares:a[m],onClick:function(e){var t=a.slice(0,m+1),n=t[m],c=Object(u.a)(n);h||c[e]||(c[e]=C,r([].concat(Object(u.a)(t),[c])),b(t.length),O(!E))}}),c.a.createElement("button",{className:"restart",onClick:function(){return window.location.reload()}},"Restart"))};var b=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null))};l.a.render(c.a.createElement(b,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.dca90985.chunk.js.map