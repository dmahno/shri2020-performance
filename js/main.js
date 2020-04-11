let btns = document.querySelector('#btns');
(btns.querySelector('.button_yellow').onclick = () => {
  (document.querySelector('#purchase').style.display = 'block'),
    (document.querySelector('#desc').style.display = 'none'),
    (btns.style.display = 'none');
}),
  (document.querySelector('.header-menu__switcher').onclick = () => {
    document
      .querySelector('.header-menu')
      .classList.toggle('header-menu_active');
  });
