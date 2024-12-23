import{A as S}from"./assets/vendor-CTqzIL4Y.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const f=document.querySelector(".menu-button"),a=document.querySelector(".mobile-menu"),v=document.querySelector(".mobile-close-btn"),h=document.querySelectorAll(".mobile-menu-link"),p=document.querySelector(".mobile-order-button"),c=document.querySelector(".desktop-menu-wrapper"),y=document.querySelector(".menu-link");f&&a&&v&&(f.addEventListener("click",()=>{a.classList.add("is-open"),document.body.style.overflow="hidden"}),v.addEventListener("click",()=>{a.classList.remove("is-open"),document.body.style.overflow="auto"}));h.length>0&&h.forEach(t=>{t.addEventListener("click",()=>{a.classList.remove("is-open"),document.body.style.overflow="auto"})});p&&p.addEventListener("click",()=>{a.classList.remove("is-open"),document.body.style.overflow="auto"});y&&c&&y.addEventListener("click",t=>{t.preventDefault(),getComputedStyle(c).display==="none"?c.style.display="block":c.style.display="none"});const w="/undefined-heroes/assets/mb-bg-D3sKZldN.png",q="/undefined-heroes/assets/mb-blue-hjH4DOEH.png",E="/undefined-heroes/assets/mb-dark-green-CRRlWWWR.png",D="/undefined-heroes/assets/mb-orange-DtaxNtsR.png",M="/undefined-heroes/assets/mb-green-Dodt8Z5t.png",T="/undefined-heroes/assets/mb-warm-red-i2AUe1__.png",A="/undefined-heroes/assets/tab-bg-rXHfUgUr.png",R="/undefined-heroes/assets/tab-blue-CCmYUp_V.png",C="/undefined-heroes/assets/tab-dark-green-CVwRIcZD.png",I="/undefined-heroes/assets/tab-orange-DlyG3ZGb.png",O="/undefined-heroes/assets/tab-green-BJMs_COn.png",P="/undefined-heroes/assets/tab-warm-red-BuFkPbDP.png",H="/undefined-heroes/assets/bg-qHZq_nld.png",G="/undefined-heroes/assets/blue-Bw8PtQ4b.png",N="/undefined-heroes/assets/dark-green-DJn4xxhn.png",W="/undefined-heroes/assets/orange-DWi5eOHR.png",x="/undefined-heroes/assets/bg-green@2x-C_hu23Ko.png",_="/undefined-heroes/assets/warm-red-Cka4zWKT.png",U="/undefined-heroes/assets/mb-bg@2x-DXWeRJb2.png",j="/undefined-heroes/assets/mb-blue@2x-4yrGlLvk.png",Q="/undefined-heroes/assets/mb-dark-green@2x-Dodd789s.png",Z="/undefined-heroes/assets/mb-orange@2x-Dt0sT1vY.png",z="/undefined-heroes/assets/mb-green@2x-CjuL7znh.png",J="/undefined-heroes/assets/mb-warm-red@2x-Dhbd09sV.png",K="/undefined-heroes/assets/tab-bg@2x-BQtbqcAU.png",X="/undefined-heroes/assets/tab-blue@2x-DL7wWMo3.png",V="/undefined-heroes/assets/tab-dark-green@2x-BwB8G5XQ.png",Y="/undefined-heroes/assets/tab-orange@2x-CqpyfoQ-.png",F="/undefined-heroes/assets/tab-green@2x-D5GCzyA2.png",$="/undefined-heroes/assets/tab-warm-red@2x-gqfTcbDe.png",ee="/undefined-heroes/assets/bg@2x-uwxv7Y4B.png",te="/undefined-heroes/assets/blue@2x-B10l4mbr.png",se="/undefined-heroes/assets/dark-green@2x-BPlSIsS1.png",ne="/undefined-heroes/assets/orange@2x-D4Lte7Qw.png",oe="/undefined-heroes/assets/warm-red@2x-Cu1ErX_5.png",re=["linear-gradient(270deg, #1c1d20 49.68%, #69292d 67.73%, #ed3b44 100%)","linear-gradient(270deg, #1c1d20 49.68%, #001958 67.73%, #0041e8 100%)","linear-gradient(270deg, #1c1d20 49.68%, #596808 67.73%, rgba(198, 227, 39, 0.76) 100%)","linear-gradient(270deg, #1c1d20 49.68%, #9f3626 67.73%, #e6533c 100%)","linear-gradient(270deg, #1c1d20 49.68%, #ac5300 67.73%, #ff7f08 100%)","linear-gradient(270deg, #1c1d20 49.68%, #ac5300 67.73%, #ff7f08 100%, #ff7f08 100%)"],ie=[w,q,E,D,M,T],de=[A,R,C,I,O,P],ae=[H,G,N,W,x,_],ce=[U,j,Q,Z,z,J],le=[K,X,V,Y,F,$],ue=[ee,te,se,ne,x,oe];function L(t){const n=document.getElementById("hero"),s=window.innerWidth,e=window.devicePixelRatio>=2;let o,r;s<768?(o=ie,r=ce):s<1440?(o=de,r=le):(o=ae,r=ue),n.style.background=re[t],n.style.backgroundImage=`url(${e?r[t]:o[t]})`,n.style.backgroundPosition="left",n.style.backgroundRepeat="no-repeat",n.style.backgroundSize="contain"}document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".hero-item-link");document.getElementById("hero");let n=0,s;function e(){t.forEach(i=>i.classList.remove("hover")),t[n].classList.add("hover"),L(n),n=(n+1)%t.length}L(0);function o(){s=setInterval(e,2e3)}function r(){clearInterval(s),t.forEach(i=>i.classList.remove("hover"))}t.forEach(i=>{i.addEventListener("mouseover",()=>{r(),i.classList.add("hover")}),i.addEventListener("mouseout",()=>{i.classList.remove("hover"),o()})}),e(),o()});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".btn-prev"),n=document.querySelector(".btn-next"),s=document.querySelectorAll(".li-cards");let e=0,o=!1;const r=()=>{const m=t.querySelector(".svg-icon-scrool"),b=n.querySelector(".svg-icon-scrool");t.classList.remove("active"),n.classList.remove("active"),e===0?(t.disabled=!0,t.style.border="1px solid rgba(250, 250, 250, 0.2)",m.style.stroke="#3b3b3b"):(t.disabled=!1,t.style.border="1px solid rgba(250, 250, 250, 0.5)",m.style.stroke="",t.classList.add("active")),e===s.length-1?(n.disabled=!0,n.style.border="1px solid rgba(250, 250, 250, 0.2)",b.style.stroke="#3b3b3b"):(n.disabled=!1,n.style.border="1px solid rgba(250, 250, 250, 0.5)",b.style.stroke="",n.classList.add("active"))},i=()=>{o||e>=s.length-1||(o=!0,s[e].classList.add("slide-out-left"),s[e].classList.remove("active"),setTimeout(()=>{s[e].classList.add("visually-hidden"),s[e].classList.remove("slide-out-left"),e++,s[e].classList.remove("visually-hidden"),s[e].classList.add("active","slide-in-right"),setTimeout(()=>{s[e].classList.remove("slide-in-right"),o=!1,r()},600)},600))},k=()=>{o||e<=0||(o=!0,s[e].classList.add("slide-out-right"),s[e].classList.remove("active"),setTimeout(()=>{s[e].classList.add("visually-hidden"),s[e].classList.remove("slide-out-right"),e--,s[e].classList.remove("visually-hidden"),s[e].classList.add("active","slide-in-left"),setTimeout(()=>{s[e].classList.remove("slide-in-left"),o=!1,r()},600)},600))};n.addEventListener("click",i),t.addEventListener("click",k),r()});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".li-cards");let t=0;function n(){const s=document.querySelector(".li-cards.active");if(s){const e=s.querySelectorAll(".li-tech-list");e.forEach(o=>o.classList.remove("active")),e[t].classList.add("active"),t=(t+1)%e.length,setTimeout(n,2500)}}n()});new S("#faq-accordion",{duration:600,showOne:!0,showMultiple:!0,collapse:!0});const ge=document.querySelectorAll(".accordion-header");ge.forEach(t=>{t.addEventListener("click",s=>{B(t)}),t.querySelector("svg").addEventListener("click",s=>{s.stopPropagation(),B(t)})});function B(t){const n=t.nextElementSibling;document.querySelectorAll(".accordion-body").forEach(s=>{if(s!==n){console.log(n),s.classList.remove("visible");const e=s.previousElementSibling;e.querySelector("svg").style.transform="rotate(0deg)",e.querySelector("svg").style.transitionDuration="500ms"}}),n.classList.contains("visible")?(n.classList.remove("visible"),t.querySelector("svg").style.transform="rotate(0deg)",t.querySelector("svg").style.transitionDuration="500ms"):(t.querySelector("svg").style.transform="rotate(180deg)",t.querySelector("svg").style.transitionDuration="500ms",setTimeout(()=>{n.classList.add("visible")},250))}console.log(17);const me="https://portfolio-js.b.goit.study/api",be=document.querySelector(".form"),fe=document.querySelector(".modal-title"),ve=document.querySelector(".modal-text"),he=document.querySelector(".footer-form-button"),d=document.getElementById("email"),l=document.getElementById("comments"),u=document.querySelector(".backdrop"),pe=document.querySelector(".modal-close-btn"),ye=document.querySelector(".succes"),Le=document.querySelector(".invalid");d.addEventListener("input",()=>{d.value.length>30&&(d.value=d.value.substring(0,30)+"...")});l.addEventListener("input",()=>{l.value.length>30&&(l.value=l.value.substring(0,30)+"...")});pe.addEventListener("click",g);function g(){u.classList.remove("is-open")}u.addEventListener("click",function(t){t.target===u&&g()});window.onkeydown=function(t){t.key==="Escape"&&g()};be.addEventListener("submit",Be);function Be(t){t.preventDefault();const{email:n,comments:s}=t.target.elements;console.log(n.value,s.value),he.addEventListener("click",()=>{const e=new RegExp(d.getAttribute("pattern")),o=d.value;e.test(o)?(console.log("Sucсes"),d.style.borderBottom="1px solid #3cbc81",ye.classList.remove("succes-is-hidden")):(console.log("Invalid"),Le.classList.remove("invalid-is-hidden"))}),fetch(`${me}/requests`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.value,comment:s.value})}).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}).then(function(e){u.classList.add("is-open"),fe.innerHTML=e.title,ve.innerHTML=e.message,console.log(e.title),console.log(e.message)}).catch(e=>console.log(e.message))}
//# sourceMappingURL=index.js.map
