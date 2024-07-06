var p=Object.defineProperty;var d=(s,e,t)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>(d(s,typeof e!="symbol"?e+"":e,t),t);import{i as m,S as f}from"./assets/vendor-0fc460d7.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();class y{constructor(e){l(this,"BASE_URL","https://pixabay.com/api/");this.apiKey=e}getImageList(e){const t=new URLSearchParams({key:this.apiKey,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${this.BASE_URL}?${t}`).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()}).catch(i=>{console.log(i)})}}function h(s){return s.length<=0?(m.error({message:"Sorry, there are no images matching your search query. Please try again!",progressBar:!1,transitionIn:"fadeIn",position:"topRight"}),"no images found"):s.map(t=>`<li class="gallery-item">
            <a class="gallery-link" href="${t.largeImageURL}">
              <img src="${t.webformatURL}" alt="${t.tags}" width="360" height="200">
            </a>
            <ul class="gallery-item-desc">
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Likes</span><span>${t.likes}</span></li>
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Views</span><span>${t.views}</span></li>
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Comments</span><span>${t.comments}</span></li>
              <li class="gallery-item-desc-item"><span class="gallery-item-desc-cap">Downloads</span><span>${t.downloads}</span></li>
            </ul>
          </li>`).join("")}function g(s,e){e.innerHTML=`${s}`}const o=document.querySelector(".gallery-list"),L=document.querySelector(".search-form-input"),b=document.querySelector(".search-form"),c=document.querySelector(".loader"),S="44799740-e5447d6b9b58b3b9f4f848c49",w=new y(S),I=new f(".gallery-list a",{captionDelay:250,captionsData:"alt"});b.addEventListener("submit",s=>{s.preventDefault(),o.innerHTML="";const e=L.value;$(e)?(u(c,!0),w.getImageList(e).then(t=>h(t.hits)).then(t=>g(t,o)).then(()=>{u(c,!1),I.refresh()})):m.error({message:"Search field is empty",progressBar:!1,transitionIn:"fadeIn",position:"topRight"})});function $(s){return s.trim()!==""}function u(s,e=!1){e?s.classList.remove("hidden"):s.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
