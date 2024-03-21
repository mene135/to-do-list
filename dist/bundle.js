(()=>{"use strict";const e=document.querySelector(".themeToggle"),t=document.querySelector("body"),n=document.querySelector(".menuToggle"),o=document.querySelector(".l-mainNav");function a(){o.classList.contains("nav-expanded-vertical")||!1===o.classList.contains("nav-hidden-horizontal")&&document.documentElement.clientWidth>425?n.setAttribute("aria-expanded","true"):n.setAttribute("aria-expanded","false")}const d=document.querySelector(".tasksContainer");let s=document.querySelectorAll(".tab");function c(e){!function(e){s=document.querySelectorAll(".tab");let t=document.querySelector(".is-active");t!==e&&(s.forEach((t=>{e!==t||t.classList.add("is-active")})),null!==t&&t.classList.remove("is-active"))}(e),d.innerHTML="",function(e){const t=document.createElement("div");t.classList.add("title");const n=document.createElement("h3");n.textContent=e,n.classList.add("title-heading"),t.appendChild(n),d.appendChild(t)}(e.childNodes[1].textContent)}class l{constructor(e,t){this.tabName=e,this.tabTasks=t}}const i=[],r=document.querySelector(".tasksContainer");class u{constructor(e,t,n,o,a){this.title=e,this.details=t,this.date=n,this.important=o,this.checked=a}}const p=document.querySelector(".projectSection"),m=document.querySelector(".projectSection-addProjectButton"),h=document.querySelector(".projectSection-content");function y(e,t){e=e.charAt(0).toUpperCase()+e.slice(1);const n=document.createElement("li"),o=document.createElement("button"),a=document.createElement("i"),d=document.createElement("span"),s=document.createElement("button"),l=document.createElement("span"),p=document.createElement("i");n.classList.add("project"),o.classList.add("project-button","tab"),a.classList.add("fa-solid","fa-bars"),d.classList.add("project-name"),s.classList.add("project-optionsBtn"),l.classList.add("is-visually-hidden"),p.classList.add("fa-solid","fa-ellipsis-vertical","project-optionsIcon"),o.setAttribute("data-project-index",`${t}`),s.setAttribute("tabIndex","0"),s.setAttribute("aria-controls","options"),d.textContent=e,l.textContent="Options",s.appendChild(p),s.appendChild(l),o.appendChild(a),o.appendChild(d),o.appendChild(s),n.appendChild(o),h.appendChild(n),o.addEventListener("click",(()=>{c(o),function(){const e=document.createElement("button");e.textContent="Add task",e.classList.add("tasksContainer-addTaskBtn"),r.appendChild(e),e.addEventListener("click",(()=>{let t=document.querySelector(".tasksContainer-taskMakerForm");!1!==t.classList.contains("is-hidden")?(console.log(e),console.log(t),t.classList.toggle("is-hidden")):alert("Finish the form you started")}))}(),function(){const e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("label"),a=document.createElement("textArea"),d=document.createElement("label"),s=document.createElement("input");t.textContent="Title:",o.textContent="Details(optional):",d.textContent="Date:",n.classList.add("taskForm-input","taskForm-title"),a.classList.add("taskForm-textArea","taskForm-details"),s.classList.add("taskForm-input","taskForm-date"),n.setAttribute("type","text"),s.setAttribute("type","date"),n.setAttribute("required",""),s.setAttribute("required",""),a.setAttribute("rows","3"),n.setAttribute("placeHolder","What to do?"),a.setAttribute("placeHolder","e.g: How will i do it"),t.appendChild(n),o.appendChild(a),d.appendChild(s);const c=document.createElement("div"),l=document.createElement("button"),p=document.createElement("button");l.classList.add("addButton"),p.classList.add("cancelButton"),l.textContent="Add",p.textContent="Cancel",c.appendChild(l),c.appendChild(p),c.classList.add("buttonContainer"),e.classList.add("tasksContainer-taskMakerForm","is-hidden"),e.appendChild(t),e.appendChild(o),e.appendChild(d),e.appendChild(c),r.insertBefore(e,document.querySelector(".tasksContainer-addTaskBtn")),l.addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".taskForm-title").value,n=document.querySelector(".taskForm-details").value,o=document.querySelector(".taskForm-date").value;let a=new u(t,n,o,!1,!1),d=document.querySelector(".is-active").getAttribute("data-project-index");i[d].tabTasks.push(a),console.log(i)})),p.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("is-hidden")}))}()}));const m=document.createElement("ul"),y=document.createElement("li"),L=document.createElement("li"),E=document.createElement("button"),v=document.createElement("button");E.textContent="MODIFY",v.textContent="DELETE",m.classList.add("project-options"),m.setAttribute("id","options"),E.classList.add("project-modifyOptionBtn"),m.classList.toggle("project-options-isHidden"),y.appendChild(E),L.appendChild(v),m.appendChild(y),m.appendChild(L),o.appendChild(m),s.addEventListener("click",(()=>{m.classList.toggle("project-options-isHidden")})),s.addEventListener("blur",(()=>{const e=t=>{m.classList.contains("project-options-isHidden")||E===t.target&&v===t.target||(m.classList.toggle("project-options-isHidden"),document.removeEventListener("click",e))};document.addEventListener("click",e)}));const k=document.createElement("input");k.classList.add("project-modifyInput"),k.setAttribute("aria-label","Enter new project name, text input"),k.value=d.textContent,k.style.display="none";const C=document.createElement("div"),b=document.createElement("button"),f=document.createElement("button");b.textContent="RENAME",f.textContent="CANCEL",C.classList.add("project-modifyButtons"),b.classList.add("addButton"),f.classList.add("cancelButton"),C.appendChild(b),C.appendChild(f),n.appendChild(C),C.style.display="none",o.insertBefore(k,s),E.addEventListener("click",(()=>{s.disabled=!0,k.style.display="block",d.style.display="none",C.style.display="flex",k.value=d.textContent,n.classList.add("project-isModifyState"),o.classList.add("project-button-isModifyState"),k.focus()})),b.addEventListener("click",(t=>{var n,a;e=(e=k.value).charAt(0).toUpperCase()+e.slice(1),t.stopPropagation(),""!==e?(d.style.display="inline-block",d.textContent=e,f.click(),n=e,a=o.getAttribute("data-project-index"),i[a].tabName=n,console.log(i)):alert("The project name cannot be empty")})),f.addEventListener("click",(()=>{d.style.display="inline-block",k.style.display="none",C.style.display="none",n.classList.remove("project-isModifyState"),o.classList.remove("project-button-isModifyState"),s.disabled=!1,o.click()})),v.addEventListener("click",(()=>{!0===confirm("Are you sure you want to delete this project")&&(i.splice(o.getAttribute("data-project-index"),1),h.removeChild(n),function(){console.log("hello gusy");let e=document.querySelectorAll("[data-project-index]");console.log(e);let t=0;e.forEach((e=>{console.log("it does not work"),e.setAttribute("data-project-index",`${t}`),t++}))}(),console.log(i))})),k.addEventListener("keydown",(e=>{"Enter"===e.key?b.click():"Escape"===e.key&&f.click()})),o.click()}e.addEventListener("click",(function(){t.classList.toggle("darkTheme")})),n.addEventListener("click",(function(){document.documentElement.clientWidth<=425&&(o.classList.toggle("nav-expanded-vertical"),o.classList.remove("nav-hidden-horizontal"),a()),document.documentElement.clientWidth>425&&(o.classList.toggle("nav-hidden-horizontal"),o.classList.remove("nav-expanded-vertical"),a())})),m.addEventListener("click",(()=>{if("block"===document.querySelector(".addProjectForm").style.display)return alert("You must finish the previous form"),void document.querySelector(".addProjectForm-input").focus();document.querySelector(".addProjectForm").style.display="block",document.querySelector(".addProjectForm-input").focus()})),s.forEach((e=>{e.addEventListener("click",(()=>{c(e)}))})),window.onload=()=>{"dark"===localStorage.getItem("theme")?t.classList.add("darkTheme"):t.classList.remove("darkTheme"),function(){let e=JSON.parse(localStorage.getItem("Projects"));for(let t=0;t<e.length;t++)i.push(e[t]);for(let e=0;e<i.length;e++)y(i[e].tabName,e)}(),a(),function(){const e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("button"),a=document.createElement("button"),d=document.createElement("form");t.setAttribute("for","projectNameInput"),t.textContent="Enter projects name",n.setAttribute("type","text"),n.setAttribute("placeholder","Project Name"),n.setAttribute("maxlength","20"),n.setAttribute("id","projectNameInput"),e.classList.add("addProjectForm"),t.classList.add("is-visually-hidden"),n.classList.add("addProjectForm-input"),d.classList.add("buttonContainer"),o.classList.add("addButton"),a.classList.add("cancelButton"),o.textContent="ADD",a.textContent="Cancel",e.style.display="none",d.appendChild(o),d.appendChild(a),e.appendChild(t),e.appendChild(n),e.appendChild(d),p.insertBefore(e,m),n.addEventListener("keydown",(e=>{"Enter"===e.key?(e.preventDefault(),o.click()):"Escape"===e.key&&a.click()})),o.addEventListener("click",(t=>{if(t.preventDefault(),""===n.value)return void alert("The project name cannot be empty");y(n.value,function(){const e=document.querySelectorAll("[data-project-index]");let t=!1,n=0;for(;!1===t;)void 0===e[n]?t=!0:n++;return n}());let o=new l(n.value,[]);i.push(o),console.log(i),e.style.display="none",n.value=""})),a.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"}))}(),document.querySelector(".homeBtn").click()},window.addEventListener("beforeunload",(()=>{t.classList.contains("darkTheme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),localStorage.setItem("Projects",JSON.stringify(i))}))})();
//# sourceMappingURL=bundle.js.map