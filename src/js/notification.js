export const renderMessage = () => {
  const finish = document.createElement('div');
  const textTitle = document.createElement('p');
  const textFinish = document.createElement('p');

  finish.setAttribute('class', 'finish-order');
  textTitle.setAttribute('class', 'text-finish');
  textFinish.setAttribute('class', 'text-finish');

  textTitle.innerText = 'Thank you!';
  textFinish.innerText = 'Your order has been received!';

  finish.append(textTitle, textFinish);
  return finish;
};