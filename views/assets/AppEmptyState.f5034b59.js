import{_ as d,o as l,c as n,e,D as a,t as h,p as i,k as p,d as u}from"./index.baa18bdd.js";const f={props:{title:{type:String,required:!0,default:"Alert"}}};const c=t=>(i("data-v-f4635bac"),t=t(),p(),t),$={class:"modal__overlay"},g={class:"modal"},y=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"var(--default-red)"},[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"})],-1)),w=[y],S={class:"check"},L=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"var(--default-red)"},[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"})],-1)),z=[L];function M(t,s,o,_,r,m){return l(),n("div",$,[e("div",g,[e("div",{class:"close mobile",onClick:s[0]||(s[0]=v=>t.$emit("close-modal"))},w),e("div",S,[a(t.$slots,"icon",{},void 0,!0)]),e("h6",null,h(o.title),1),a(t.$slots,"content",{},void 0,!0)]),e("div",{class:"close desktop",onClick:s[1]||(s[1]=v=>t.$emit("close-modal"))},z)])}const H=d(f,[["render",M],["__scopeId","data-v-f4635bac"]]),k=u({name:"AppEmptyState",props:{message:{type:String,default:"No data found! They will be displayed once you add them"}}}),A="/assets/empty-state.4f959c70.svg";const I=t=>(i("data-v-d823a80c"),t=t(),p(),t),b={class:"empty-state"},x=I(()=>e("img",{src:A,alt:"empty state"},null,-1)),B=["innerHTML"];function C(t,s,o,_,r,m){return l(),n("div",b,[x,e("div",null,[e("p",{innerHTML:t.message},null,8,B)])])}const T=d(k,[["render",C],["__scopeId","data-v-d823a80c"]]);export{H as A,T as a};
