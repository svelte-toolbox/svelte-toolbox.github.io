import{_ as t,a as n,b as s,c as o,i as r,s as a,d as e,S as f,e as c,t as u,g as i,h,j as l,k as p,l as g,m as v,n as m,y as d,f as b,o as j,U as E}from"./chunk.d24a4e47.js";function k(t,n,s){var o=Object.create(t);return o.post=n[s],o}function x(t){var n,s,o,r,a=t.post.title;return{c:function(){n=c("li"),s=c("a"),o=u(a),this.h()},l:function(t){n=i(t,"LI",{},!1);var r=h(n);s=i(r,"A",{rel:!0,href:!0},!1);var e=h(s);o=l(e,a),e.forEach(p),r.forEach(p),this.h()},h:function(){g(s,"rel","prefetch"),g(s,"href",r="blog/"+t.post.slug)},m:function(t,r){v(t,n,r),m(n,s),m(s,o)},p:function(t,n){t.posts&&a!==(a=n.post.title)&&d(o,a),t.posts&&r!==(r="blog/"+n.post.slug)&&g(s,"href",r)},d:function(t){t&&p(n)}}}function y(t){for(var n,s,o,r,a,e=t.posts,f=[],d=0;d<e.length;d+=1)f[d]=x(k(t,e,d));return{c:function(){n=b(),s=c("h1"),o=u("Recent posts"),r=b(),a=c("ul");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){n=l(t,"\n\n"),s=i(t,"H1",{},!1);var e=h(s);o=l(e,"Recent posts"),e.forEach(p),r=l(t,"\n\n"),a=i(t,"UL",{class:!0},!1);for(var c=h(a),u=0;u<f.length;u+=1)f[u].l(c);c.forEach(p),this.h()},h:function(){document.title="Blog",g(a,"class","svelte-1frg2tf")},m:function(t,e){v(t,n,e),v(t,s,e),m(s,o),v(t,r,e),v(t,a,e);for(var c=0;c<f.length;c+=1)f[c].m(a,null)},p:function(t,n){if(t.posts){e=n.posts;for(var s=0;s<e.length;s+=1){var o=k(n,e,s);f[s]?f[s].p(t,o):(f[s]=x(o),f[s].c(),f[s].m(a,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=e.length}},i:j,o:j,d:function(t){t&&(p(n),p(s),p(r),p(a)),E(f,t)}}}function L(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function R(t,n,s){var o=n.posts;return t.$set=function(t){"posts"in t&&s("posts",o=t.posts)},{posts:o}}var U=function(c){function u(t){var f;return n(this,u),f=s(this,o(u).call(this)),r(e(f),t,R,y,a,["posts"]),f}return t(u,f),u}();export default U;export{L as preload};
//# sourceMappingURL=index.bf7ebb01.js.map
