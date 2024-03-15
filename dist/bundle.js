(()=>{"use strict";const e=document.querySelector(".themeToggle"),t=document.querySelector(".menuToggle"),n=document.querySelector(".l-mainNav");function c(){n.classList.contains("nav-expanded-vertical")||!1===n.classList.contains("nav-hidden-horizontal")&&document.documentElement.clientWidth>425?t.setAttribute("aria-expanded","true"):t.setAttribute("aria-expanded","false")}const o=document.querySelector("main"),d=document.querySelectorAll(".tab");function a(e){d.forEach((t=>{e!==t?t.classList.remove("active"):t.classList.add("active")}))}const s=document.querySelector(".projectSection-addProjectButton"),i=document.querySelector(".projectSection-content");function l(e){document.querySelectorAll(".projectBtn").forEach((t=>{t!==e?t.classList.remove("active"):t.classList.add("active")}))}e.addEventListener("click",(function(){document.querySelector("body").classList.toggle("darkTheme")})),t.addEventListener("click",(function(){document.documentElement.clientWidth<=425&&(n.classList.toggle("nav-expanded-vertical"),n.classList.remove("nav-hidden-horizontal"),c()),document.documentElement.clientWidth>425&&(n.classList.toggle("nav-hidden-horizontal"),n.classList.remove("nav-expanded-vertical"),c())})),s.addEventListener("click",(()=>{if("block"===document.querySelector(".addProjectForm").style.display)return alert("You must finish the previous form"),void document.querySelector(".addProjectForm-input").focus();document.querySelector(".addProjectForm").style.display="block",document.querySelector(".addProjectForm-input").focus()}));class r{constructor(e,t){this.tabName=e,this.tabToDos=t}click=()=>{const e=document.querySelector("main"),t=document.createElement("h3");t.textContent=this.tabName,e.appendChild(t)};appendToDo=e=>{this.tabToDos.push(e)}}const u=document.querySelectorAll(".tab"),m=new r(u[0].childNodes[1].textContent,[]),p=new r(u[1].childNodes[1].textContent,[]),h=new r(u[2].childNodes[1].textContent,[]),L=new r(u[3].childNodes[1].textContent,[]),E=[];E.push(m),E.push(p),E.push(h),E.push(L),u.forEach((e=>{e.addEventListener("click",(()=>{l("none"),a(e),o.innerHTML="",function(e){const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h3");n.textContent=e,n.classList.add("title-heading"),t.appendChild(n),o.appendChild(t)}(e.childNodes[1].textContent)}))})),window.onload=()=>{c(),function(){const e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("button"),c=document.createElement("button"),o=document.createElement("form");t.setAttribute("placeholder","Project Name"),t.setAttribute("maxlength","20"),e.classList.add("addProjectForm"),t.classList.add("addProjectForm-input"),o.classList.add("addProjectForm-buttonContainer"),n.classList.add("addButton"),c.classList.add("cancelButton"),n.textContent="ADD",c.textContent="Cancel",e.style.display="none",o.appendChild(n),o.appendChild(c),e.appendChild(t),e.appendChild(o),i.appendChild(e),t.addEventListener("keydown",(e=>{"Enter"===e.key&&(e.preventDefault(),n.click()),"Escape"===e.key&&c.click()})),n.addEventListener("click",(n=>{n.preventDefault(),""!==t.value?(function(e,t){e=e.charAt(0).toUpperCase()+e.slice(1);const n=document.createElement("li"),c=document.createElement("button"),o=document.createElement("i"),d=document.createElement("span"),s=document.createElement("button"),r=document.createElement("i");c.classList.add("projectBtn"),o.classList.add("fa-solid","fa-bars"),d.classList.add("project-name"),s.classList.add("options"),r.classList.add("fa-solid","fa-ellipsis-vertical","project-optionsIcon"),s.setAttribute("tabIndex","0"),d.textContent=e,s.appendChild(r),c.appendChild(o),c.appendChild(d),c.appendChild(s),n.appendChild(c),i.insertBefore(n,t);const u=document.createElement("ul"),m=document.createElement("li"),p=document.createElement("li"),h=document.createElement("button"),L=document.createElement("button");h.textContent="MODIFY",L.textContent="DELETE",u.classList.add("project-options"),h.classList.add("project-modifyOptionBtn"),u.classList.toggle("project-options-hidden"),m.appendChild(h),p.appendChild(L),u.appendChild(m),u.appendChild(p),c.appendChild(u),c.addEventListener("click",(()=>{l(c),a("none")})),s.addEventListener("click",(e=>{u.classList.toggle("project-options-hidden")})),s.addEventListener("blur",(()=>{const e=t=>{u.classList.contains("project-options-hidden")||h===t.target&&L===t.target||(u.classList.toggle("project-options-hidden"),document.removeEventListener("click",e))};document.addEventListener("click",e)})),h.addEventListener("click",(()=>{const e=document.createElement("input");e.classList.add("project-modifyInput"),e.value=d.textContent,d.style.display="none",c.insertBefore(e,s),e.focus()})),c.click()}(t.value,e),e.style.display="none",t.value=""):alert("The field cannot be empty")})),c.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"}))}()}})();
//# sourceMappingURL=bundle.js.map