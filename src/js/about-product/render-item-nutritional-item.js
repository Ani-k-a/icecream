export const renderItemNutrItem = ({ title, value }) => {
  const liNutrVal = document.createElement('li');
  liNutrVal.classList.add('ulNutrVal__item');

  const divTitleNutrVal = document.createElement('div');
  divTitleNutrVal.classList.add('ulNutrVal__title');
  divTitleNutrVal.innerText = title;

  const divValueNutrVal = document.createElement('div');
  divValueNutrVal.classList.add('ulNutrVal__description');
  divValueNutrVal.innerText = value;

  liNutrVal.append(divTitleNutrVal, divValueNutrVal);

  return liNutrVal;
};