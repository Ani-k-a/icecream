const ref = {
  body: document.querySelector("body"),
  button: document.querySelector("#franchise-btn"),
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
  title.innerText = "Thank you for your interest in owning an Ice Cream shop"
  const text = document.createElement("p");
  text.innerText = "Due to the overwhelming volume of franchise requests we are not accepting new franchisee applications at this time. Once the application process resumes, we will contact you for further information. Please fill out the contact information below and we will reach out for additional information. We appreciate your patience."


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

  modalBlock.append(closeButton, title, text);
  modalWindow.append(modalBlock);
  backDrop.append(modalWindow);
  ref.section.append(backDrop);
};

const onOpenBtnClick = () => {
  renderModalWindow()
  ref.body.classList.add('disabled-scroll');
};



ref.button.addEventListener("click", onOpenBtnClick);