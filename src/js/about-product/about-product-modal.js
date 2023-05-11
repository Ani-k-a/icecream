
console.log('Does it work?');

import { state } from './about-product-modal-state';
import { renderItemNutrItem } from './render-item-nutritional-item';
import { renderIgngidientItem } from './render-igngidient-item';
import { renderForm } from '../renderForm';

console.log('Does it work?');

const refs = {
  greenBtn: document.getElementById('button_green'),
  yellowBtn: document.getElementById('button_yellow'),
  orangeBtn: document.getElementById('button_orange'),
  body: document.querySelector('body')
};

const renderNutritionalValue = (arr) => {
  const ulNutrVal = document.createElement('ul');
  ulNutrVal.classList.add('ulNutrVal');
  ulNutrVal.append(...arr.map(el => renderItemNutrItem(el)));
  return ulNutrVal;
};

const renderIngredientsList = (arr) => {
  const ulIngrList = document.createElement('ul');
  ulIngrList.classList.add('ulIngrList');
  ulIngrList.append(...arr.map(el => renderIgngidientItem(el)));
  return ulIngrList;
};

const renderModal = ({ name, src, arr, arr2 }) => {
  const backdrop = document.createElement('div');
  backdrop.classList.add('backdrop');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const block = document.createElement('div');
  block.classList.add('modal-block');

  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('class', 'btn-close fa-solid fa-xmark')

  const h2 = document.createElement('h2');
  h2.classList.add('modal__title');
  h2.innerText = name;

  const picContainer = document.createElement('div');
  block.classList.add('picture_container');

  const imgModal = document.createElement('img');
  imgModal.classList.add('modal_picture');
  imgModal.setAttribute('src', src);

  const modalLayer = document.createElement('div');
  modalLayer.classList.add('modalLayer');

  picContainer.append(imgModal, modalLayer);

  const divIngredient = document.createElement('div');
  divIngredient.classList.add('ingredients');

  const h3 = document.createElement('h3');
  h3.classList.add('modal_description');
  h3.innerText = 'Ingredients';

  divIngredient.append(h3, renderIngredientsList(arr2));

  block.append(h2, closeBtn, picContainer, renderNutritionalValue(arr), divIngredient, renderForm());

  modal.append(block);

  backdrop.append(modal);

  return backdrop;
};


const onGreenBtnClick = () => {
  refs.body.append(renderModal(state[0]));
}

const onYellowBtnClick = () => {
  refs.body.append(renderModal(state[1]));
}

const onOrangeBtnClick = () => {
  refs.body.append(renderModal(state[1]));
}


refs.greenBtn.addEventListener('click', onGreenBtnClick);
refs.yellowBtn.addEventListener('click', onYellowBtnClick);
refs.orangeBtn.addEventListener('click', onOrangeBtnClick);
