import { loadQuestion, selectAnswer } from './js/test';
import { homePage } from './js/home';
import { questionShablon } from './js/question';
import { more } from './js/more';
import './js/header';

const home = document.getElementById('home-container');

home.innerHTML = homePage;

document.addEventListener('DOMContentLoaded', () => {
  const moreBtn = document.getElementById('home-btn-more');
  if (moreBtn) {
    moreBtn.addEventListener('click', addMore);
  }
});

function addMore() {
  home.insertAdjacentHTML('beforeend', more);
  const delMoreBtn = document.getElementById('del-home-btn-more');
  delMoreBtn.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const homeBtnTest = document.getElementById('home-btn-test');
  if (homeBtnTest) {
    homeBtnTest.addEventListener('click', onStartTest);
  }
});

function onStartTest() {
  home.innerHTML = '';
  home.innerHTML = questionShablon;

  loadQuestion();

  document
    .getElementById('next-button')
    .addEventListener('click', selectAnswer);
}
