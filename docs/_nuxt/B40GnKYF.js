import{a4 as u,A as c,R as r,l,o as d,k as h,j as i,D as m,a6 as g,S as p,a7 as f}from"./CEoGOofh.js";function x(t){throw u({fatal:!0,statusCode:500,statusMessage:`${t} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`})}const S={setup:()=>x("<NuxtImg>")},w=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const n=r().public.mdc.useNuxtImage?S:"img",e=t,o=l(()=>{var a;if((a=e.src)!=null&&a.startsWith("/")&&!e.src.startsWith("//")){const s=g(p(r().app.baseURL));if(s!=="/"&&!e.src.startsWith(s))return f(s,e.src)}return e.src});return(a,s)=>(d(),h(m(i(n)),{src:i(o),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{w as default};
