import { dataFooterTest } from './js/data';
import './js/header';
import { homePage } from './js/home';
import { more } from './js/more';
import { questionShablon } from './js/question';
import { loadQuestion, selectAnswer } from './js/test';

const footerContent = document.getElementById('footer-content');
const home = document.getElementById('home-container');
home.innerHTML = '';
home.innerHTML = homePage;
footerContent.innerHTML = '';
const homeBtnTest = document.getElementById('home-btn-test');
homeBtnTest?.addEventListener('click', onStartTest);

export function onStartTest() {
  home.innerHTML = '';
  home.innerHTML = questionShablon;
  footerContent.innerHTML = '';

  loadQuestion();

  document
    .getElementById('next-button')
    .addEventListener('click', selectAnswer);
}

const moreBtn = document.getElementById('home-btn-more');
moreBtn?.addEventListener('click', getInfo);

const homeBtnTop = document.getElementById('home-btn-top');
homeBtnTop?.addEventListener('click', getInfo);

export function getInfo() {
  home.innerHTML = '';
  home.innerHTML = more;
  footerContent.innerHTML = dataFooterTest;
  const homeBtnTestMore = window.document.getElementById('home-btn-test-more');
  const homeBtnTestBlack = window.document.getElementById(
    'home-btn-test-black'
  );
  homeBtnTestMore?.addEventListener('click', onStartTest);
  homeBtnTestBlack?.addEventListener('click', onStartTest);
}
