import { getInfo, onStartTest } from '../main';
import { dataFooterTest } from './data';
import { homePage } from './home';
import { more } from './more';

const btnBurger = document.getElementById('btn-burger');
const popupContainer = document.getElementById('popup-container');
const btnPopupClose = document.getElementById('btn-popup-close');
const popupStartTest = document.getElementById('popup-start-test');
const popupHome = document.getElementById('popup-home');
const popupInfo = document.getElementById('popup-info');
const home = document.getElementById('home-container');
const footerContent = document.getElementById('footer-content');

btnBurger?.addEventListener('click', btnBurgerClick);
btnPopupClose?.addEventListener('click', btnPopupCloseClick);
popupHome?.addEventListener('click', popupHomeClick);

function btnBurgerClick() {
  popupContainer.classList.toggle('show');
  // home.innerHTML = '';
  // footerContent.innerHTML = '';
  // home.innerHTML = homePage;
  const homeBtnTest = document.getElementById('home-btn-test');
  homeBtnTest?.addEventListener('click', onStartTest);
  const moreBtn = document.getElementById('home-btn-more');
  moreBtn?.addEventListener('click', getInfo);
  const homeBtnTop = document.getElementById('home-btn-top');
  homeBtnTop?.addEventListener('click', getInfo);
}

function popupHomeClick() {
  popupContainer.classList.toggle('show');
  home.innerHTML = '';
  footerContent.innerHTML = '';
  home.innerHTML = homePage;
  const homeBtnTest = document.getElementById('home-btn-test');
  homeBtnTest?.addEventListener('click', onStartTest);
  const moreBtn = document.getElementById('home-btn-more');
  moreBtn?.addEventListener('click', getInfo);
  const homeBtnTop = document.getElementById('home-btn-top');
  homeBtnTop?.addEventListener('click', getInfo);
}

function btnPopupCloseClick() {
  popupContainer.classList.toggle('show');
  // home.innerHTML = '';
  // footerContent.innerHTML = '';
  // home.innerHTML = homePage;
  const homeBtnTest = document.getElementById('home-btn-test');
  homeBtnTest?.addEventListener('click', onStartTest);
  const moreBtn = document.getElementById('home-btn-more');
  moreBtn?.addEventListener('click', getInfo);
  const homeBtnTop = document.getElementById('home-btn-top');
  homeBtnTop?.addEventListener('click', getInfo);
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
  footerContent.innerHTML = dataFooterTest;
  const homeBtnTestMore = window.document.getElementById('home-btn-test-more');
  const homeBtnTestBlack = window.document.getElementById(
    'home-btn-test-black'
  );
  homeBtnTestMore?.addEventListener('click', onStartTest);
  homeBtnTestBlack?.addEventListener('click', onStartTest);
}
