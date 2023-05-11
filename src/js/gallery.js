const state = {
  dates: [
    {
      img: 'https://i.ibb.co/fMG5ZP4/brooke-lark-8be-TH4-Vkh-LI-unsplash-1.jpg',
      description: "IceCream"
    },
    {
      img: 'https://i.ibb.co/1JFGSFF/courtney-cook-QYs-Rx-RPygw-U-unsplash-2.jpg',
      description: "IceCream"
    },
    {
      img: 'https://i.ibb.co/PFc8XbL/unsplash-s-KM8-RK2-C-YI.jpg',
      description: "IceCream"
    },
  ],

  current: 0,
};

let timerId;

const ref = {
  slider: document.querySelector('.gallery__slider'),
};

const createSlider = (i) => {
  const objectImg = state.dates[i];
  const { img, description } = objectImg;
  const sliderImg = document.createElement('img');
  sliderImg.setAttribute('src', img);
  sliderImg.setAttribute('alt', description);
  sliderImg.classList.add('gallery__slider-img');
  ref.slider.replaceChildren();
  ref.slider.append(sliderImg);
};

const render = () => {
  createSlider(state.current);
};

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
  }, 20000);
}
startRenderSlider();





