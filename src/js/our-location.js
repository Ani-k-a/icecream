const ref = {
  body: document.querySelector("body"),
  buttonLocation: document.getElementById("locations-btn"),
  section: document.querySelector(".contacts")
}

const renderModalWindow = () => {
  const backDrop = document.createElement("div");
  backDrop.setAttribute("class", "backdrop"); 
  const modalWindow = document.createElement("div");
  modalWindow.setAttribute("class", "modal");
  const modalBlock = document.createElement("div");
  modalBlock.setAttribute("class", "modal-block");
  const closeButton = document.createElement("button"); 
  closeButton.setAttribute('class', 'btn-close fa-solid fa-xmark');
  const title = document.createElement("h2");
  title.setAttribute("class", "modal__title title");
  title.innerText = "Our Locations"
  const map = document.createElement("div")
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.057688979982!2d-73.95730892341463!3d40.67269784001992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b9e1735b38f%3A0xb5fe454b88e9c2c0!2zNzI2IFN0ZXJsaW5nIFBsLCBCcm9va2x5biwgTlkgMTEyMTYsINCh0KjQkA!5e0!3m2!1sru!2sde!4v1683968511743!5m2!1sru!2sde"  style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  map.setAttribute("class", "modal__map")
  const btnMap = document.createElement("a")
  btnMap.setAttribute("href", "https://goo.gl/maps/pghKCjCFTDfC2mRd6")
  btnMap.setAttribute("target", "_blank")
  btnMap.setAttribute("rel", "noreferrer noopener")
  btnMap.setAttribute("class","btn-solid btn-map")
  btnMap.innerText = "Open map"
  

  const onCloseBtnClick = () => {
    backDrop.remove();
    ref.body.classList.remove('disabled-scroll');
  };
  closeButton.addEventListener("click", onCloseBtnClick);

  document.addEventListener('keydown', (event) => { 
    if (event.key === 'Escape') { 
      onCloseBtnClick(); 
    } 
  });

  backDrop.addEventListener('click', (event) => { 
    if (event.target === backDrop) 
    onCloseBtnClick(); 
  });

  modalBlock.append(closeButton, title, map, btnMap);
  modalWindow.append(modalBlock);
  backDrop.append(modalWindow);
  ref.section.append(backDrop);
};

const onOpenBtnClick = () => {
  renderModalWindow();
  ref.body.classList.add('disabled-scroll');
};

ref.buttonLocation.addEventListener("click", onOpenBtnClick);

