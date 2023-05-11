// import { stateProd } from "./header-modal-buynow-state";
// import { renderForm } from "../form";

const ref = {
    button: document.querySelector('.header-btn'),
    header: document.querySelector('header'),
    body: document.querySelector('body'),
};

const createCardItem = (item) =>{
    const { title, img, color} = item;

    const cardItem = document.createElement('li');
    cardItem.classList.add('modal-buynow__item');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', img);
    imgEl.classList.add('modal-buynow__item--img');
    const backCircle = document.createElement('div');
    backCircle.classList.add('modal-buynow__item--background')
    backCircle.style.background = color;
    const containerItem = document.createElement('div');
    containerItem.classList.add('modal-buynow__item--container')
    containerItem.innerText = title;
    containerItem.style.border = `${2}px solid ${color}`;

    cardItem.append(imgEl,backCircle,containerItem);

    return cardItem;
}

const createModal = () => {
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');

    const modalBuyNow = document.createElement('div');
    modalBuyNow.classList.add('buynow-modal') ;
    modalBuyNow.classList.add('modal')

    const modalBlock = document.createElement('div')
    modalBlock.classList.add('modal-block')

    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal-buynow__title');
    modalTitle.innerText = "Buy Now"
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('class','btn-close fa-solid fa-xmark')
    const modalItems = document.createElement('ul');
    modalItems.classList.add('modal-buynow__items');
    
    const form = renderForm();
    
    modalItems.append(...stateProd.map(createCardItem));
    modalBlock.append(modalTitle,closeBtn,modalItems,form);
    modalBuyNow.append(modalBlock);
    backdrop.append(modalBuyNow);
    ref.header.append(backdrop);
    
    
    const onCloseBtnClick = () => removeModalWindow();

    const removeModalWindow =( )=>{
        backdrop.remove();
    }
    closeBtn.addEventListener("click",onCloseBtnClick)
}
const onOpenBtnClick = () =>{ 
   createModal();
}

ref.button.addEventListener('click',onOpenBtnClick)