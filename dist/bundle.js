(()=>{"use strict";const e=document.querySelector(".themeToggle"),t=document.querySelector(".menuToggle"),n=document.querySelector(".l-mainNav");function c(){n.classList.contains("nav-expanded-vertical")||!1===n.classList.contains("nav-hidden-horizontal")&&document.documentElement.clientWidth>425?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}const d=document.querySelector("main"),o=document.querySelectorAll(".tab"),a=document.querySelector(".projectSection-addProjectButton"),l=document.querySelector(".projectSection-content");e.addEventListener("click",(function(){document.querySelector("body").classList.toggle("darkTheme")})),t.addEventListener("click",(function(){document.documentElement.clientWidth<=425&&(n.classList.toggle("nav-expanded-vertical"),n.classList.remove("nav-hidden-horizontal"),c()),document.documentElement.clientWidth>425&&(n.classList.toggle("nav-hidden-horizontal"),n.classList.remove("nav-expanded-vertical"),c())})),a.addEventListener("click",(function(){document.querySelector(".addProjectForm").style.display="block"}));class s{constructor(e,t){this.tabName=e,this.tabToDos=t}click=()=>{const e=document.querySelector("main"),t=document.createElement("h3");t.textContent=this.tabName,e.appendChild(t)};appendToDo=e=>{this.tabToDos.push(e)}}const i=document.querySelectorAll(".tab"),r=new s(i[0].childNodes[1].textContent,[]),u=new s(i[1].childNodes[1].textContent,[]),m=new s(i[2].childNodes[1].textContent,[]),p=new s(i[3].childNodes[1].textContent,[]),h=[];h.push(r),h.push(u),h.push(m),h.push(p),i.forEach((e=>{e.addEventListener("click",(()=>{var t;t=e,o.forEach((e=>{t!==e?e.classList.remove("active"):e.classList.add("active")})),d.innerHTML="",function(e){const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h3");n.textContent=e,n.classList.add("title-heading"),t.appendChild(n),d.appendChild(t)}(e.childNodes[1].textContent)}))})),window.onload=()=>{c(),function(){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button"),c=document.createElement("button"),d=document.createElement("form");t.setAttribute("placeholder","Project Name"),e.classList.add("addProjectForm"),t.classList.add("addProjectForm-input"),d.classList.add("addProjectForm-buttonContainer"),n.classList.add("addButton"),c.classList.add("cancelButton"),n.textContent="ADD",c.textContent="Cancel",e.style.display="none",d.appendChild(n),d.appendChild(c),e.appendChild(t),e.appendChild(d),l.insertBefore(e,a),n.addEventListener("click",(n=>{n.preventDefault(),""!==t.value?(function(e,t){console.log(e.charAt(0)),e=e.charAt(0).toUpperCase()+e.slice(1);const n=document.createElement("div"),c=document.createElement("i"),d=document.createElement("span"),o=document.createElement("i");c.classList.add("fa-solid","fa-bars"),o.classList.add("fa-solid","fa-ellipsis-vertical"),d.textContent=e,n.appendChild(c),n.appendChild(d),n.appendChild(o),l.insertBefore(n,t)}(t.value,e),e.style.display="none",t.value=""):alert("The field cannot be empty")})),c.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"}))}()}})();
//# sourceMappingURL=bundle.js.map