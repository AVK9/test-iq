const btnBurger = document.getElementById('btn-burger');
const popupContainer = document.getElementById('popup-container');
const btnPopupClose = document.getElementById('btn-popup-close');

document.addEventListener('DOMContentLoaded', () => {
  if (btnBurger) {
    btnBurger.addEventListener('click', btnBurgerClick);
  }
  if (btnPopupClose) {
    btnPopupClose.addEventListener('click', btnBurgerClick);
  }
});

function btnBurgerClick() {
  popupContainer.classList.toggle('show');
}
