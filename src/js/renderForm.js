export const renderForm = () => {
    const formBuyNow = document.createElement('form');
    formBuyNow.classList.add("form-buynow");
    const inputName = document.createElement('input');
    const inputPhone = document.createElement('input');
    const inputComment = document.createElement('textarea');
    const buyNowBtn = document.createElement('button')
    inputName.classList.add('input-buynow');
    inputName.setAttribute('placeholder',"Name");
    inputName.setAttribute('name','name');
    inputName.setAttribute('pattern',"^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$");
    inputName.setAttribute('required','');
    inputPhone.classList.add('input-buynow');
    inputPhone.setAttribute('placeholder',"Phone");
    inputPhone.setAttribute('name',"phone");
    // inputPhone.setAttribute('pattern',"\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}");
    inputPhone.setAttribute('required',"");
    inputComment.setAttribute("class",'input-buynow input-comment');
    inputComment.setAttribute("rows", "3");
    inputComment.setAttribute('placeholder',"Comment");
    inputComment.setAttribute("name","comment");
    inputComment.setAttribute("required", "");
    buyNowBtn.setAttribute("class",'btn-buynow btn-solid');
    buyNowBtn.innerText = "Submit" ;

    formBuyNow.append(inputName,inputPhone,inputComment,buyNowBtn);

    return formBuyNow;
}

