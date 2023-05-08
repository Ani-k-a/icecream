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
    const btnLeft = document.createElement('button');
    btnLeft.setAttribute('class', 'slider-btn left');
    const btnCenter = document.createElement('button');
    btnCenter.setAttribute('class', 'slider-btn center');
    const btnRight = document.createElement('button');
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

    console.log(state.current);
    if (state.current > 0) {
        state.current = 0;
        startRenderSlider();
    } else {
        console.log('else')
        startRenderSlider();
    }
}
const onRightBtn = () => {
    if (state.current < state.dates.length - 1) {
        state.current += 1
    }
    startRenderSlider()
}
const onMiddleBtn = () => {
    state.current = Math.floor((state.dates.length - 1) / 2);
    startRenderSlider();
}

const render = () => {
    ref.slider.replaceChildren();
    ref.slider.append(createCardItem(state.current));
}

const startRenderSlider = () => {
    clearInterval(timerId);
    render();
    state.current += 1;
    timerId = setInterval(() => {
        if (state.current === state.dates.length) {
            state.current = 0;
            clearInterval(timerId);
            startRenderSlider();

        } else {
            render();
            state.current += 1;

        }
    }, 5000)
}


startRenderSlider();
