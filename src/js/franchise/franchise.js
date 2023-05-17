import { franchise } from "./franchise-orders";
import { renderFranchiseForm } from "./franchise-form";
import { renderMessage } from "../notification";

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
  title.setAttribute("class", "modal__title title modal-title__franchise");
  title.innerText = "Thank you for your interest in owning an Ice Cream shop"
  const text = document.createElement("p");
  text.setAttribute("class","franchise__text")
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

  const formBuyNow = renderFranchiseForm()

  const onFormSubmit = (event) => {
    event.preventDefault();

    const order = {
      name: formBuyNow.name.value,
      phone: formBuyNow.phone.value,
      email: formBuyNow.email.value,
      comment: formBuyNow.comment.value,
    };

    franchise.push(order);
    modalBlock.replaceChildren();
    modalBlock.append(closeButton, renderMessage());
    modalBlock.style.height = '200px';
  }

  modalBlock.append(closeButton, title, text, formBuyNow);
  modalWindow.append(modalBlock);
  backDrop.append(modalWindow);
  formBuyNow.addEventListener("submit", onFormSubmit)
  ref.section.append(backDrop);
};

const onOpenBtnClick = () => {
  renderModalWindow()
  ref.body.classList.add('disabled-scroll');
};

ref.button.addEventListener("click", onOpenBtnClick);