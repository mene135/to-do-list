(()=>{"use strict";const t=document.querySelector(".themeToggle"),e=document.querySelector("body"),n=document.querySelector(".menuToggle"),a=document.querySelector(".l-mainNav");function s(){a.classList.contains("nav-expanded-vertical")||!1===a.classList.contains("nav-hidden-horizontal")&&document.documentElement.clientWidth>425?n.setAttribute("aria-expanded","true"):n.setAttribute("aria-expanded","false")}function d(t){document.querySelector(".toastNt-message").textContent=`${t}`}function o(){const t=document.querySelector(".toastNt");t.classList.add("toastNt-isActive"),setTimeout((()=>{t.classList.remove("toastNt-isActive")}),3e3)}const i=document.querySelector(".l-displayTab");class c{constructor(t,e,n,a,s,d){this.title=t,this.details=e,this.date=n,this.important=a,this.checked=s,this.index=d}}function l(){const t=document.createElement("button");t.textContent="Add task",t.classList.add("tab-addTaskBtn"),i.appendChild(t),t.addEventListener("click",(()=>{const t=document.querySelector(".taskMakerForm");if(!1===t.classList.contains("is-hidden"))return d("Finish the form you started"),void o();t.classList.toggle("is-hidden")}))}function r(t,e,n,a,s,d){const o=document.querySelector(".tab-tasksContainer"),i=document.createElement("li");let c=s,l=a;i.classList.add("task");const r=document.createElement("button"),u=document.createElement("i"),p=document.createElement("i"),m=document.createElement("span");r.classList.add("task-checkedCircleBtn"),u.classList.add("fa-regular","fa-circle"),p.classList.add("fa-solid","fa-circle-check"),m.classList.add("is-visually-hidden"),u.style.color="var(--primary)",p.style.color="var(--secondary)",r.appendChild(u),r.appendChild(p),r.appendChild(m),i.appendChild(r),i.setAttribute("data-task-index",`${d}`);const h=document.createElement("div"),k=document.createElement("h4"),b=document.createElement("p"),y=document.createElement("div");h.classList.add("taskText"),k.classList.add("task-title"),b.classList.add("task-details"),y.classList.add("task-date"),k.textContent=`${t}`,""!==e&&(b.textContent=`${e}`),y.textContent=`${n}`,h.appendChild(k),h.appendChild(b),i.appendChild(h),i.appendChild(y);const L=document.createElement("button"),f=document.createElement("i"),C=document.createElement("i"),E=document.createElement("span");L.classList.add("task-important"),f.classList.add("fa-regular","fa-star","emptyStar"),C.classList.add("fa-solid","fa-star","yellowStar"),E.classList.add("is-visually-hidden"),f.style.color="var(--primary)",C.style.color="#f1bf13",!0===l?(f.style.display="none",E.textContent="Important"):(C.style.display="none",E.textContent="Not Important"),!0===c?(u.style.display="none",r.setAttribute("aria-pressed","true"),m.textContent="Checked",k.classList.add("task-crossedOut"),b.classList.add("task-crossedOut")):(p.style.display="none",r.setAttribute("aria-pressed","false"),m.textContent="Unchecked",k.classList.remove("task-crossedOut"),b.classList.remove("task-crossedOut")),L.appendChild(f),L.appendChild(C),L.appendChild(E),i.appendChild(L);const g=document.createElement("button"),x=document.createElement("i");g.classList.add("taskOptionsBtn"),x.classList.add("fa-solid","fa-ellipsis-vertical"),g.appendChild(x),i.appendChild(g);const S=document.createElement("ul"),j=document.createElement("li"),A=document.createElement("li"),T=document.createElement("button"),q=document.createElement("button");S.classList.add("task-optionsContainer","task-optionsContainer-isHidden"),T.textContent="MODIFY",q.textContent="DELETE",T.classList.add("taskOptions-modifyBtn"),q.classList.add("taskOptions-deleteBtn"),j.appendChild(T),A.appendChild(q),S.appendChild(j),S.appendChild(A),g.appendChild(S),i.addEventListener("mousedown",(()=>{i.classList.add("task-shrink")})),i.addEventListener("mouseup",(()=>{i.classList.remove("task-shrink")})),i.addEventListener("mouseout",(()=>{i.classList.remove("task-shrink")})),r.addEventListener("click",(()=>{if(!0===c){u.style.display="inline",p.style.display="none",r.setAttribute("aria-pressed","false"),m.textContent="Unchecked",c=!1;for(let t=0;t<v.length;t+=1)for(let e=0;e<v[t].tabTasks.length;e+=1)v[t].tabTasks[e].index===d&&(v[t].tabTasks[e].checked=!1);k.classList.remove("task-crossedOut"),b.classList.remove("task-crossedOut")}else{u.style.display="none",p.style.display="inline",r.setAttribute("aria-pressed","true"),m.textContent="Checked",c=!0;for(let t=0;t<v.length;t+=1)for(let e=0;e<v[t].tabTasks.length;e+=1)v[t].tabTasks[e].index===d&&(v[t].tabTasks[e].checked=!0);k.classList.add("task-crossedOut"),b.classList.add("task-crossedOut")}})),L.addEventListener("click",(()=>{if(!0===l){f.style.display="inline",C.style.display="none",E.textContent="Important",l=!1;for(let t=0;t<v.length;t+=1)for(let e=0;e<v[t].tabTasks.length;e+=1)v[t].tabTasks[e].index===d&&(v[t].tabTasks[e].important=!1)}else{f.style.display="none",C.style.display="inline",E.textContent="Not important",l=!0;for(let t=0;t<v.length;t+=1)for(let e=0;e<v[t].tabTasks.length;e+=1)v[t].tabTasks[e].index===d&&(v[t].tabTasks[e].important=!0)}})),g.addEventListener("click",(()=>{S.classList.toggle("task-optionsContainer-isHidden")})),g.addEventListener("blur",(()=>{const t=e=>{S.classList.contains("task-optionsContainer-isHidden")||T===e.target&&q===e.target||(S.classList.add("task-optionsContainer-isHidden"),document.removeEventListener("click",t))};document.addEventListener("click",t)})),q.addEventListener("click",(()=>{for(let t=0;t<v.length;t+=1)for(let e=0;e<v[t].tabTasks.length;e+=1)v[t].tabTasks[e].index===d&&v[t].tabTasks.splice(e,1);o.removeChild(i),function(t){for(let e=0;e<v.length;e+=1)for(let n=0;n<v[e].tabTasks.length;n+=1)t<=v[e].tabTasks[n].index&&(v[e].tabTasks[n].index-=1)}(d),document.querySelector(".is-active").click()})),j.addEventListener("click",(()=>{!function(t){const e=t;e.style.display="none";const n=document.createElement("form"),a=document.createElement("label"),s=document.createElement("input"),d=document.createElement("label"),o=document.createElement("textArea"),i=document.createElement("label"),c=document.createElement("input");a.textContent="Title:",d.textContent="Details(optional):",i.textContent="Date due:",s.classList.add("taskForm-input","taskForm-title"),o.classList.add("taskForm-textArea","taskForm-details"),c.classList.add("taskForm-input","taskForm-date"),s.value=t.querySelector(".task-title").textContent,o.value=t.querySelector(".task-details").textContent,c.value=t.querySelector(".task-date").textContent,s.setAttribute("type","text"),c.setAttribute("type","date"),s.setAttribute("required",""),c.setAttribute("required",""),o.setAttribute("rows","3"),s.setAttribute("placeHolder","What to do?"),o.setAttribute("placeHolder","e.g: How will i do it"),a.appendChild(s),d.appendChild(o),i.appendChild(c);const l=document.createElement("div"),r=document.createElement("button"),u=document.createElement("button");r.classList.add("addButton"),u.classList.add("cancelButton"),r.textContent="Modify",u.textContent="Cancel",l.appendChild(r),l.appendChild(u),l.classList.add("buttonContainer"),n.classList.add("taskMakerForm"),n.appendChild(a),n.appendChild(d),n.appendChild(i),n.appendChild(l),document.querySelector(".tab-tasksContainer").insertBefore(n,t),r.addEventListener("click",(n=>{n.preventDefault();const a=s.value,d=o.value;let i=c.value;""===i&&(i="No due date");const l=parseFloat(t.getAttribute("data-task-index")),r=document.querySelector(".is-active").getAttribute("data-project-index");v[r].tabTasks.forEach((t=>{t.index===l&&(e.title=a,e.details=d,e.date=i)})),u.click(),document.querySelector(".is-active").click(),e.style.display="block"})),u.addEventListener("click",(t=>{t.preventDefault(),n.classList.toggle("is-hidden")}))}(i)})),o.appendChild(i)}function u(){const t=document.createElement("form"),e=document.createElement("label"),n=document.createElement("input"),a=document.createElement("label"),s=document.createElement("textArea"),l=document.createElement("label"),u=document.createElement("input");e.textContent="Title:",a.textContent="Details(optional):",l.textContent="Date due:",n.classList.add("taskForm-input","taskForm-title"),s.classList.add("taskForm-textArea","taskForm-details"),u.classList.add("taskForm-input","taskForm-date"),n.setAttribute("type","text"),u.setAttribute("type","date"),n.setAttribute("required",""),u.setAttribute("required",""),s.setAttribute("rows","3"),n.setAttribute("placeHolder","What to do?"),s.setAttribute("placeHolder","e.g: How will i do it"),e.appendChild(n),a.appendChild(s),l.appendChild(u);const p=document.createElement("div"),m=document.createElement("button"),h=document.createElement("button");m.classList.add("addButton"),h.classList.add("cancelButton"),m.textContent="Add",h.textContent="Cancel",p.appendChild(m),p.appendChild(h),p.classList.add("buttonContainer"),t.classList.add("taskMakerForm","is-hidden"),t.appendChild(e),t.appendChild(a),t.appendChild(l),t.appendChild(p),i.insertBefore(t,document.querySelector(".tab-addTaskBtn")),m.addEventListener("click",(t=>{t.preventDefault();const e=n.value,a=s.value;let i=u.value;const l=function(){const t=parseInt(document.querySelector(".is-active").getAttribute("data-project-index"),10);for(let e=0;e<v[t].length+1;e+=1)if(void 0===v[t].tabTasks[e])return e}();if(""===e)return d("You must fill out the Title field"),void o();""===i&&(i="No due date"),h.click();const p=document.querySelector(".is-active").getAttribute("data-project-index"),m=new c(e,a,i,!1,!1,l);v[p].tabTasks.push(m),r(e,a,i,!1,!1,l)})),h.addEventListener("click",(e=>{e.preventDefault(),t.classList.toggle("is-hidden")}))}const p=document.querySelector(".projectSection"),m=document.querySelector(".addProjectBtn"),h=document.querySelector(".js-projectSection-content");function k(t,e){const n=t.charAt(0).toUpperCase()+t.slice(1),a=document.createElement("li"),s=document.createElement("button"),i=document.createElement("i"),c=document.createElement("span"),r=document.createElement("button"),p=document.createElement("span"),m=document.createElement("i");a.classList.add("project"),s.classList.add("project-btn","button-primarySkin","js-tab"),i.classList.add("fa-solid","fa-bars"),c.classList.add("project-name"),r.classList.add("project-optionsBtn"),p.classList.add("is-visually-hidden"),m.classList.add("fa-solid","fa-ellipsis-vertical","project-optionsIcon"),s.setAttribute("data-project-index",`${e}`),r.setAttribute("tabIndex","0"),r.setAttribute("aria-controls","options"),c.textContent=n,p.textContent="Options",r.appendChild(m),r.appendChild(p),s.appendChild(i),s.appendChild(c),s.appendChild(r),a.appendChild(s),h.appendChild(a),s.addEventListener("click",(()=>{q(s),l(),u()}));const k=document.createElement("ul"),b=document.createElement("li"),y=document.createElement("li"),L=document.createElement("button"),f=document.createElement("button");L.textContent="MODIFY",f.textContent="DELETE",k.classList.add("project-options","project-options-isHidden"),k.setAttribute("id","options"),L.classList.add("project-modifyOptionBtn"),b.appendChild(L),y.appendChild(f),k.appendChild(b),k.appendChild(y),s.appendChild(k),r.addEventListener("click",(()=>{k.classList.toggle("project-options-isHidden")})),r.addEventListener("blur",(()=>{const t=e=>{k.classList.contains("project-options-isHidden")||L===e.target&&f===e.target||(k.classList.add("project-options-isHidden"),document.removeEventListener("click",t))};document.addEventListener("click",t)}));const C=document.createElement("input");C.classList.add("project-modifyInput"),C.setAttribute("aria-label","Enter new project name, text input"),C.value=c.textContent,C.style.display="none";const E=document.createElement("div"),g=document.createElement("button"),x=document.createElement("button");g.textContent="RENAME",x.textContent="CANCEL",E.classList.add("modifyProject-options"),g.classList.add("addButton"),x.classList.add("cancelButton"),E.appendChild(g),E.appendChild(x),a.appendChild(E),E.style.display="none",s.insertBefore(C,r),L.addEventListener("click",(()=>{r.disabled=!0,C.style.display="block",c.style.display="none",E.style.display="flex",C.value=c.textContent,a.classList.add("project-isModifyState"),s.classList.add("project-btn-isModifyState"),C.focus()})),g.addEventListener("click",(e=>{let n=C.value;if(n=n.charAt(0).toUpperCase()+t.slice(1),e.stopPropagation(),""===n)return d("The project name cannot be empty"),void o();c.style.display="inline-block",c.textContent=n,x.click(),function(t,e){v[e].tabName=t}(n,s.getAttribute("data-project-index"))})),x.addEventListener("click",(()=>{c.style.display="inline-block",C.style.display="none",E.style.display="none",a.classList.remove("project-isModifyState"),s.classList.remove("project-btn-isModifyState"),r.disabled=!1,s.click()})),f.addEventListener("click",(t=>{t.stopPropagation(),v.splice(s.getAttribute("data-project-index"),1),h.removeChild(a),function(){const t=document.querySelectorAll("[data-project-index]");let e=0;t.forEach((t=>{t.setAttribute("data-project-index",`${e}`),e+=1}))}(),T()})),C.addEventListener("keydown",(t=>{"Enter"===t.key?g.click():"Escape"===t.key&&x.click()})),q(s),l(),u()}Math.pow(10,8);const b=36e5;function y(t){const e=t/b;return Math.trunc(e)}function L(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}let f={};function C(){return f}function E(t,e){const n=C(),a=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,s=L(t),d=s.getDay(),o=(d<a?7:0)+d-a;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}const v=[],g=[],x=[],S=[],j=[];const A=document.querySelector(".l-displayTab");function T(){A.innerHTML=""}function q(t){!function(t){const e=document.querySelector(".is-active"),n=document.querySelectorAll(".js-tab");e!==t&&(n.forEach((e=>{t===e&&e.classList.add("is-active")})),null!==e&&e.classList.remove("is-active"))}(t),T(),function(t){const e=document.createElement("div");e.classList.add("tab-title");const n=t.querySelector("span").textContent,a=document.createElement("h3");a.textContent=n,a.classList.add("tab-title-heading");const s=document.createElement("ul");s.classList.add("tab-tasksContainer"),e.appendChild(a),A.appendChild(e),A.appendChild(s)}(t),function(){const t=document.querySelector(".is-active");if(null!=t&&(t.classList.contains("homeBtn")&&(t.classList.contains("homeBtn-allTasks")?(function(){for(;0!==g.length;)g.pop();for(let t=0;t<v.length;t+=1)for(let e=0;e<v[t].tabTasks.length;e+=1)g.push(v[t].tabTasks[e])}(),g.forEach((t=>{r(t.title,t.details,t.date,t.important,t.checked,t.index)}))):t.classList.contains("homeBtn-important")?(function(){for(;0!==x.length;)x.pop();for(let t=0;t<v.length;t+=1)for(let e=0;e<v[t].tabTasks.length;e+=1)!0===v[t].tabTasks[e].important&&x.push(v[t].tabTasks[e])}(),x.forEach((t=>{r(t.title,t.details,t.date,t.important,t.checked,t.index)}))):t.classList.contains("homeBtn-today")?(function(){for(;0!==S.length;)S.pop();let t=new Date;const e=t.getDate(),n=t.getMonth(),a=t.getFullYear();t=new Date(a,n,e);for(let e=0;e<v.length;e+=1)for(let n=0;n<v[e].tabTasks.length;n+=1){const a=y((s=t,+L(v[e].tabTasks[n].date)-+L(s)));a<24&&a>=0&&S.push(v[e].tabTasks[n])}var s}(),S.forEach((t=>{r(t.title,t.details,t.date,t.important,t.checked,t.index)}))):t.classList.contains("homeBtn-thisWeek")&&(function(){for(;0!==j.length;)j.pop();const t=new Date;for(let a=0;a<v.length;a+=1)for(let s=0;s<v[a].tabTasks.length;s+=1)1==(e=t,+E(v[a].tabTasks[s].date,n={weekStartsOn:1})==+E(e,n))&&j.push(v[a].tabTasks[s]);var e,n}(),j.forEach((t=>{r(t.title,t.details,t.date,t.important,t.checked,t.index)})))),t.classList.contains("project-btn"))){const t=document.querySelector(".is-active").getAttribute("data-project-index");if(0===v[t].tabTasks.length)return;v[t].tabTasks.forEach((t=>{r(t.title,t.details,t.date,t.important,t.checked,t.index)}))}}()}class w{constructor(t,e){this.tabName=t,this.tabTasks=e}}t.addEventListener("click",(function(){e.classList.toggle("darkTheme")})),n.addEventListener("click",(function(){document.documentElement.clientWidth<=425&&(a.classList.toggle("nav-expanded-vertical"),a.classList.remove("nav-hidden-horizontal"),s()),document.documentElement.clientWidth>425&&(a.classList.toggle("nav-hidden-horizontal"),a.classList.remove("nav-expanded-vertical"),s())})),m.addEventListener("click",(()=>{if("block"===document.querySelector(".projectMakerForm").style.display)return d("You must complete the form you started!"),o(),void document.querySelector(".projectMakerForm-input").focus();document.querySelector(".projectMakerForm").style.display="block",document.querySelector(".projectMakerForm-input").focus()})),document.querySelectorAll(".js-tab").forEach((t=>{t.addEventListener("click",(()=>{q(t)}))})),window.onload=()=>{"dark"===localStorage.getItem("theme")?e.classList.add("darkTheme"):e.classList.remove("darkTheme"),function(t){const e=JSON.parse(localStorage.getItem("Projects"));for(let t=0;t<e.length;t+=1)v.push(e[t]);for(let e=0;e<v.length;e+=1)t(v[e].tabName,e)}(k),s(),function(){const t=document.createElement("form"),e=document.createElement("label"),n=document.createElement("input"),a=document.createElement("button"),s=document.createElement("button"),i=document.createElement("div");e.setAttribute("for","projectNameInput"),e.textContent="Enter projects name",n.setAttribute("type","text"),n.setAttribute("placeholder","Project Name"),n.setAttribute("maxlength","20"),n.setAttribute("id","projectNameInput"),t.classList.add("projectMakerForm"),e.classList.add("is-visually-hidden"),n.classList.add("projectMakerForm-input"),i.classList.add("buttonContainer"),a.classList.add("addButton"),s.classList.add("cancelButton"),a.textContent="ADD",s.textContent="Cancel",t.style.display="none",i.appendChild(a),i.appendChild(s),t.appendChild(e),t.appendChild(n),t.appendChild(i),p.insertBefore(t,m),n.addEventListener("keydown",(t=>{"Enter"===t.key?(t.preventDefault(),a.click()):"Escape"===t.key&&s.click()})),a.addEventListener("click",(e=>{if(e.preventDefault(),""===n.value)return d("The project name cannot be empty!"),o(),void document.querySelector(".projectMakerForm-input").focus();const a=new w(n.value,[]);v.push(a),k(n.value,function(){const t=document.querySelectorAll("[data-project-index]");let e=!1,n=0;for(;!1===e;)void 0===t[n]?e=!0:n+=1;return n}()),t.style.display="none",n.value=""})),s.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none"}))}(),function(){const t=document.createElement("div"),e=document.createElement("i"),n=document.createElement("p");t.classList.add("toastNt"),e.classList.add("fa-solid","fa-bell","toastNt-icon"),n.classList.add("toastNt-message"),e.style.color="#a80505",t.appendChild(e),t.appendChild(n),document.body.appendChild(t)}(),document.querySelector(".homeBtn").click()},window.addEventListener("beforeunload",(()=>{e.classList.contains("darkTheme")?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),localStorage.setItem("Projects",JSON.stringify(v))}))})();
//# sourceMappingURL=bundle.js.map