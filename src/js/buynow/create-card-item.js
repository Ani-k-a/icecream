import { stateProd } from "./header-modal-buynow-state";
export const createCardItem = (item) => {
    let { title, img, color, className,checked } = item;

    const cardItem = document.createElement('li');
    cardItem.classList.add('modal-buynow__item');
    cardItem.classList.add(className);
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', img);
    imgEl.classList.add('modal-buynow__item--img');
    const backCircle = document.createElement('div');
    backCircle.classList.add('modal-buynow__item--background')
    backCircle.style.background = color;
    cardItem.innerText = title;
    cardItem.style.border = `2px solid${color}`;

    cardItem.append(imgEl, backCircle);

    cardItem.addEventListener('click',function(){
        checked = !checked
        if(checked){
            cardItem.style.backgroundColor = color
            stateProd.checked.push(title)
        }else{
            cardItem.style.backgroundColor = ""
            stateProd.checked = stateProd.checked.filter(el => el !== title)
        }
    })
    
    
    return cardItem;
}


