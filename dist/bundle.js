(()=>{const e=document.querySelector(".themeToggle"),t=document.querySelector("body");e.addEventListener("click",(()=>{t.classList.toggle("darkTheme")}));const n=document.querySelector(".menuToggle");function o(){const e=document.querySelector(".l-mainNav");e.classList.contains("nav-expanded")||!1===e.classList.contains("nav-hidden")&&document.documentElement.clientWidth>425?n.setAttribute("aria-expanded","true"):n.setAttribute("aria-expanded","false")}n.addEventListener("click",(()=>{const e=document.querySelector(".l-mainNav");console.log("hi i am menelaos"),document.documentElement.clientWidth<=425&&(e.classList.toggle("nav-expanded"),e.classList.remove("nav-hidden"),o()),document.documentElement.clientWidth>425&&(e.classList.toggle("nav-hidden"),e.classList.remove("nav-expanded"),o())}));class c{constructor(e,t){this.tabName=e,this.tabToDos=t}click=()=>{const e=document.querySelector("main"),t=document.createElement("h3");t.textContent=this.tabName,e.appendChild(t)};appendToDo=e=>{this.tabToDos.push(e)}}const d=document.querySelectorAll(".tab"),s=new c(d[0].childNodes[1].textContent,[]),a=new c(d[1].childNodes[1].textContent,[]),l=new c(d[2].childNodes[1].textContent,[]),i=new c(d[3].childNodes[1].textContent,[]),r=[];r.push(s),r.push(a),r.push(l),r.push(i),console.log(l),d.forEach((e=>{e.addEventListener("click",(()=>{var t;t=e,d.forEach((e=>{t!==e&&e.classList.remove("active")})),document.querySelector("main").innerHTML="",function(e){const t=document.querySelector("main"),n=document.createElement("div");n.classList.add("title");const o=document.createElement("h3");o.textContent=e,o.classList.add("title-heading"),n.appendChild(o),t.appendChild(n)}(e.childNodes[1].textContent),e.classList.add("active")}))})),window.onload=()=>{const e=document.querySelectorAll(".tab");console.log(e[3].childNodes),o()}})();
//# sourceMappingURL=bundle.js.map