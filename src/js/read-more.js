const ref = {
  body: document.querySelector("body"),
  buttonHero: document.getElementById("hero-about-btn"),
  buttonAbout: document.querySelector(".about-btn"),
  section: document.querySelector(".about")
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
  title.innerText = "How it’s made?"
  const video = document.createElement("div")
  video.innerHTML = `<iframe width="460" height="215" src="https://www.youtube.com/embed/ypbPnyJeQ3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  video.setAttribute("class", "modal__video")
  const text = document.createElement("p");
  text.setAttribute("class", "read-more__text")
  text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"

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

  modalBlock.append(closeButton, title, video, text);
  modalWindow.append(modalBlock);
  backDrop.append(modalWindow);
  ref.section.append(backDrop);
};

const onOpenBtnClick = () => {
  renderModalWindow();
  ref.body.classList.add('disabled-scroll');
};


console.dir(ref.buttonAbout)
console.dir(ref.buttonHero)
ref.buttonHero.addEventListener("click", onOpenBtnClick);
ref.buttonAbout.addEventListener("click", onOpenBtnClick);

