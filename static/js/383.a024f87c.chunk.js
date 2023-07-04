"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[383],{383:function(e,r,t){function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}t.r(r),t.d(r,{default:function(){return m}});var c=t(861),i=t(439),o=t(757),u=t.n(o),p=t(791),l=t(689),f=t(87),d=t(390),v={"movie-details":"MovieDetails_movie-details__3fkHE",poster:"MovieDetails_poster__SYqb7","add-info":"MovieDetails_add-info__1CSPx"},h=t(184);var m=function(){var e,r,t,n,a,o,m=(0,l.UO)().movieId,j=(0,p.useState)(),b=(0,i.Z)(j,2),x=b[0],y=b[1],w=(0,l.TH)();return(0,p.useEffect)((function(){var e=function(){var e=(0,c.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.Pg)(r);case 2:t=e.sent,y(s({},t));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();e(m)}),[m]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.rU,{to:null!==(e=null===(r=w.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",children:(0,h.jsx)("button",{type:"button",children:"<- Go back"})}),x&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:v["movie-details"],children:[(0,h.jsx)("img",{className:v.poster,src:"https://image.tmdb.org/t/p/w500"+x.poster_path,alt:"Movie poster"}),(0,h.jsxs)("div",{className:v["movie-data"],children:[(0,h.jsxs)("h2",{children:[x.title," (",new Date(x.release_date).getFullYear(),")"]}),(0,h.jsxs)("p",{children:["User score: ",Math.round(x.popularity),"%"]}),(0,h.jsx)("h4",{children:"Overview:"}),(0,h.jsx)("p",{children:x.overview}),(0,h.jsx)("h5",{children:"Genres:"}),(0,h.jsx)("p",{children:x.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,h.jsx)("div",{className:v["add-info"],children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(f.rU,{to:"cast",state:{from:null!==(t=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/"},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(f.rU,{to:"reviews",state:{from:null!==(a=null===(o=w.state)||void 0===o?void 0:o.from)&&void 0!==a?a:"/"},children:"Reviews"})})]})}),(0,h.jsx)(l.j3,{})]})]})}},390:function(e,r,t){t.d(r,{Hg:function(){return o},Jh:function(){return v},Pg:function(){return f},XT:function(){return p},_r:function(){return m}});var n=t(861),a=t(757),s=t.n(a),c=t(243),i="8f1902936e413b4882515a6f0fcd6c97";function o(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/trending/movie/day",{params:{api_key:i}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/search/movie",{params:{query:r,api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r),{params:{api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/credits"),{params:{api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function m(e){return j.apply(this,arguments)}function j(){return(j=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("/movie/".concat(r,"/reviews"),{params:{api_key:i}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=383.a024f87c.chunk.js.map