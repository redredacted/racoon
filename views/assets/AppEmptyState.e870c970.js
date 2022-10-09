import{_ as d,o as n,a as l,b as e,k as a,t as v,p as i,i as p,d as u,B as f,I as $}from"./index.98afeb01.js";const g={props:{title:{type:String,required:!0,default:"Alert"}}};const c=t=>(i("data-v-f4635bac"),t=t(),p(),t),y={class:"modal__overlay"},w={class:"modal"},S=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"var(--default-red)"},[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"})],-1)),b=[S],L={class:"check"},k=c(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"var(--default-red)"},[e("path",{fill:"none",d:"M0 0h24v24H0z"}),e("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"})],-1)),B=[k];function z(t,s,o,_,r,m){return n(),l("div",y,[e("div",w,[e("div",{class:"close mobile",onClick:s[0]||(s[0]=h=>t.$emit("close-modal"))},b),e("div",L,[a(t.$slots,"icon",{},void 0,!0)]),e("h6",null,v(o.title),1),a(t.$slots,"content",{},void 0,!0)]),e("div",{class:"close desktop",onClick:s[1]||(s[1]=h=>t.$emit("close-modal"))},B)])}const N=d(g,[["render",z],["__scopeId","data-v-f4635bac"]]),I=u({name:"AppEmptyState",props:{message:{type:String,default:"No data found! They will be displayed once you add them"}},components:{BaseButton:f,Icon:$},methods:{goBack(){this.$router.back()}}}),M="/assets/empty-state.4f959c70.svg";const A=t=>(i("data-v-21ef1b73"),t=t(),p(),t),x={class:"empty-state"},C=A(()=>e("img",{src:M,alt:"empty state"},null,-1)),E=["innerHTML"];function H(t,s,o,_,r,m){return n(),l("div",x,[C,e("div",null,[e("p",{innerHTML:t.message},null,8,E)])])}const q=d(I,[["render",H],["__scopeId","data-v-21ef1b73"]]);export{N as A,q as a};
