"use strict";(self.webpackChunkmememafia=self.webpackChunkmememafia||[]).push([[204],{6728:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(1504);var i=t(5456),a=t(5756),s=t(5864),l=t(9012),c=t(9444),r=t(5124),o=t(1528);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(7624);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:f,unlisted:v},assets:h}=n,{keywords:g,wrapperClassName:x,hide_table_of_contents:p}=f,L=h.image??f.image;return(0,m.jsx)(a.cr,{className:(0,i.c)(x??s.W.wrapper.mdxPages,s.W.page.mdxPage),children:(0,m.jsxs)(l.c,{children:[(0,m.jsx)(a.U7,{title:t,description:u,keywords:g,image:L}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,i.c)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,i.c)("col",!p&&"col--8"),children:[v&&(0,m.jsx)(o.c,{}),(0,m.jsx)("article",{children:(0,m.jsx)(c.c,{children:(0,m.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(r.c,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},5124:(e,n,t)=>{t.d(n,{c:()=>o});t(1504);var i=t(5456),a=t(3088);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(7624);const c="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,i.c)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.c,{...t,linkClassName:c,linkActiveClassName:r})})}},3088:(e,n,t)=>{t.d(n,{c:()=>h});var i=t(1504),a=t(1824);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>c(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function o(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.y)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=o();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),o=r(c,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var m=t(867),u=t(7624);function f(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,u.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.c,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const v=i.memo(f);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const h=(0,a.y)(),g=o??h.tableOfContents.minHeadingLevel,x=m??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(c&&r)return{linkClassName:c,linkActiveClassName:r,minHeadingLevel:g,maxHeadingLevel:x}}),[c,r,g,x])),(0,u.jsx)(v,{toc:p,className:t,linkClassName:c,...f})}},1528:(e,n,t)=>{t.d(n,{c:()=>f});t(1504);var i=t(5456),a=t(4357),s=t(6952),l=t(7624);function c(){return(0,l.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(s.c,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5864),m=t(304);function u(e){let{className:n}=e;return(0,l.jsx)(m.c,{type:"caution",title:(0,l.jsx)(c,{}),className:(0,i.c)(n,d.W.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function f(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(u,{...e})]})}}}]);