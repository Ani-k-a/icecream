import { state } from './customer-revievs-state';

const ref = {
    slider: document.querySelector(".slider")

};

let timerId;

const createCardItem = (i) => {
    const objectInfo = state.dates[i]
    const { img, name, description, address } = objectInfo;

    const sliderBlock = document.createElement('div');
    sliderBlock.classList.add('slider__block');

    const sliderDescrBlock = document.createElement('div');
    sliderDescrBlock.classList.add('slider__description');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', img);
    imgEl.classList.add('slider__img');
    imgEl.setAttribute('alt', name);
    const descrEl = document.createElement('p');
    descrEl.classList.add('slider__info');
    descrEl.innerText = description;
    const addressEl = document.createElement('address');
    addressEl.innerText = address;
    addressEl.classList.add('slider__address');

    sliderDescrBlock.append(imgEl, descrEl, addressEl);

    const btnBlock = document.createElement('div');
    btnBlock.classList.add('slider__btns')
    const btnLeft = document.createElement('botton');
    btnLeft.setAttribute('class', 'slider-btn left');
    const btnCenter = document.createElement('botton');
    btnCenter.setAttribute('class', 'slider-btn center');
    const btnRight = document.createElement('botton');
    btnRight.setAttribute('class', 'slider-btn right');
    btnBlock.append(btnLeft, btnCenter, btnRight);

    sliderBlock.append(sliderDescrBlock, btnBlock);

    if (state.current === 0) {
        btnLeft.classList.add('active-btn');
        btnRight.classList.remove('active-btn');
        btnCenter.classList.remove('active-btn');

    } else if (state.current === state.dates.length - 1) {
        btnRight.classList.add('active-btn');
        btnCenter.classList.remove('active-btn');
        btnLeft.classList.remove('active-btn');
    } else {
        btnCenter.classList.add('active-btn');
        btnLeft.classList.remove('active-btn');
        btnRight.classList.remove('active-btn');
    };

    btnLeft.addEventListener('click', onLeftBtn);
    btnRight.addEventListener('click', onRightBtn);
    btnCenter.addEventListener('click', onMiddleBtn);

    return sliderBlock;
}

const onLeftBtn = () => {
    (state.current > 0) && (state.current -= 1);
    startRenderSlider(0);
}
const onRightBtn = () => {

    (state.current < state.dates.length - 1) && (state.current += 1);
    startRenderSlider(0);
}
const onMiddleBtn = () => {
    state.current = Math.floor((state.dates.length - 1) / 2);
    startRenderSlider(0);
}

const render = () => {
    ref.slider.replaceChildren();
    ref.slider.append(createCardItem(state.current));
}

const startRenderSlider = (renderNum = 1) => {
    clearTimeout(timerId);
    let timeout = null;
    stateValue = state.current

    for (let i = 0; i <= state.dates.length - stateValue; i++) {
        timeout = renderNum === 0 ? timeout + 1000 * i : timeout + 1000 * (i + 1);
        timerId = setTimeout(() => {

            if (state.current === state.dates.length) {
                state.current = 0;
                clearTimeout(timerId);
                startRenderSlider(1)
            } else {
                render();
                state.current += 1;
            }
        }, timeout);
    }
}


startRenderSlider(0);
