const e={body:document.querySelector("body"),button:document.querySelector("#franchise-btn"),section:document.querySelector(".contacts")};e.button.addEventListener("click",(()=>{(()=>{const t=document.createElement("div");t.setAttribute("class","backdrop");const n=document.createElement("div");n.setAttribute("class","modal");const o=document.createElement("div");o.setAttribute("class","modal-block");const c=document.createElement("button");c.setAttribute("class","btn-close fa-solid fa-xmark");const s=document.createElement("h2");s.setAttribute("class","modal__title title modal-title__franchise"),s.innerText="Thank you for your interest in owning an Ice Cream shop";const a=document.createElement("p");a.setAttribute("class","franchise__text"),a.innerText="Due to the overwhelming volume of franchise requests we are not accepting new franchisee applications at this time. Once the application process resumes, we will contact you for further information. Please fill out the contact information below and we will reach out for additional information. We appreciate your patience.";const i=document.createElement("form");i.setAttribute("class","form-buynow franchise-form");const r=document.createElement("input");r.classList.add("input-buynow"),r.setAttribute("placeholder","Name");const l=document.createElement("input");l.classList.add("input-buynow"),l.setAttribute("placeholder","Phone");const d=document.createElement("input");d.classList.add("input-buynow"),d.setAttribute("placeholder","Email");const u=document.createElement("textarea");u.setAttribute("class","input-buynow input-comment"),u.setAttribute("rows","3"),u.setAttribute("placeholder","Comment");const m=document.createElement("button");m.setAttribute("class","btn-buynow btn-solid"),m.innerText="Submit";const b=()=>{t.remove(),e.body.classList.remove("disabled-scroll")};c.addEventListener("click",b),document.addEventListener("keydown",(e=>{"Escape"===e.key&&b()})),t.addEventListener("click",(e=>{e.target===t&&b()})),i.append(r,l,d,u,m),o.append(c,s,a,i),n.append(o),t.append(n),e.section.append(t)})(),e.body.classList.add("disabled-scroll")}));
//# sourceMappingURL=index.d8b25d3c.js.map
