const state = {
    dates: [
        {
            img: "https://via.placeholder.com/85x85",
            name: "Emily",
            description: "I love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.",
            address: "Emily, Los Angeles"
        },
        {
            img: "https://via.placeholder.com/85x85",
            name: "Bryan",
            description: "Every day we come to you with friends after classes in college. We love your ice cream and casual atmosphere!",
            address: "Bryan, New-York"
        },
        {
            img: "https://via.placeholder.com/85x85",
            name: "Diana",
            description: "Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!",
            address: "Diana, Chicago"
        },
        {
            img: "https://via.placeholder.com/85x85",
            name: "Bob",
            description: "I love visiting your cafe. You prepare the most delicious ice cream in Los Angeles! In addition, you have beautiful serving, cozy atmosphere and polite staff.",
            address: "Bob, San Francisco"
        },
        {
            img: "https://via.placeholder.com/85x85",
            name: "Melissa",
            description: "Every day we come to you with friends after classes in college. We love your ice cream and casual atmosphere!",
            address: "Melissa, San Diego"
        },
        {
            img: "https://via.placeholder.com/85x85",
            name: "Alex",
            description: "Ice cream is my passion! I love your chocolate hazelnut ice cream! And I really like the excellent service - always served politely and quickly!",
            address: "Alex, Austin"
        }

    ],

    curent: 0,

};


const ref = {
    slider: document.querySelector(".slider")

};

let timerId;



const createCardItem = (index) => {
    const { img, name, description, address } = state.dates[index];
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

    if (state.curent === 0) {
        btnLeft.classList.add('active-btn');
        btnRight.classList.remove('active-btn');
        btnCenter.classList.remove('active-btn');

    } else if (state.curent === state.dates.length - 1) {
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
    clearTimeout(timerId);
    return state.curent - 1;
}
const onRightBtn = () => {
    clearTimeout(timerId);
    return state.curent + 1;
}
const onMiddleBtn = () => {

}

const render = () => {
    ref.slider.replaceChildren();
    ref.slider.append(createCardItem(state.curent));
}

const startRenderSlider = () => {
    let timeout = null;

    for (let i = state.curent; i <= state.dates.length; i++) {
        timeout += 5000 * i;
        timerId = setTimeout(() => {

            if (i === (state.dates.length)) {

                clearTimeout(timerId);
                state.curent = 0;
                startRenderSlider()
            } else {
                render();
                state.curent += 1;
            }


        }, timeout);

    }
}

startRenderSlider(state.curent);