import{T as u,p as a}from"./projects-cac1da1c.js";import{g as p,h as d,r as h,o as s,c as l,a as c,F as g,i as _,u as n,n as x,t as v,d as b}from"./index-0b3a5a18.js";const k={class:"flex flex-col gap-6 mb-4"},C=c("h1",{class:"text-4xl text-center font-bold"},"Portfolio",-1),j={class:"grid grid-cols-3 justify-center gap-2 md:grid-cols-5 2xl:grid-cols-8"},y=["onClick"],B={class:"grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 md:gap-12 2xl:grid-cols-3"},D=p({__name:"projects",setup(F){let r=d(a),t=d("");function m(o){if(t.value===o){r.value=a,t.value="";return}t.value=o,r.value=a.filter(i=>i.tags.includes(o))}return console.log(r),console.log("asdf"),console.log(u),(o,i)=>{const f=h("project-card");return s(),l("div",k,[C,c("div",j,[(s(!0),l(g,null,_(n(u),e=>(s(),l("p",{class:x(["p-2 rounded text-center hover:cursor-pointer hover:brightness-125 hover:text-neutral-200 text",{"bg-cyan-600 text-neutral-200":n(t)===e,"bg-neutral-900 text-neutral-200":n(t)!==e}]),onClick:P=>m(e)},v(e),11,y))),256))]),c("div",B,[(s(!0),l(g,null,_(n(r),e=>(s(),b(f,{title:e.title,url:e.url,thumbnail:e.thumbnail,short:e.short,tags:e.tags},null,8,["title","url","thumbnail","short","tags"]))),256))])])}}});export{D as default};