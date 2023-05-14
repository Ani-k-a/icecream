export const renderIgngidientItem = ({ title, value }) => {
  const liIngrItem = document.createElement('li');
  liIngrItem.classList.add('ulIngrList__item');

  const divTitleIngr = document.createElement('div');
  divTitleIngr.classList.add('ulIngrList__title');
  divTitleIngr.innerText = title;

  const divValueIngr = document.createElement('div');
  divValueIngr.classList.add('ulIngrList__description');
  divValueIngr.innerText = value;

  liIngrItem.append(divTitleIngr, divValueIngr);
  return liIngrItem;
};
