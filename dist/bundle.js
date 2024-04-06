(()=>{"use strict";const t=document.querySelector(".themeToggle"),e=document.querySelector("body"),a=document.querySelector(".menuToggle"),n=document.querySelector(".l-mainNav");function s(){n.classList.contains("nav-expanded-vertical")||!1===n.classList.contains("nav-hidden-horizontal")&&document.documentElement.clientWidth>425?a.setAttribute("aria-expanded","true"):a.setAttribute("aria-expanded","false")}const d=document.querySelector(".displayTab");function i(){const t=document.createElement("form"),e=document.createElement("label"),a=document.createElement("input"),n=document.createElement("label"),s=document.createElement("textArea"),i=document.createElement("label"),l=document.createElement("input");e.textContent="Title:",n.textContent="Details(optional):",i.textContent="Date due:",a.classList.add("taskForm-input","taskForm-title"),s.classList.add("taskForm-textArea","taskForm-details"),l.classList.add("taskForm-input","taskForm-date"),a.setAttribute("type","text"),l.setAttribute("type","date"),a.setAttribute("required",""),l.setAttribute("required",""),s.setAttribute("rows","3"),a.setAttribute("placeHolder","What to do?"),s.setAttribute("placeHolder","e.g: How will i do it"),e.appendChild(a),n.appendChild(s),i.appendChild(l);const r=document.createElement("div"),u=document.createElement("button"),p=document.createElement("button");u.classList.add("addButton"),p.classList.add("cancelButton"),u.textContent="Add",p.textContent="Cancel",r.appendChild(u),r.appendChild(p),r.classList.add("buttonContainer"),t.classList.add("displayTab-taskMakerForm","is-hidden"),t.appendChild(e),t.appendChild(n),t.appendChild(i),t.appendChild(r),d.insertBefore(t,document.querySelector(".displayTab-addTaskBtn")),u.addEventListener("click",(t=>{t.preventDefault();let e=a.value,n=s.value,d=l.value,i=function(){let t=0,e=!1,a=parseInt(document.querySelector(".is-active").getAttribute("data-project-index"));for(let n=0;n<h.length;n++)if(n===a){let a=0;for(;!1===e;){if(void 0===h[n].tabTasks[a])return e=!0,console.log(t),t;a++,t++}}else for(let e=0;e<h[n].tabTasks.length;e++)t++}();if(""===e)return void alert("You must fill out the Title field");""===d&&(d="No due date"),p.click();let r=document.querySelector(".is-active").getAttribute("data-project-index"),u=new o(e,n,d,!1,!1,i);h[r].tabTasks.push(u),c(e,n,d,!1,!1,i)})),p.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("is-hidden")}))}function l(){const t=document.createElement("button");t.textContent="Add task",t.classList.add("displayTab-addTaskBtn"),d.appendChild(t),t.addEventListener("click",(()=>{let t=document.querySelector(".displayTab-taskMakerForm");!1!==t.classList.contains("is-hidden")?t.classList.toggle("is-hidden"):alert("Finish the form you started")}))}class o{constructor(t,e,a,n,s,d){this.title=t,this.details=e,this.date=a,this.important=n,this.checked=s,this.index=d}}function c(t,e,a,n,s,d){const i=document.querySelector(".displayTab-tasksContainer"),l=document.createElement("li");l.classList.add("task");const o=document.createElement("button"),c=document.createElement("i"),r=document.createElement("i");o.classList.add("task-checkedCircleBtn"),c.classList.add("fa-regular","fa-circle"),r.classList.add("fa-solid","fa-circle-check"),c.style.color="var(--primary)",r.style.color="var(--secondary)",o.appendChild(c),o.appendChild(r),l.appendChild(o),l.setAttribute("data-task-index",`${d}`);const u=document.createElement("div"),p=document.createElement("h4"),m=document.createElement("p"),k=document.createElement("div");u.classList.add("taskText"),p.classList.add("task-title"),m.classList.add("task-details"),k.classList.add("task-date"),p.textContent=`${t}`,""!==e&&(m.textContent=`${e}`),k.textContent=`${a}`,u.appendChild(p),u.appendChild(m),l.appendChild(u),l.appendChild(k);const y=document.createElement("button"),b=document.createElement("i"),L=document.createElement("i");y.classList.add("task-important"),b.classList.add("fa-regular","fa-star","emptyStar"),L.classList.add("fa-solid","fa-star","yellowStar"),b.style.color="var(--primary)",L.style.color="#f1bf13",!0===n?b.style.display="none":L.style.display="none",!0===s?(c.style.display="none",p.classList.add("task-crossedOut"),m.classList.add("task-crossedOut")):(r.style.display="none",p.classList.remove("task-crossedOut"),m.classList.remove("task-crossedOut")),y.appendChild(b),y.appendChild(L),l.appendChild(y);const E=document.createElement("button"),v=document.createElement("i");E.classList.add("taskOptionsBtn"),v.classList.add("fa-solid","fa-ellipsis-vertical"),E.appendChild(v),l.appendChild(E);const f=document.createElement("ul"),C=document.createElement("li"),g=document.createElement("li"),x=document.createElement("button"),T=document.createElement("button");f.classList.add("task-optionsContainer","task-optionsContainer-isHidden"),x.textContent="MODIFY",T.textContent="DELETE",x.classList.add("taskOptions-modifyBtn"),T.classList.add("taskOptions-deleteBtn"),C.appendChild(x),g.appendChild(T),f.appendChild(C),f.appendChild(g),E.appendChild(f),l.addEventListener("mousedown",(()=>{l.classList.add("task-shrink")})),l.addEventListener("mouseup",(()=>{l.classList.remove("task-shrink")})),l.addEventListener("mouseout",(()=>{l.classList.remove("task-shrink")})),o.addEventListener("click",(()=>{if(!0===s){c.style.display="inline",r.style.display="none",s=!1;for(let t=0;t<h.length;t++)for(let e=0;e<h[t].tabTasks.length;e++)h[t].tabTasks[e].index===d&&(h[t].tabTasks[e].checked=!1);p.classList.remove("task-crossedOut"),m.classList.remove("task-crossedOut")}else{c.style.display="none",r.style.display="inline",s=!0;for(let t=0;t<h.length;t++)for(let e=0;e<h[t].tabTasks.length;e++)h[t].tabTasks[e].index===d&&(h[t].tabTasks[e].checked=!0);p.classList.add("task-crossedOut"),m.classList.add("task-crossedOut")}})),y.addEventListener("click",(()=>{if(1==n){b.style.display="inline",L.style.display="none",n=!1;for(let t=0;t<h.length;t++)for(let e=0;e<h[t].tabTasks.length;e++)h[t].tabTasks[e].index===d&&(h[t].tabTasks[e].important=!1)}else{b.style.display="none",L.style.display="inline",n=!0;for(let t=0;t<h.length;t++)for(let e=0;e<h[t].tabTasks.length;e++)h[t].tabTasks[e].index===d&&(h[t].tabTasks[e].important=!0)}})),E.addEventListener("click",(()=>{f.classList.toggle("task-optionsContainer-isHidden")})),E.addEventListener("blur",(()=>{const t=e=>{f.classList.contains("task-optionsContainer-isHidden")||x===e.target&&T===e.target||(f.classList.add("task-optionsContainer-isHidden"),document.removeEventListener("click",t))};document.addEventListener("click",t)})),T.addEventListener("click",(()=>{parseInt(l.getAttribute("data-task-index"));let t=document.querySelector(".is-active").getAttribute("data-project-index");for(let e=0;e<h[t].tabTasks.length;e++)h[t].tabTasks[e].index,h[t].tabTasks.splice(e,1),e=h[t].tabTasks.length+1;i.removeChild(l),function(t){for(let e=0;e<h.length;e++)for(let a=0;a<h[e].tabTasks.length;a++)t<=h[e].tabTasks[a].index&&(h[e].tabTasks[a].index=h[e].tabTasks[a].index-1)}(d),document.querySelector(".is-active").click()})),C.addEventListener("click",(()=>{!function(t){t.style.display="none";const e=document.createElement("form"),a=document.createElement("label"),n=document.createElement("input"),s=document.createElement("label"),d=document.createElement("textArea"),i=document.createElement("label"),l=document.createElement("input");a.textContent="Title:",s.textContent="Details(optional):",i.textContent="Date due:",n.classList.add("taskForm-input","taskForm-title"),d.classList.add("taskForm-textArea","taskForm-details"),l.classList.add("taskForm-input","taskForm-date"),n.value=t.querySelector(".task-title").textContent,d.value=t.querySelector(".task-details").textContent,l.value=t.querySelector(".task-date").textContent,n.setAttribute("type","text"),l.setAttribute("type","date"),n.setAttribute("required",""),l.setAttribute("required",""),d.setAttribute("rows","3"),n.setAttribute("placeHolder","What to do?"),d.setAttribute("placeHolder","e.g: How will i do it"),a.appendChild(n),s.appendChild(d),i.appendChild(l);const o=document.createElement("div"),c=document.createElement("button"),r=document.createElement("button");c.classList.add("addButton"),r.classList.add("cancelButton"),c.textContent="Modify",r.textContent="Cancel",o.appendChild(c),o.appendChild(r),o.classList.add("buttonContainer"),e.classList.add("displayTab-taskMakerForm"),e.appendChild(a),e.appendChild(s),e.appendChild(i),e.appendChild(o);let u=document.querySelector(".displayTab-tasksContainer");console.log("modify work"),u.insertBefore(e,t),c.addEventListener("click",(e=>{e.preventDefault();let a=n.value,s=d.value,i=l.value;""===i&&(i="No due date");let o=parseFloat(t.getAttribute("data-task-index")),c=document.querySelector(".is-active").getAttribute("data-project-index");h[c].tabTasks.forEach((t=>{t.index===o&&(t.title=a,t.details=s,t.date=i)})),r.click(),document.querySelector(".is-active").click(),t.style.display="block"})),r.addEventListener("click",(t=>{t.preventDefault(),e.classList.toggle("is-hidden")}))}(l)})),i.appendChild(l)}const r=document.querySelector(".projectSection"),u=document.querySelector(".projectSection-addProjectButton"),p=document.querySelector(".projectSection-content");function m(t,e){t=t.charAt(0).toUpperCase()+t.slice(1);const a=document.createElement("li"),n=document.createElement("button"),s=document.createElement("i"),d=document.createElement("span"),o=document.createElement("button"),c=document.createElement("span"),r=document.createElement("i");a.classList.add("project"),n.classList.add("project-button","tab"),s.classList.add("fa-solid","fa-bars"),d.classList.add("project-name"),o.classList.add("project-optionsBtn"),c.classList.add("is-visually-hidden"),r.classList.add("fa-solid","fa-ellipsis-vertical","project-optionsIcon"),n.setAttribute("data-project-index",`${e}`),o.setAttribute("tabIndex","0"),o.setAttribute("aria-controls","options"),d.textContent=t,c.textContent="Options",o.appendChild(r),o.appendChild(c),n.appendChild(s),n.appendChild(d),n.appendChild(o),a.appendChild(n),p.appendChild(a),n.addEventListener("click",(()=>{console.log(h),v(n),l(),i()}));const u=document.createElement("ul"),m=document.createElement("li"),k=document.createElement("li"),y=document.createElement("button"),b=document.createElement("button");y.textContent="MODIFY",b.textContent="DELETE",u.classList.add("project-options","project-options-isHidden"),u.setAttribute("id","options"),y.classList.add("project-modifyOptionBtn"),m.appendChild(y),k.appendChild(b),u.appendChild(m),u.appendChild(k),n.appendChild(u),o.addEventListener("click",(()=>{u.classList.toggle("project-options-isHidden")})),o.addEventListener("blur",(()=>{const t=e=>{u.classList.contains("project-options-isHidden")||y===e.target&&b===e.target||(u.classList.add("project-options-isHidden"),document.removeEventListener("click",t))};document.addEventListener("click",t)}));const L=document.createElement("input");L.classList.add("project-modifyInput"),L.setAttribute("aria-label","Enter new project name, text input"),L.value=d.textContent,L.style.display="none";const f=document.createElement("div"),C=document.createElement("button"),g=document.createElement("button");C.textContent="RENAME",g.textContent="CANCEL",f.classList.add("project-modifyButtons"),C.classList.add("addButton"),g.classList.add("cancelButton"),f.appendChild(C),f.appendChild(g),a.appendChild(f),f.style.display="none",n.insertBefore(L,o),y.addEventListener("click",(()=>{o.disabled=!0,L.style.display="block",d.style.display="none",f.style.display="flex",L.value=d.textContent,a.classList.add("project-isModifyState"),n.classList.add("project-button-isModifyState"),L.focus()})),C.addEventListener("click",(e=>{var a,s;t=(t=L.value).charAt(0).toUpperCase()+t.slice(1),e.stopPropagation(),""!==t?(d.style.display="inline-block",d.textContent=t,g.click(),a=t,s=n.getAttribute("data-project-index"),h[s].tabName=a):alert("The project name cannot be empty")})),g.addEventListener("click",(()=>{d.style.display="inline-block",L.style.display="none",f.style.display="none",a.classList.remove("project-isModifyState"),n.classList.remove("project-button-isModifyState"),o.disabled=!1,n.click()})),b.addEventListener("click",(t=>{t.stopPropagation(),!0===confirm("Are you sure you want to delete this project")&&(h.splice(n.getAttribute("data-project-index"),1),p.removeChild(a),function(){let t=document.querySelectorAll("[data-project-index]"),e=0;t.forEach((t=>{t.setAttribute("data-project-index",`${e}`),e++}))}(),E())})),L.addEventListener("keydown",(t=>{"Enter"===t.key?C.click():"Escape"===t.key&&g.click()})),v(n),l(),i()}const h=[],k=[],y=[];const b=document.querySelector(".displayTab");let L=document.querySelectorAll(".tab");function E(){b.innerHTML=""}function v(t){!function(t){L=document.querySelectorAll(".tab");let e=document.querySelector(".is-active");e!==t&&(L.forEach((e=>{t!==e||e.classList.add("is-active")})),null!==e&&e.classList.remove("is-active"))}(t),E(),function(t){const e=document.createElement("div");e.classList.add("displayTab-title");const a=document.createElement("h3");a.textContent=t,a.classList.add("displayTab-title-heading");const n=document.createElement("ul");n.classList.add("displayTab-tasksContainer"),e.appendChild(a),b.appendChild(e),b.appendChild(n)}(t.childNodes[1].textContent),function(){let t=document.querySelector(".is-active");if(t.classList.contains("homeBtn")&&(t.classList.contains("homeBtn-allTasks")?(function(){for(;0!=k.length;)k.pop();for(let t=0;t<h.length;t++)for(let e=0;e<h[t].tabTasks.length;e++)k.push(h[t].tabTasks[e])}(),k.forEach((t=>{c(t.title,t.details,t.date,t.important,t.checked,t.index)}))):t.classList.contains("homeBtn-important")&&(function(){for(;0!=y.length;)y.pop();for(let t=0;t<h.length;t++)for(let e=0;e<h[t].tabTasks.length;e++)!0===h[t].tabTasks[e].important&&y.push(h[t].tabTasks[e])}(),y.forEach((t=>{c(t.title,t.details,t.date,t.important,t.checked,t.index)})))),t.classList.contains("project-button")){let t=document.querySelector(".is-active").getAttribute("data-project-index");if(0===h[t].tabTasks.length)return;h[t].tabTasks.forEach((t=>{c(t.title,t.details,t.date,t.important,t.checked,t.index)}))}}()}class f{constructor(t,e){this.tabName=t,this.tabTasks=e}}t.addEventListener("click",(function(){e.classList.toggle("darkTheme")})),a.addEventListener("click",(function(){document.documentElement.clientWidth<=425&&(n.classList.toggle("nav-expanded-vertical"),n.classList.remove("nav-hidden-horizontal"),s()),document.documentElement.clientWidth>425&&(n.classList.toggle("nav-hidden-horizontal"),n.classList.remove("nav-expanded-vertical"),s())})),u.addEventListener("click",(()=>{if("block"===document.querySelector(".addProjectForm").style.display)return alert("You must finish the previous form"),void document.querySelector(".addProjectForm-input").focus();document.querySelector(".addProjectForm").style.display="block",document.querySelector(".addProjectForm-input").focus()})),L.forEach((t=>{t.addEventListener("click",(()=>{v(t)}))})),window.onload=()=>{"dark"===localStorage.getItem("theme")?e.classList.add("darkTheme"):e.classList.remove("darkTheme"),function(){let t=JSON.parse(localStorage.getItem("Projects"));for(let e=0;e<t.length;e++)h.push(t[e]);for(let t=0;t<h.length;t++)m(h[t].tabName,t)}(),s(),function(){const t=document.createElement("form"),e=document.createElement("label"),a=document.createElement("input"),n=document.createElement("button"),s=document.createElement("button"),d=document.createElement("div");e.setAttribute("for","projectNameInput"),e.textContent="Enter projects name",a.setAttribute("type","text"),a.setAttribute("placeholder","Project Name"),a.setAttribute("maxlength","20"),a.setAttribute("id","projectNameInput"),t.classList.add("addProjectForm"),e.classList.add("is-visually-hidden"),a.classList.add("addProjectForm-input"),d.classList.add("buttonContainer"),n.classList.add("addButton"),s.classList.add("cancelButton"),n.textContent="ADD",s.textContent="Cancel",t.style.display="none",d.appendChild(n),d.appendChild(s),t.appendChild(e),t.appendChild(a),t.appendChild(d),r.insertBefore(t,u),a.addEventListener("keydown",(t=>{"Enter"===t.key?(t.preventDefault(),n.click()):"Escape"===t.key&&s.click()})),n.addEventListener("click",(e=>{if(e.preventDefault(),""===a.value)return void alert("The project name cannot be empty");let n=new f(a.value,[]);h.push(n),m(a.value,function(){const t=document.querySelectorAll("[data-project-index]");let e=!1,a=0;for(;!1===e;)void 0===t[a]?e=!0:a++;return a}()),t.style.display="none",a.value=""})),s.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none"}))}(),document.querySelector(".homeBtn").click(),console.log(h)},window.addEventListener("beforeunload",(()=>{e.classList.contains("darkTheme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),localStorage.setItem("Projects",JSON.stringify(h))}))})();
//# sourceMappingURL=bundle.js.map