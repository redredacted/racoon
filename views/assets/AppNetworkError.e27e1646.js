import{d as a,a as c,I as p,_,r as t,o as i,c as d,e as o,f as s,g as l,p as m,k as u}from"./index.baa18bdd.js";const f=a({name:"AppEmptyState",props:{message:{type:String,default:"There is error in your network connection. Please check your connection and try again."}},components:{BaseButton:c,Icon:p},methods:{refreshPage(){window.location.reload()}}}),h="/assets/network-error.3fc7fca8.svg";const k=e=>(m("data-v-0c9b408b"),e=e(),u(),e),g={class:"network__error"},w=k(()=>o("img",{src:h,alt:"empty state"},null,-1)),B=["innerHTML"];function v(e,y,I,b,C,S){const n=t("Icon"),r=t("BaseButton");return i(),d("div",g,[w,o("div",null,[o("p",{innerHTML:e.message},null,8,B)]),s(r,{text:"refresh",class:"refresh__button",onClick:e.refreshPage},{default:l(()=>[s(n,{icon:"mdi:refresh"})]),_:1},8,["onClick"])])}const A=_(f,[["render",v],["__scopeId","data-v-0c9b408b"]]);export{A};
