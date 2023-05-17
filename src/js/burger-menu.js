const ref = {
    openBtn: document.querySelector('.btn-menu'),
    header: document.querySelector('.header-container'),
    navBlock: document.querySelector('.nav'),
    navigation: document.querySelector('.nav-list'),
    item: document.querySelectorAll('.nav-list__item'),
    btnsBlock: document.querySelector('.burger'),
    byBtn: document.querySelector('.header-btn'),
    body: document.querySelector('body')
};

const createBtn = () => {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn-close fa-solid fa-xmark');

    const onCloseBtnClick = () => {
        ref.header.classList.remove('is-open');
        ref.navBlock.classList.remove('nav-block__is-open');
        ref.navigation.classList.remove('nav__is-open');
        ref.item.forEach(el => el.classList.remove('nav-list__item__is-open'));
        ref.btnsBlock.classList.remove('burger__is-open');
        ref.openBtn.classList.remove('btn__is-hiden');
        ref.byBtn.classList.remove('header-btn_is-hidden');
        ref.body.classList.remove('disabled-scroll');
        btn.remove();
    }
    btn.addEventListener('click', onCloseBtnClick);

    const onLinkClick = (ev) => {
        console.log('link')
        if (ev.target.tagName === 'A' || ev.target.tagName === 'BUTTON' || ev.target.tagName === 'IMG') { onCloseBtnClick() }
    };

    ref.header.addEventListener('click', (ev) => {
        onLinkClick(ev);
        ref.header.removeEventListener('click', onLinkClick, true);
    })

    ref.header.append(btn);
}

const onOpenBtnClick = () => {
    ref.header.classList.add('is-open');
    ref.navBlock.classList.add('nav-block__is-open');
    ref.navigation.classList.add('nav__is-open');
    ref.item.forEach(el => el.classList.add('nav-list__item__is-open'));
    ref.btnsBlock.classList.add('burger__is-open');
    ref.openBtn.classList.add('btn__is-hiden');
    ref.byBtn.classList.add('header-btn_is-hidden');
    ref.body.classList.add('disabled-scroll');
    createBtn();
}



ref.openBtn.addEventListener('click', onOpenBtnClick);