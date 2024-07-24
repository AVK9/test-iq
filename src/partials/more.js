import picture from '../img/iq.png';
import coyotDown from '../img/coyot-down.svg';
import coyotTop from '../img/coyot-top.svg';
import photo from '../img/325-01.png';
import { questionShablon } from '../js/question';
import { loadQuestion, selectAnswer } from '../js/test';

export const more = `
<div class="more-container">
  <div class="more-blue-box">
  <div class="more-blue-box-top"></div>
    <div class="more-blue-text">
    <img
      class="coyot-top"
      src="${coyotTop}"
      alt="coyotTop"
      width="23px"
      height="23px"
    />
      Профессиональный IQ-тест позволяет не только определить коэффициент вашего
      интеллекта, но и выработать список рекомендаций для повышения этого
      показателя.
      <div class="coyot-down-box">
          <img
      class="coyot-down"
      src="${coyotDown}"
      alt="coyotTop"
      width="23px"
      height="23px"
    /></div>
    </div>
  </div>
  <div class="more-white-box">
    <p class="more-white-text">
      Также по результатам теста
      <span class="more-white-text-bold"> вы получите </span> подробные
      <span class="more-white-text-bold"> советы </span> по определению наиболее
      перспективной
      <span class="more-white-text-bold"
        >для вашего типа
        <span class="more-white-text-bold">интеллекта</span> сферы
        деятельности</span
      >, которая принесет вам скорейший финансовый результат.
    </p>
    <img
      class="more-pfoto"
      src="${photo}"
      alt="photo"
      width="238px"
      height="180px"
    />
    <button id="home-btn-test-more" class="home-btn-test-more btn-st-tes" type="button">
      Пройти тест
    </button>
  </div>
  <div class="more-black-box">
    <p class="more-black-text">
      Прохождение теста займет у вас не более
      <span class="more-black-text-bold">12 минут</span>, а его результаты вы
      сможете
      <span class="more-black-text-bold"> использовать всю жизнь. </span>
    </p>
    <div class="more-table">
      <p class="more-table-text">
        Профессиональная интерпретация и детально
        <span class="more-table-text-bold">проработанные рекомендации</span>
        позволят вам качественно
        <span class="more-table-text-bold"
          >изменить все аспекты своей жизни:</span
        >
        от финансового до любовного.
      </p>
    </div>
    <button id="home-btn-test-black" type="button" class="home-btn-test-black btn-st-tes">
      Пройти тест
    </button>
  </div>
</div>
`;
// const home = document.getElementById('home-container');

// document.addEventListener('DOMContentLoaded', () => {
//   const homeBtnTestMore = document.getElementById('home-btn-test-more');
//   if (homeBtnTestMore) {
//     homeBtnTestMore.addEventListener('click', onStartTest);
//     console.log('sdfsdfsdfdsfsdf2222');
//   }
// });
// console.log('sdfsdfsdfdsfsdf');
// function onStartTest() {
//   home.innerHTML = '';
//   home.innerHTML = questionShablon;

//   loadQuestion();

//   document
//     .getElementById('next-button')
//     .addEventListener('click', selectAnswer);
// }
//-------------------