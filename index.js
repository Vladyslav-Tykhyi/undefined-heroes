import{A as S}from"./assets/vendor-CTqzIL4Y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const h=document.querySelector(".menu-button"),i=document.querySelector(".mobile-menu"),p=document.querySelector(".mobile-close-btn"),v=document.querySelectorAll(".mobile-menu-link"),y=document.querySelector(".mobile-order-button"),l=document.querySelector(".desktop-menu-wrapper"),L=document.querySelectorAll(".desktop-menu-link"),g=document.querySelector(".menu-link");h&&i&&p&&(h.addEventListener("click",()=>{i.classList.add("is-open"),document.body.style.overflow="hidden"}),p.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow="auto"}));v.length>0&&v.forEach(e=>{e.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow="auto"})});y&&y.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow="auto"});g&&l&&g.addEventListener("click",e=>{e.preventDefault(),l.classList.toggle("is-open")});L.length>0&&L.forEach(e=>{e.addEventListener("click",()=>{l.classList.remove("is-open")})});document.addEventListener("click",e=>{const t=e.target;!l.contains(t)&&!g.contains(t)&&l.classList.remove("is-open")});const D="/undefined-heroes/assets/mb-bg-D3sKZldN.png",E="/undefined-heroes/assets/mb-blue-hjH4DOEH.png",q="/undefined-heroes/assets/mb-dark-green-CRRlWWWR.png",M="/undefined-heroes/assets/mb-orange-DtaxNtsR.png",R="/undefined-heroes/assets/mb-green-Dodt8Z5t.png",T="/undefined-heroes/assets/mb-warm-red-i2AUe1__.png",A="/undefined-heroes/assets/tab-bg-rXHfUgUr.png",I="/undefined-heroes/assets/tab-blue-CCmYUp_V.png",C="/undefined-heroes/assets/tab-dark-green-CVwRIcZD.png",G="/undefined-heroes/assets/tab-orange-DlyG3ZGb.png",O="/undefined-heroes/assets/tab-green-BJMs_COn.png",P="/undefined-heroes/assets/tab-warm-red-BuFkPbDP.png",H="/undefined-heroes/assets/bg-qHZq_nld.png",N="/undefined-heroes/assets/blue-Bw8PtQ4b.png",W="/undefined-heroes/assets/dark-green-DJn4xxhn.png",_="/undefined-heroes/assets/orange-DWi5eOHR.png",k="/undefined-heroes/assets/bg-green@2x-C_hu23Ko.png",K="/undefined-heroes/assets/warm-red-Cka4zWKT.png",j="/undefined-heroes/assets/mb-bg@2x-DXWeRJb2.png",z="/undefined-heroes/assets/mb-blue@2x-4yrGlLvk.png",J="/undefined-heroes/assets/mb-dark-green@2x-Dodd789s.png",Q="/undefined-heroes/assets/mb-orange@2x-Dt0sT1vY.png",U="/undefined-heroes/assets/mb-green@2x-CjuL7znh.png",Y="/undefined-heroes/assets/mb-warm-red@2x-Dhbd09sV.png",Z="/undefined-heroes/assets/tab-bg@2x-BQtbqcAU.png",X="/undefined-heroes/assets/tab-blue@2x-DL7wWMo3.png",V="/undefined-heroes/assets/tab-dark-green@2x-BwB8G5XQ.png",$="/undefined-heroes/assets/tab-orange@2x-CqpyfoQ-.png",F="/undefined-heroes/assets/tab-green@2x-D5GCzyA2.png",ee="/undefined-heroes/assets/tab-warm-red@2x-gqfTcbDe.png",se="/undefined-heroes/assets/bg@2x-uwxv7Y4B.png",te="/undefined-heroes/assets/blue@2x-B10l4mbr.png",ne="/undefined-heroes/assets/dark-green@2x-BPlSIsS1.png",oe="/undefined-heroes/assets/orange@2x-D4Lte7Qw.png",re="/undefined-heroes/assets/warm-red@2x-Cu1ErX_5.png",ae="/undefined-heroes/assets/modal-blue-ByfCpOhh.png",de="/undefined-heroes/assets/modal-blue@2x-BY-KatP-.png",ie="/undefined-heroes/assets/modal-dark-green-2c4kuscj.png",le="/undefined-heroes/assets/modal-dark-green@2x-BJK-qax8.png",ce="/undefined-heroes/assets/modal-green-B2G0oJAD.png",ue="/undefined-heroes/assets/modal-green@2x-KYKnvWdR.png",ge="/undefined-heroes/assets/modal-orange-v2Ggz8dI.png",me="/undefined-heroes/assets/modal-orange@2x-BNEDTDwP.png",be="/undefined-heroes/assets/modal-warm-red-CzWgM4hQ.png",fe="/undefined-heroes/assets/modal-warm-red@2x-D_l8xrNk.png",he="/undefined-heroes/assets/modal-bg-BYlwCsE8.png",pe="/undefined-heroes/assets/modal-bg@2x-DZyM5NBN.png",ve=["linear-gradient(270deg, #1c1d20 49.68%, #69292d 67.73%, #ed3b44 100%)","linear-gradient(270deg, #1c1d20 49.68%, #001958 67.73%, #0041e8 100%)","linear-gradient(270deg, #1c1d20 49.68%, #596808 67.73%, rgba(198, 227, 39, 0.76) 100%)","linear-gradient(270deg, #1c1d20 49.68%, #9f3626 67.73%, #e6533c 100%)","linear-gradient(270deg, #1c1d20 49.68%, #ac5300 67.73%, #ff7f08 100%)","linear-gradient(270deg, #1c1d20 49.68%, #ac5300 67.73%, #ff7f08 100%, #ff7f08 100%)"],ye=[D,E,q,M,R,T],Le=[A,I,C,G,O,P],Be=[H,N,W,_,k,K],xe=[j,z,J,Q,U,Y],ke=[Z,X,V,$,F,ee],we=[se,te,ne,oe,k,re],Se=[he,ae,ie,ge,ce,be],De=[pe,de,le,me,ue,fe];function Ee(){const t=window.devicePixelRatio>1?De:Se,n=Math.floor(Math.random()*t.length),s=t[n],o=document.querySelector(".mobile-menu");return o.style.backgroundImage=`url(${s})`,n}function B(e){const t=document.getElementById("hero"),n=window.innerWidth,s=window.devicePixelRatio>=2;let o,r;n<768?(o=ye,r=xe):n<1440?(o=Le,r=ke):(o=Be,r=we),t.style.background=ve[e],t.style.backgroundImage=`url(${s?r[e]:o[e]})`,t.style.backgroundPosition="left",t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="contain"}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".hero-item-link");document.getElementById("hero");let t=0,n;function s(){e.forEach(a=>a.classList.remove("hover")),e[t].classList.add("hover"),B(t),t=(t+1)%e.length}function o(){n=setInterval(()=>{s();const a=Ee();B(a)},5e3)}function r(){clearInterval(n),e.forEach(a=>a.classList.remove("hover"))}e.forEach(a=>{a.addEventListener("mouseover",()=>{r(),a.classList.add("hover")}),a.addEventListener("mouseout",()=>{a.classList.remove("hover"),o()})}),s(),o()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".btn-prev"),t=document.querySelector(".btn-next"),n=document.querySelectorAll(".li-cards");let s=0,o=!1;const r=()=>{const b=e.querySelector(".svg-icon-scrool"),f=t.querySelector(".svg-icon-scrool");e.classList.remove("active"),t.classList.remove("active"),s===0?(e.disabled=!0,e.style.border="1px solid rgba(250, 250, 250, 0.2)",b.style.stroke="#3b3b3b"):(e.disabled=!1,e.style.border="1px solid rgba(250, 250, 250, 0.5)",b.style.stroke="",e.classList.add("active")),s===n.length-1?(t.disabled=!0,t.style.border="1px solid rgba(250, 250, 250, 0.2)",f.style.stroke="#3b3b3b"):(t.disabled=!1,t.style.border="1px solid rgba(250, 250, 250, 0.5)",f.style.stroke="",t.classList.add("active"))},a=()=>{o||s>=n.length-1||(o=!0,n[s].classList.add("slide-out-left"),n[s].classList.remove("active"),setTimeout(()=>{n[s].classList.add("visually-hidden"),n[s].classList.remove("slide-out-left"),s++,n[s].classList.remove("visually-hidden"),n[s].classList.add("active","slide-in-right"),setTimeout(()=>{n[s].classList.remove("slide-in-right"),o=!1,r()},600)},600))},w=()=>{o||s<=0||(o=!0,n[s].classList.add("slide-out-right"),n[s].classList.remove("active"),setTimeout(()=>{n[s].classList.add("visually-hidden"),n[s].classList.remove("slide-out-right"),s--,n[s].classList.remove("visually-hidden"),n[s].classList.add("active","slide-in-left"),setTimeout(()=>{n[s].classList.remove("slide-in-left"),o=!1,r()},600)},600))};t.addEventListener("click",a),e.addEventListener("click",w),r()});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".li-cards");let e=0;function t(){const n=document.querySelector(".li-cards.active");if(n){const s=n.querySelectorAll(".li-tech-list");s.forEach(o=>o.classList.remove("active")),s[e].classList.add("active"),e=(e+1)%s.length,setTimeout(t,2500)}}t()});new S("#faq-accordion",{duration:600,showOne:!0,showMultiple:!0,collapse:!0});const qe=document.querySelectorAll(".accordion-header");qe.forEach(e=>{e.addEventListener("click",n=>{x(e)}),e.querySelector("svg").addEventListener("click",n=>{n.stopPropagation(),x(e)})});function x(e){const t=e.nextElementSibling;document.querySelectorAll(".accordion-body").forEach(n=>{if(n!==t){console.log(t),n.classList.remove("visible");const s=n.previousElementSibling;s.querySelector("svg").style.transform="rotate(0deg)",s.querySelector("svg").style.transitionDuration="500ms"}}),t.classList.contains("visible")?(t.classList.remove("visible"),e.querySelector("svg").style.transform="rotate(0deg)",e.querySelector("svg").style.transitionDuration="500ms"):(e.querySelector("svg").style.transform="rotate(180deg)",e.querySelector("svg").style.transitionDuration="500ms",setTimeout(()=>{t.classList.add("visible")},250))}console.log(17);const Me="https://portfolio-js.b.goit.study/api",Re=document.querySelector(".form"),Te=document.querySelector(".modal-title"),Ae=document.querySelector(".modal-text"),Ie=document.querySelector(".footer-form-button"),d=document.getElementById("email"),c=document.getElementById("comments"),u=document.querySelector(".backdrop"),Ce=document.querySelector(".modal-close-btn"),Ge=document.querySelector(".succes"),Oe=document.querySelector(".invalid");d.addEventListener("input",()=>{d.value.length>30&&(d.value=d.value.substring(0,30)+"...")});c.addEventListener("input",()=>{c.value.length>30&&(c.value=c.value.substring(0,30)+"...")});Ce.addEventListener("click",m);function m(){u.classList.remove("is-open")}u.addEventListener("click",function(e){e.target===u&&m()});window.onkeydown=function(e){e.key==="Escape"&&m()};Re.addEventListener("submit",Pe);function Pe(e){e.preventDefault();const{email:t,comments:n}=e.target.elements;console.log(t.value,n.value),Ie.addEventListener("click",()=>{const s=new RegExp(d.getAttribute("pattern")),o=d.value;s.test(o)?(console.log("Sucсes"),d.style.borderBottom="1px solid #3cbc81",Ge.classList.remove("succes-is-hidden")):(console.log("Invalid"),Oe.classList.remove("invalid-is-hidden"))}),fetch(`${Me}/requests`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t.value,comment:n.value})}).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()}).then(function(s){u.classList.add("is-open"),Te.innerHTML=s.title,Ae.innerHTML=s.message,console.log(s.title),console.log(s.message)}).catch(s=>console.log(s.message))}
//# sourceMappingURL=index.js.map
