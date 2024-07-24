import photo from '../img/iq.png';
import arrov from '../img/arrov-top.svg';

export const homePage = `
<div id="home-container" class="container">
  <p class="home-pretext">Пройдите точный и быстрый</p>
  <h1 class="home-head">тест на <br/> определение <br/> IQ</h1>
  <img class="home-pfoto" src="${photo}" alt="photo" width="178px" height="150px"/>
  <button id="home-btn-test" type="button">Пройти тест</button>
  <p class="home-text-akc">
    И получите рекомендации по развитию своего интеллекта<br/>
    <span class="home-text"
      >и улучшению финансового благосостояния и личной жизни</span
    >
  </p>

  <div class="home-btn-top">
    <img src="${arrov}" alt="arrov" />
  </div>
  <div id="del-home-btn-more">
  <span id="home-btn-more">Подробнее</span>
  </div>
</div>
`;
