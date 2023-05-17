import { stateProd } from './header-modal-buynow-state';
import { renderForm } from '../renderForm';
import { orders } from '../orders';
import { createCardItem } from './create-card-item';
import { renderMessage } from '../notification';

const ref = {
  buttonHero: document.querySelector('.offer__btn'),
  button: document.querySelector('.header-btn'),
  header: document.querySelector('header'),
  body: document.querySelector('body'),
};

const createModal = () => {
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');

  const modalBuyNow = document.createElement('div');
  modalBuyNow.setAttribute('class', 'buynow-modal');
  modalBuyNow.classList.add('modal');

  const modalBlock = document.createElement('div');
  modalBlock.classList.add('modal-block');

  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('modal-buynow__title');
  modalTitle.innerText = 'Buy Now';
  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('class', 'btn-close fa-solid fa-xmark');
  const modalItems = document.createElement('ul');
  modalItems.classList.add('modal-buynow__items');

  const form = renderForm();

  modalItems.append(...stateProd.array.map(createCardItem));
  modalBlock.append(modalTitle, closeBtn, modalItems, form);
  modalBuyNow.append(modalBlock);
  backdrop.append(modalBuyNow);
  ref.header.append(backdrop);

  ref.body.classList.add('disabled-scroll');
  const onCloseBtnClick = () => removeModalWindow();

  const removeModalWindow = () => {
    backdrop.remove();
    ref.body.classList.remove('disabled-scroll');
  };

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      removeModalWindow();
    }
  });

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) removeModalWindow();
  });

 

  const onFormSubmit = event => {
    event.preventDefault();
    const order = {
      name: form.name.value,
      phone: form.phone.value,
      comment: form.comment.value,
      productName: stateProd.checked,
    };
    orders.push(order);
    modalBuyNow.replaceChildren();
    modalBuyNow.append(closeBtn);
    modalBuyNow.append(renderMessage());
    modalBuyNow.style.height = '200px';
  };
  form.addEventListener('submit', onFormSubmit);
  closeBtn.addEventListener('click', onCloseBtnClick);
};

const onOpenBtnClick = () => {
  createModal();
};

ref.button.addEventListener('click', onOpenBtnClick);
ref.buttonHero.addEventListener('click', onOpenBtnClick);
