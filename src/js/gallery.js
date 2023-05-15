import { state } from "./gallery-state";


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
  }, 8000);
}
startRenderSlider();





