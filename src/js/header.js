import { getInfo, onStartTest } from '../main';
import { homePage } from './home';
import { more } from './more';
import { questionShablon } from './question';
import { loadQuestion, selectAnswer } from './test';

const btnBurger = document.getElementById('btn-burger');
const popupContainer = document.getElementById('popup-container');
const btnPopupClose = document.getElementById('btn-popup-close');
const popupStartTest = document.getElementById('popup-start-test');
const popupHome = document.getElementById('popup-home');
const popupInfo = document.getElementById('popup-info');
const home = document.getElementById('home-container');

btnBurger?.addEventListener('click', btnBurgerClick);
btnPopupClose?.addEventListener('click', btnBurgerClick);
popupHome?.addEventListener('click', btnBurgerClick);

function btnBurgerClick() {
  popupContainer.classList.toggle('show');
  home.innerHTML = '';
  home.innerHTML = homePage;
  const homeBtnTest = document.getElementById('home-btn-test');
  homeBtnTest?.addEventListener('click', onStartTest);
  const moreBtn = document.getElementById('home-btn-more');
  moreBtn?.addEventListener('click', getInfo);
}

popupStartTest?.addEventListener('click', popupStartTestClick);

function popupStartTestClick() {
  home.innerHTML = '';
  onStartTest();
  popupContainer.classList.toggle('show');
}
popupInfo?.addEventListener('click', getInfos);
function getInfos() {
  home.innerHTML = '';
  home.innerHTML = more;
  popupContainer.classList.toggle('show');
  const homeBtnTestMore = window.document.getElementById('home-btn-test-more');
  const homeBtnTestBlack = window.document.getElementById(
    'home-btn-test-black'
  );
  homeBtnTestMore?.addEventListener('click', onStartTest);
  homeBtnTestBlack?.addEventListener('click', onStartTest);
}
