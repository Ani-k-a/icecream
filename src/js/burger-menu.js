const ref = {
    openBtn: document.querySelector('.btn-menu'),
    header: document.querySelector('.header-container'),
    navBlock: document.querySelector('.nav'),
    navigation: document.querySelector('.nav-list'),
    item: document.querySelectorAll('.nav-list__item'),
    byBtn: document.querySelector('.header-btn')
};
console.log(ref.item)

const createBtn = () => {
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn-close fa-solid fa-xmark');

    const onCloseBtnClick = () => {
        ref.header.classList.remove('is-open');
        ref.navBlock.classList.remove('nav-block__is-open');
        ref.navigation.classList.remove('nav__is-open');
        ref.item.forEach(el => el.classList.remove('.nav-list__item__is-open'));
        ref.openBtn.classList.remove('btn__is-hiden');
        ref.byBtn.classList.remove('header-btn_is-hidden');
        btn.remove();
    }
    btn.addEventListener('click', onCloseBtnClick);
    ref.header.append(btn);
}

const onOpenBtnClick = () => {
    ref.header.classList.add('is-open');
    ref.navBlock.classList.add('nav-block__is-open');
    ref.navigation.classList.add('nav__is-open');
    ref.item.forEach(el => el.classList.add('.nav-list__item__is-open'));
    console.log(ref.item)
    ref.openBtn.classList.add('btn__is-hiden');
    ref.byBtn.classList.add('header-btn_is-hidden');
    createBtn();
}

ref.openBtn.addEventListener('click', onOpenBtnClick);