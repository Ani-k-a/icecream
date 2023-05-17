export const renderFranchiseForm = () => {

  const formBuyNow = document.createElement('form');
  formBuyNow.setAttribute("class", "form-buynow franchise-form");

  const inputName = document.createElement('input');
  inputName.classList.add('input-buynow');
  inputName.setAttribute('placeholder',"Name")
  inputName.setAttribute('required','');
  inputName.setAttribute('name', 'name')
  inputName.setAttribute('pattern', "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$")

  const inputPhone = document.createElement('input');
  inputPhone.classList.add('input-buynow');
  inputPhone.setAttribute('placeholder',"Phone");
  inputPhone.setAttribute('required','');
  inputPhone.setAttribute('name', 'phone')
  // inputPhone.setAttribute('pattern', "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}")

  const inputEmail = document.createElement('input');
  inputEmail.classList.add('input-buynow');
  inputEmail.setAttribute('placeholder',"Email");
  inputEmail.setAttribute('required','');
  inputEmail.setAttribute('name', 'email')
  inputEmail.setAttribute('type', 'email')

  const inputComment = document.createElement('textarea');
  inputComment.setAttribute("class",'input-buynow input-comment');
  inputComment.setAttribute("rows", "3");
  inputComment.setAttribute('placeholder',"Comment");
  inputComment.setAttribute('required','');
  inputComment.setAttribute('name', 'comment')
  inputComment.setAttribute('type', 'text')

  const buyNowBtn = document.createElement('button')
  buyNowBtn.setAttribute("class",'btn-buynow btn-solid');
  buyNowBtn.innerText = "Submit" ;

  formBuyNow.append(inputName,inputPhone,inputEmail,inputComment,buyNowBtn);

  return formBuyNow
}