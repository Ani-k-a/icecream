const e={openBtn:document.querySelector(".btn-menu"),header:document.querySelector(".header-container"),navBlock:document.querySelector(".nav"),navigation:document.querySelector(".nav-list"),item:document.querySelectorAll(".nav-list__item"),btnsBlock:document.querySelector(".burger"),byBtn:document.querySelector(".header-btn"),body:document.querySelector("body")};e.openBtn.addEventListener("click",(()=>{e.header.classList.add("is-open"),e.navBlock.classList.add("nav-block__is-open"),e.navigation.classList.add("nav__is-open"),e.item.forEach((e=>e.classList.add("nav-list__item__is-open"))),e.btnsBlock.classList.add("burger__is-open"),e.openBtn.classList.add("btn__is-hiden"),e.byBtn.classList.add("header-btn_is-hidden"),e.body.classList.add("disabled-scroll"),(()=>{const s=document.createElement("button");s.setAttribute("class","btn-close fa-solid fa-xmark"),s.addEventListener("click",(()=>{e.header.classList.remove("is-open"),e.navBlock.classList.remove("nav-block__is-open"),e.navigation.classList.remove("nav__is-open"),e.item.forEach((e=>e.classList.remove("nav-list__item__is-open"))),e.btnsBlock.classList.remove("burger__is-open"),e.openBtn.classList.remove("btn__is-hiden"),e.byBtn.classList.remove("header-btn_is-hidden"),e.body.classList.remove("disabled-scroll"),s.remove()})),e.header.append(s)})()}));
//# sourceMappingURL=index.e75b7f7e.js.map
