import { state } from './about-product-modal-state';
import { renderItemNutrItem } from './render-item-nutritional-item';
import { renderIgngidientItem } from './render-igngidient-item';
import { renderForm } from '../renderForm';
import { orders } from '../orders';
import { renderMessage } from '../notification';

const refs = {
  greenBtn: document.getElementById('button_green'),
  yellowBtn: document.getElementById('button_yellow'),
  orangeBtn: document.getElementById('button_orange'),
  body: document.querySelector('body'),
};

const renderNutritionalValue = (arr, color) => {
  const ulNutrVal = document.createElement('ul');
  ulNutrVal.classList.add('ulNutrVal');
  ulNutrVal.classList.add(color);
  ulNutrVal.append(...arr.map(el => renderItemNutrItem(el)));
  return ulNutrVal;
};

const renderIngredientsList = arr => {
  const ulIngrList = document.createElement('ul');
  ulIngrList.classList.add('ulIngrList');
  ulIngrList.append(...arr.map(el => renderIgngidientItem(el)));

  return ulIngrList;
};

const renderModal = ({
  name,
  src,
  arr,
  arr2,
  backgroundColor,
  color,
  box_shadow,
}) => {
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const block = document.createElement('div');
  block.classList.add('modal-block');

  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('class', 'btn-close fa-solid fa-xmark');

  const h2 = document.createElement('h2');
  h2.classList.add('modal__title');
  h2.innerText = name;

  const picContainer = document.createElement('div');
  picContainer.classList.add('picture_container');

  const imgModal = document.createElement('img');
  imgModal.classList.add('modal_picture');
  imgModal.setAttribute('src', src);

  const modalLayer = document.createElement('div');
  modalLayer.classList.add('modalLayer');
  modalLayer.style.background = backgroundColor;
  modalLayer.style.boxShadow = box_shadow;

  picContainer.append(imgModal, modalLayer);

  const divIngredient = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.classList.add('modal_description');
  h3.innerText = 'Ingredients';

  divIngredient.append(h3, renderIngredientsList(arr2));

  const form = renderForm();

  const onFormSubmit = event => {
    event.preventDefault();

    const order = {
      name: form.name.value,
      phone: form.phone.value,
      comment: form.comment.value,
      productName: name,
    };

    orders.push(order);
    modal.replaceChildren();
    modal.append(closeBtn, renderMessage());
    modal.style.height = '200px';
  };

  block.append(
    h2,
    closeBtn,
    picContainer,
    renderNutritionalValue(arr, color),
    divIngredient,
    form
  );
  modal.append(block);
  backdrop.append(modal);

  refs.body.classList.add('disabled-scroll');
  const onCloseBtnClick = () => removeModalWindow();

  const removeModalWindow = () => {
    backdrop.remove();
    refs.body.classList.remove('disabled-scroll');
  };

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      removeModalWindow();
    }
  });

  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) removeModalWindow();
  });

  closeBtn.addEventListener('click', onCloseBtnClick);

  form.addEventListener('submit', onFormSubmit);

  return backdrop;
};

const onGreenBtnClick = () => {
  refs.body.append(renderModal(state[0]));
};

const onYellowBtnClick = () => {
  refs.body.append(renderModal(state[1]));
};

const onOrangeBtnClick = () => {
  refs.body.append(renderModal(state[2]));
};

refs.greenBtn.addEventListener('click', onGreenBtnClick);
refs.yellowBtn.addEventListener('click', onYellowBtnClick);
refs.orangeBtn.addEventListener('click', onOrangeBtnClick);
