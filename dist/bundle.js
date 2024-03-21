(()=>{"use strict";const e=document.querySelector(".themeToggle"),t=document.querySelector("body"),n=document.querySelector(".menuToggle"),o=document.querySelector(".l-mainNav");function a(){o.classList.contains("nav-expanded-vertical")||!1===o.classList.contains("nav-hidden-horizontal")&&document.documentElement.clientWidth>425?n.setAttribute("aria-expanded","true"):n.setAttribute("aria-expanded","false")}const d=document.querySelector(".tasksContainer");let c=document.querySelectorAll(".tab");function s(e){!function(e){c=document.querySelectorAll(".tab");let t=document.querySelector(".is-active");t!==e&&(c.forEach((t=>{e!==t||t.classList.add("is-active")})),null!==t&&t.classList.remove("is-active"))}(e),d.innerHTML="",function(e){const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h3");n.textContent=e,n.classList.add("title-heading"),t.appendChild(n),d.appendChild(t)}(e.childNodes[1].textContent)}class l{constructor(e,t){this.tabName=e,this.tabTasks=t}}const i=[],r=document.querySelector(".tasksContainer"),u=document.querySelector(".projectSection"),p=document.querySelector(".projectSection-addProjectButton"),m=document.querySelector(".projectSection-content");function h(e,t){e=e.charAt(0).toUpperCase()+e.slice(1);const n=document.createElement("li"),o=document.createElement("button"),a=document.createElement("i"),d=document.createElement("span"),c=document.createElement("button"),l=document.createElement("span"),u=document.createElement("i");n.classList.add("project"),o.classList.add("project-button","tab"),a.classList.add("fa-solid","fa-bars"),d.classList.add("project-name"),c.classList.add("project-optionsBtn"),l.classList.add("is-visually-hidden"),u.classList.add("fa-solid","fa-ellipsis-vertical","project-optionsIcon"),o.setAttribute("data-project-index",`${t}`),c.setAttribute("tabIndex","0"),c.setAttribute("aria-controls","options"),d.textContent=e,l.textContent="Options",c.appendChild(u),c.appendChild(l),o.appendChild(a),o.appendChild(d),o.appendChild(c),n.appendChild(o),m.appendChild(n),o.addEventListener("click",(()=>{s(o),function(){const e=document.createElement("button");e.textContent="Add task",e.classList.add("tasksContainer-addTaskBtn"),r.appendChild(e),e.addEventListener("click",(()=>{let t=document.querySelector(".tasksContainer-taskMakerForm");!1!==t.classList.contains("is-hidden")?(console.log(e),console.log(t),t.classList.toggle("is-hidden")):alert("Finish the form you started")}))}(),function(){const e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("label"),a=document.createElement("textArea"),d=document.createElement("label"),c=document.createElement("input");t.textContent="Title:",o.textContent="Details(optional):",d.textContent="Date:",n.classList.add("taskForm-input"),a.classList.add("taskForm-textArea"),c.classList.add("taskForm-input"),n.setAttribute("type","text"),c.setAttribute("type","date"),a.setAttribute("rows","3"),n.setAttribute("placeHolder","What to do?"),a.setAttribute("placeHolder","e.g: How will i do it"),t.appendChild(n),o.appendChild(a),d.appendChild(c);const s=document.createElement("div"),l=document.createElement("button"),i=document.createElement("button");l.classList.add("addButton"),i.classList.add("cancelButton"),l.textContent="Add",i.textContent="Cancel",s.appendChild(l),s.appendChild(i),s.classList.add("buttonContainer"),e.classList.add("tasksContainer-taskMakerForm","is-hidden"),e.appendChild(t),e.appendChild(o),e.appendChild(d),e.appendChild(s),r.insertBefore(e,document.querySelector(".tasksContainer-addTaskBtn")),i.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("is-hidden")}))}()}));const p=document.createElement("ul"),h=document.createElement("li"),y=document.createElement("li"),L=document.createElement("button"),E=document.createElement("button");L.textContent="MODIFY",E.textContent="DELETE",p.classList.add("project-options"),p.setAttribute("id","options"),L.classList.add("project-modifyOptionBtn"),p.classList.toggle("project-options-isHidden"),h.appendChild(L),y.appendChild(E),p.appendChild(h),p.appendChild(y),o.appendChild(p),c.addEventListener("click",(()=>{p.classList.toggle("project-options-isHidden")})),c.addEventListener("blur",(()=>{const e=t=>{p.classList.contains("project-options-isHidden")||L===t.target&&E===t.target||(p.classList.toggle("project-options-isHidden"),document.removeEventListener("click",e))};document.addEventListener("click",e)}));const C=document.createElement("input");C.classList.add("project-modifyInput"),C.setAttribute("aria-label","Enter new project name, text input"),C.value=d.textContent,C.style.display="none";const v=document.createElement("div"),b=document.createElement("button"),k=document.createElement("button");b.textContent="RENAME",k.textContent="CANCEL",v.classList.add("project-modifyButtons"),b.classList.add("addButton"),k.classList.add("cancelButton"),v.appendChild(b),v.appendChild(k),n.appendChild(v),v.style.display="none",o.insertBefore(C,c),L.addEventListener("click",(()=>{c.disabled=!0,C.style.display="block",d.style.display="none",v.style.display="flex",C.value=d.textContent,n.classList.add("project-isModifyState"),o.classList.add("project-button-isModifyState"),C.focus()})),b.addEventListener("click",(t=>{var n,a;e=(e=C.value).charAt(0).toUpperCase()+e.slice(1),t.stopPropagation(),""!==e?(d.style.display="inline-block",d.textContent=e,k.click(),n=e,a=o.getAttribute("data-project-index"),i[a].tabName=n,console.log(i)):alert("The project name cannot be empty")})),k.addEventListener("click",(()=>{d.style.display="inline-block",C.style.display="none",v.style.display="none",n.classList.remove("project-isModifyState"),o.classList.remove("project-button-isModifyState"),c.disabled=!1,o.click()})),E.addEventListener("click",(()=>{!0===confirm("Are you sure you want to delete this project")&&(i.splice(o.getAttribute("data-project-index"),1),m.removeChild(n),function(){console.log("hello gusy");let e=document.querySelectorAll("[data-project-index]");console.log(e);let t=0;e.forEach((e=>{console.log("it does not work"),e.setAttribute("data-project-index",`${t}`),t++}))}(),console.log(i))})),C.addEventListener("keydown",(e=>{"Enter"===e.key?b.click():"Escape"===e.key&&k.click()})),o.click()}e.addEventListener("click",(function(){t.classList.toggle("darkTheme")})),n.addEventListener("click",(function(){document.documentElement.clientWidth<=425&&(o.classList.toggle("nav-expanded-vertical"),o.classList.remove("nav-hidden-horizontal"),a()),document.documentElement.clientWidth>425&&(o.classList.toggle("nav-hidden-horizontal"),o.classList.remove("nav-expanded-vertical"),a())})),p.addEventListener("click",(()=>{if("block"===document.querySelector(".addProjectForm").style.display)return alert("You must finish the previous form"),void document.querySelector(".addProjectForm-input").focus();document.querySelector(".addProjectForm").style.display="block",document.querySelector(".addProjectForm-input").focus()})),c.forEach((e=>{e.addEventListener("click",(()=>{s(e)}))})),window.onload=()=>{"dark"===localStorage.getItem("theme")?t.classList.add("darkTheme"):t.classList.remove("darkTheme"),function(){let e=JSON.parse(localStorage.getItem("Projects"));for(let t=0;t<e.length;t++)i.push(e[t]);for(let e=0;e<i.length;e++)h(i[e].tabName,e)}(),a(),function(){const e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("button"),a=document.createElement("button"),d=document.createElement("form");t.setAttribute("for","projectNameInput"),t.textContent="Enter projects name",n.setAttribute("type","text"),n.setAttribute("placeholder","Project Name"),n.setAttribute("maxlength","20"),n.setAttribute("id","projectNameInput"),e.classList.add("addProjectForm"),t.classList.add("is-visually-hidden"),n.classList.add("addProjectForm-input"),d.classList.add("buttonContainer"),o.classList.add("addButton"),a.classList.add("cancelButton"),o.textContent="ADD",a.textContent="Cancel",e.style.display="none",d.appendChild(o),d.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(d),u.insertBefore(e,p),n.addEventListener("keydown",(e=>{"Enter"===e.key?(e.preventDefault(),o.click()):"Escape"===e.key&&a.click()})),o.addEventListener("click",(t=>{if(t.preventDefault(),""===n.value)return void alert("The project name cannot be empty");h(n.value,function(){const e=document.querySelectorAll("[data-project-index]");let t=!1,n=0;for(;!1===t;)void 0===e[n]?t=!0:n++;return n}());let o=new l(n.value,[]);i.push(o),console.log(i),e.style.display="none",n.value=""})),a.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"}))}(),document.querySelector(".homeBtn").click()},window.addEventListener("beforeunload",(()=>{t.classList.contains("darkTheme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),localStorage.setItem("Projects",JSON.stringify(i))}))})();
//# sourceMappingURL=bundle.js.map