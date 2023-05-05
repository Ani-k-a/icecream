import { state } from "./footer-modal-team-state";

const ref = {
    botton: document.querySelector('.btn-copyright'),
    footer: document.querySelector('footer'),
    body: document.querySelector('body')
};


const createCardItem = (item) => {
    const { name, position, img, linkedin } = item;

    const cardItem = document.createElement('li');
    cardItem.classList.add('team-list__item');
    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', img);
    imgEl.classList.add('team-list__img');

    const link = document.createElement('a');
    link.setAttribute('href', linkedin);
    link.setAttribute('class', "btn-linkedin fa-brands fa-linkedin");
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noreferrer noopener');

    const box = document.createElement('div');

    const descriptionBlock = document.createElement('div');
    descriptionBlock.classList.add('team-list__info');

    const nameEl = document.createElement('h3');
    nameEl.innerText = name;
    nameEl.classList.add('team-list__name')
    const description = document.createElement('p');
    description.innerText = position;

    box.append(nameEl, description);

    descriptionBlock.append(link, box);

    cardItem.append(imgEl, descriptionBlock);

    return cardItem;
}

const createModal = () => {
    const backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');

    const modalWindow = document.createElement('div');
    modalWindow.setAttribute('class', 'modal team-modal');

    const modaContent = document.createElement('div');
    modaContent.setAttribute('class', 'modal-block');

    const titleEl = document.createElement('h2');
    titleEl.innerText = "Developers team";
    titleEl.setAttribute('class', 'title modal__title team-modal__title');

    const closeButton = document.createElement('button');
    closeButton.setAttribute('class', 'btn-close fa-solid fa-xmark');

    const modalWindowList = document.createElement('ul');
    modalWindowList.classList.add('team-list');

    ref.body.classList.add('disabled-scroll');

    modalWindowList.append(...state.map(createCardItem));
    modaContent.append(titleEl, closeButton, modalWindowList);
    modalWindow.append(modaContent);
    backdrop.append(modalWindow);


    const onCloseBtnClick = () => removeModalWindow();

    const removeModalWindow = () => {
        backdrop.remove();
        ref.body.classList.remove('disabled-scroll');
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            removeModalWindow();
        }
    });

    backdrop.addEventListener('click', (event) => {
        if (event.target === backdrop)
            removeModalWindow();
    });

    closeButton.addEventListener('click', onCloseBtnClick);

    ref.footer.append(backdrop);
}



const onOpenBtnClick = () => {

    createModal();
}

ref.botton.addEventListener('click', onOpenBtnClick);