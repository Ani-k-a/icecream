// import { state } from "./header-modal-buynow-state";
const state = [
    {
        title: "Ice Cream",
        img: "https://i.ibb.co/DfZrxk5/kelsey-curtis-G5-Zenft-PPOA-unsplash-2.jpg",
        color: "#AEC6A5"
        
    },
    {
        title: "Ice Coffee",
        img: "https://i.ibb.co/s95HTLS/pariwat-pannium-0-qbe-F-0zn8-unsplash-1.jpg" ,
        color: "#EFD478"
        
    },
    {
        title: "Milkshake",
        img: "https://i.ibb.co/Zz6yLTn/victor-rutka-4-Fujjkc-I40g-unsplash-1.jpg",
        color:"#D6936D"
    }
    
]

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

    cardItem.append(imgEl,backCircle,containerItem)

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
    const formBuyNow = document.createElement('form');
    formBuyNow.classList.add("form-buynow");
    const inputName = document.createElement('input');
    const inputPhone = document.createElement('input');
    const inputComment = document.createElement('input');
    const buyNowBtn = document.createElement('button')
    inputName.classList.add('input-buynow');
    inputName.setAttribute('placeholder',"Name")
    inputPhone.classList.add('input-buynow');
    inputPhone.setAttribute('placeholder',"Phone")
    inputComment.setAttribute("class",'input-buynow input-comment');
    inputComment.setAttribute('placeholder',"Comment")
    buyNowBtn.setAttribute("class",'btn-buynow btn-solid')
    buyNowBtn.innerText = "Submit"

    formBuyNow.append(inputName,inputPhone,inputComment)
    modalItems.append(...state.map(createCardItem));
    modalBlock.append(modalTitle,closeBtn,modalItems,formBuyNow,buyNowBtn)
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
   console.log("privet"); 
   createModal();
}

ref.button.addEventListener('click',onOpenBtnClick)