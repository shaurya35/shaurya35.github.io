(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1654:function(e,t,r){Promise.resolve().then(r.t.bind(r,179,23)),Promise.resolve().then(r.t.bind(r,8663,23)),Promise.resolve().then(r.bind(r,3135)),Promise.resolve().then(r.bind(r,7050))},2929:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var l=r(7255);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,l.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:h,iconNode:u,...d}=e;return(0,l.createElement)("svg",{ref:t,...s,width:o,height:o,stroke:r,strokeWidth:i?24*Number(n)/Number(o):n,className:c("lucide",a),...d},[...u.map(e=>{let[t,r]=e;return(0,l.createElement)(t,r)}),...Array.isArray(h)?h:[h]])}),i=(e,t)=>{let r=(0,l.forwardRef)((r,s)=>{let{className:i,...a}=r;return(0,l.createElement)(n,{ref:s,iconNode:t,className:c("lucide-".concat(o(e)),i),...a})});return r.displayName="".concat(e),r}},7980:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});let l=(0,r(2929).Z)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]])},3135:function(e,t,r){"use strict";r.d(t,{default:function(){return u}});var l=r(251);r(7255);var o=r(2929);let c=(0,o.Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);var s=()=>(0,l.jsx)(c,{size:23});let n=(0,o.Z)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);var i=()=>(0,l.jsx)(n,{size:23}),a=r(7980),h=()=>(0,l.jsx)(a.Z,{size:23}),u=()=>(0,l.jsxs)("footer",{className:"h-[49px] lg:h-[50px] border-white border-t font-fira-code text-gray-custom flex justify-between items-center",children:[(0,l.jsxs)("div",{className:"flex items-center h-full",children:[(0,l.jsx)("div",{className:"pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer",children:"find-me:"}),(0,l.jsx)("div",{className:"pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:text-white-custom",onClick:()=>{window.open("https://twitter.com/_shaurya35","_blank")},children:(0,l.jsx)("button",{children:(0,l.jsx)(s,{})})}),(0,l.jsx)("div",{className:"pr-6 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:text-white-custom",onClick:()=>{window.open("https://www.instagram.com/_shaurya35/","_blank")},children:(0,l.jsx)("button",{children:(0,l.jsx)(i,{})})})]}),(0,l.jsx)("div",{className:"cursor-pointer pl-6 pr-6 lg:border-white lg:border-l h-full flex items-center hover:text-white-custom",onClick:()=>{window.open("https://github.com/shaurya35/","_blank")},children:(0,l.jsx)(h,{})})]})},7050:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var l=r(251),o=r(7255),c=r(6349),s=()=>{let e=(0,c.useRouter)(),[t,r]=(0,o.useState)("");(0,o.useEffect)(()=>{switch(window.location.pathname){case"/":default:r("_home");break;case"/about-me":r("about-me");break;case"/projects":r("projects");break;case"/contact-me":r("contact-me")}},[]);let s=(t,l)=>{r(l),e.push(t)};return(0,l.jsxs)("header",{className:"h-[64px] lg:h-[50px] border-white border-b font-fira-code text-[19px] lg:text-[16px] text-gray-custom flex justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center h-full",children:[(0,l.jsx)("div",{className:"pr-48 pl-6 lg:border-white lg:border-r h-full flex items-center cursor-pointer hover:bg-black-400 hover:text-white-custom",onClick:()=>s("/","_home"),children:(0,l.jsx)("button",{className:"w-full h-full",children:"shaurya-jha"})}),(0,l.jsx)("div",{className:"hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom",children:(0,l.jsx)("button",{className:"w-full h-full px-6 hover:text-white ".concat("_home"===t?"border-b-2 border-yellow-exclusive text-white-custom":""),onClick:()=>s("/","_home"),children:"_home"})}),(0,l.jsx)("div",{className:"hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom",children:(0,l.jsx)("button",{className:"w-full h-full px-6 hover:text-white ".concat("about-me"===t?"border-b-2 border-yellow-exclusive text-white-custom":""),onClick:()=>s("/about-me","about-me"),children:"_about-me"})}),(0,l.jsx)("div",{className:"hidden lg:flex lg:border-white lg:border-r h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom",children:(0,l.jsx)("button",{className:"w-full h-full px-6 hover:text-white ".concat("projects"===t?"border-b-2 border-yellow-exclusive text-white-custom":""),onClick:()=>s("/projects","projects"),children:"_projects"})})]}),(0,l.jsx)("div",{className:"hidden lg:flex lg:border-white lg:border-l h-full items-center cursor-pointer hover:bg-black-400 hover:text-white-custom",children:(0,l.jsx)("button",{className:"w-full h-full px-6 hover:text-white ".concat("contact-me"===t?"border-b-2 border-yellow-exclusive text-white-custom":""),onClick:()=>s("/contact-me","contact-me"),children:"_contact-me"})})]})}},8663:function(){},179:function(e){e.exports={style:{fontFamily:"'__Inter_6c26b6', '__Inter_Fallback_6c26b6'",fontStyle:"normal"},className:"__className_6c26b6"}}},function(e){e.O(0,[76,223,429,744],function(){return e(e.s=1654)}),_N_E=e.O()}]);