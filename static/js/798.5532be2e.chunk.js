"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{126:function(r,t,e){e(791);var n=e(689),a=e(87),c=e(184);t.Z=function(r){var t=r.movies,e=(0,n.TH)();return(0,c.jsx)("ul",{children:t.map((function(r){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(r.id),state:{from:e.pathname+e.search},children:r.title})},r.id)}))})}},798:function(r,t,e){e.r(t);var n=e(433),a=e(861),c=e(439),u=e(757),s=e.n(u),o=e(126),i=e(791),p=e(390),f=e(184);t.default=function(){var r=(0,i.useState)([]),t=(0,c.Z)(r,2),e=t[0],u=t[1],l=function(){var r=(0,a.Z)(s().mark((function r(){var t;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,p.Hg)();case 2:t=r.sent,u((0,n.Z)(t));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,i.useEffect)((function(){l()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h2",{children:"Trending today:"}),(0,f.jsx)(o.Z,{movies:e})]})}},390:function(r,t,e){e.d(t,{Hg:function(){return o},Jh:function(){return v},Pg:function(){return l},XT:function(){return p},_r:function(){return m}});var n=e(861),a=e(757),c=e.n(a),u=e(243),s="8f1902936e413b4882515a6f0fcd6c97";function o(){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/trending/movie/day",{params:{api_key:s}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function p(r){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/search/movie",{params:{query:t,api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function l(r){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(t),{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function v(r){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}function m(r){return y.apply(this,arguments)}function y(){return(y=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:r.prev=7,r.t0=r.catch(0),console.error(r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))).apply(this,arguments)}u.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=798.5532be2e.chunk.js.map