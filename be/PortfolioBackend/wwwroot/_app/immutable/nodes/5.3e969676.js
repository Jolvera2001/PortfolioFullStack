import{s as P,n as j}from"../chunks/scheduler.48c2277c.js";import{S as q,i as G,g,h as m,j as v,f,k as _,a as k,A as z,m as D,s as E,n as y,c as T,y as i,o as B,r as F,x as J,u as N,v as O,d as Q,t as R,w as W}from"../chunks/index.5f923553.js";function V(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function K(a,t,s){const e=a.slice();return e[1]=t[s],e}function M(a){let t,s,e=a[1].title+"",l,r,n,o=a[1].description+"",p,h,u,b=a[1].date+"",x,C,w,S=a[1].content+"",$,I;return{c(){t=g("li"),s=g("h1"),l=D(e),r=E(),n=g("h3"),p=D(o),h=E(),u=g("h4"),x=D(b),C=E(),w=g("p"),$=D(S),I=E(),this.h()},l(d){t=m(d,"LI",{});var c=v(t);s=m(c,"H1",{class:!0});var A=v(s);l=y(A,e),A.forEach(f),r=T(c),n=m(c,"H3",{class:!0});var H=v(n);p=y(H,o),H.forEach(f),h=T(c),u=m(c,"H4",{class:!0});var L=v(u);x=y(L,b),L.forEach(f),C=T(c),w=m(c,"P",{class:!0});var U=v(w);$=y(U,S),U.forEach(f),I=T(c),c.forEach(f),this.h()},h(){_(s,"class","text-greenText text-4xl font-bold px-3"),_(n,"class","text-greenText text-3xl font-normal px-3"),_(u,"class","text-greenText text-xl font-light py-2 px-3"),_(w,"class","text-greenText text-xl font-normal py-5 px-8")},m(d,c){k(d,t,c),i(t,s),i(s,l),i(t,r),i(t,n),i(n,p),i(t,h),i(t,u),i(u,x),i(t,C),i(t,w),i(w,$),i(t,I)},p(d,c){c&1&&e!==(e=d[1].title+"")&&B(l,e),c&1&&o!==(o=d[1].description+"")&&B(p,o),c&1&&b!==(b=d[1].date+"")&&B(x,b),c&1&&S!==(S=d[1].content+"")&&B($,S)},d(d){d&&f(t)}}}function X(a){let t,s=V(a[0]),e=[];for(let l=0;l<s.length;l+=1)e[l]=M(K(a,s,l));return{c(){t=g("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=m(l,"UL",{class:!0});var r=v(t);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(f),this.h()},h(){_(t,"class","space-y-10")},m(l,r){k(l,t,r);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null)},p(l,[r]){if(r&1){s=V(l[0]);let n;for(n=0;n<s.length;n+=1){const o=K(l,s,n);e[n]?e[n].p(o,r):(e[n]=M(o),e[n].c(),e[n].m(t,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i:j,o:j,d(l){l&&f(t),z(e,l)}}}function Y(a,t,s){let{blogs:e}=t;return a.$$set=l=>{"blogs"in l&&s(0,e=l.blogs)},[e]}class Z extends q{constructor(t){super(),G(this,t,Y,X,P,{blogs:0})}}const tt=[{title:"Test Blog Update",description:"Dynamically Making Blog Sections!",date:"December 23rd, 2023",content:"After working more with SvelteKit and Tailwind CSS, I'm able to make blogs through jsons!"},{title:"Test Blog Update",description:"Dynamically Making Blog Sections!",date:"December 23rd, 2023",content:"After working more with SvelteKit and Tailwind CSS, I'm able to make blogs through jsons!"}];function et(a){let t,s,e,l,r="Blogs",n,o,p;return o=new Z({props:{blogs:tt}}),{c(){t=g("div"),s=g("div"),e=g("div"),l=g("h1"),l.textContent=r,n=E(),F(o.$$.fragment),this.h()},l(h){t=m(h,"DIV",{class:!0});var u=v(t);s=m(u,"DIV",{class:!0});var b=v(s);e=m(b,"DIV",{class:!0});var x=v(e);l=m(x,"H1",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-1hwag19"&&(l.textContent=r),n=T(x),N(o.$$.fragment,x),x.forEach(f),b.forEach(f),u.forEach(f),this.h()},h(){_(l,"class","text-greenText text-4xl mb-10"),_(e,"class","flex flex-col items-center justify-center md:justify-between p-10"),_(s,"class","container mx-auto"),_(t,"class","w-full bg-pastelGreen")},m(h,u){k(h,t,u),i(t,s),i(s,e),i(e,l),i(e,n),O(o,e,null),p=!0},p:j,i(h){p||(Q(o.$$.fragment,h),p=!0)},o(h){R(o.$$.fragment,h),p=!1},d(h){h&&f(t),W(o)}}}class st extends q{constructor(t){super(),G(this,t,null,et,P,{})}}export{st as component};
