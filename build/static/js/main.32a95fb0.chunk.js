(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,,,,,function(e,n,t){e.exports=t(12)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),l=t.n(r),c=t(3),o=t.n(c),a=(t(10),t(4)),i=t(1);t(11);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var u=new Array(16).fill(0).reduce((function(e,n,t){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(t,!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,Object(i.a)({},t,{id:t,type:(t+1)%2>0?"red":"black"}))}),{}),f=function(e,n){var t=n;return e.forEach((function(e){t.has(e)?t.delete(e):t.add(e)})),t},p=function(e){return 16===e.blockCells.size},d=function(e){var n=e.id,t=e.type,r=e.isOpen,c=e.onClick;return l.a.createElement("div",{className:"Cell ".concat(t," ").concat(r?"open":""),onClick:function(){return c(n)}})},m=function(){var e,n={cells:u,checkCell:null,openedCells:new Set,blockCells:new Set},t=Object(r.useState)(n),c=Object(a.a)(t,2),o=c[0],i=c[1],s=function(){return i(n)},m=o.cells;return l.a.createElement(r.Fragment,null,l.a.createElement("div",{className:"Game"},Object.values(m).map((function(e){return l.a.createElement(d,Object.assign({key:e.id},e,{isOpen:(n=e.id,t=o,t.openedCells.has(n)),onClick:function(e){return!function(e,n){return n.blockCells.has(e)}(e,o)&&function(e,n,t){var r,l,c=n.checkCell,o=n.openedCells,a=n.blockCells,i=n.cells,s=a,u=i[e],p=u.id,d=u.type;if(null!==c)if(c===p)l=f([p],o),r=null;else{var m=i[c],b=m.id;m.type===d?(l=f([p],o),r=null,s=function(e,n){var t=n;return e.forEach((function(e){t.add(e)})),t}([p,b],a)):(l=f([b],o),r=null)}else l=f([p],o),r=p;t({cells:i,checkCell:r,openedCells:l,blockCells:s})}(e,o,i)}}));var n,t}))),l.a.createElement("div",{className:"Actions"},l.a.createElement("button",{onClick:s,disabled:!p(o)},"New game"),l.a.createElement("button",{onClick:s,disabled:(e=o,!(e.blockCells.size>0)||p(o))},"Clear")))},b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.32a95fb0.chunk.js.map