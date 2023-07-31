"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[575],{575:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(861),a=n(439),c=n(757),i=n.n(c),s=n(689),o=n(87),u=n(256),l=n(311),p=n(184),h=function(e){var t=e.movie,n=t.poster_path,r=t.genres,a=t.original_title,c=t.overview,i=t.vote_average,s=t.release_date,o=Math.round(10*i),u="https://image.tmdb.org/t/p/original/".concat(n),h=s.substring(0,4);return(0,p.jsxs)("div",{className:l.Z.movie,children:[n?(0,p.jsx)("img",{loading:"lazy",src:u,alt:a,width:"350"}):(0,p.jsx)("img",{loading:"lazy",src:"https://cdn.pixabay.com/photo/2019/04/06/06/44/astronaut-4106766_1280.jpg",alt:a,width:"350"}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[a," (",h,")"]}),(0,p.jsxs)("p",{children:["User score: ",o,"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:c}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("ul",{children:r.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)}))})]})]})},v=n(791),d="movieDetails_links__evNkO",f=function(){var e=(0,v.useState)(null),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,s.UO)().movie_id,f=(0,s.s0)(),m=(0,s.TH)(),x=(0,v.useState)("/"),j=(0,a.Z)(x,2),_=j[0],w=j[1];console.log(_);return(0,v.useEffect)((function(){var e,t=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.GM)(l);case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[0,7,10,12]])})));return function(){return e.apply(this,arguments)}}();t(),w(null!==(e=m.state)&&void 0!==e?e:"/")}),[l,m.state]),n&&!Object.keys(n).length?(0,p.jsx)("h2",{children:"Loading..."}):(0,p.jsxs)("div",{children:[(0,p.jsx)("button",{type:"button",onClick:function(){f(_)},children:"Go back"}),n&&(0,p.jsx)(h,{movie:n}),(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsxs)("div",{className:d,children:[(0,p.jsx)(o.rU,{to:"cast",className:d,state:_,children:"Cast"},"".concat(l,"-cast")),(0,p.jsx)(o.rU,{to:"reviews",className:d,state:_,children:"Reviews"},"".concat(l,"-reviews"))]}),(0,p.jsx)(s.j3,{})]})}},256:function(e,t,n){n.d(t,{$_:function(){return l},$m:function(){return v},GM:function(){return p},jV:function(){return h},lc:function(){return u}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="https://api.themoviedb.org/3/",o="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTZiN2ExNTYwNGYwMmExYWNkMTVhNWJlY2JmMjQ4MCIsInN1YiI6IjY0ODNhYTBhOTkyNTljMDBlMmY0NWE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sdbi-2PalUFAI7K7hzIv-hc4p92EU6q_yg6_IJJHjA",u=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"trending/movie/day"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(o)}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"search/movie?query=").concat(t),{headers:{accept:"application/json",Authorization:"Bearer ".concat(o)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(t),{headers:{accept:"application/json",Authorization:"Bearer ".concat(o)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/credits"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(o)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(s,"movie/").concat(t,"/reviews"),{headers:{accept:"application/json",Authorization:"Bearer ".concat(o)}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},311:function(e,t){t.Z={movie:"movie_movie__ALA1z",links:"movie_links__JHv1+",list:"movie_list__wzmQP",card:"movie_card__+UOM5",name:"movie_name__7XM76",character:"movie_character__DJ+Xz"}}}]);
//# sourceMappingURL=575.f6f0e7f9.chunk.js.map