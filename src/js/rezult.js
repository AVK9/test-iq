import call from '../img/call.svg';
import { dataApi } from './api';

export const rezult = `<div class="rezult-container container">
  <h2 class="rezult-name">Ваш результат рассчитан:</h2>
  <p class="rezult-text">
    <span class="rezult-text-aktsent"> Вы относитесь к 3%</span> респондентов,
    чей уровень интеллекта более чем на 15 пунктов отличается от среднего в
    большую или меньшую сторону!
  </p>
  <h3 class="rezult-lozung">Скорее получите свой результат!</h3>
  <div class="table-box">
    <p class="table-text">
      В целях защиты персональных данных результат теста, их подробная
      интерпретация и рекомендации доступны в виде голосового сообщения по
      звонку с вашего мобильного телефона
    </p>
  </div>
  <p class="call-text">
    Звоните скорее, запись доступна всего
    <span class="timer-text" id="timer"></span> минут
  </p>
  <button id="btn-coll">
    <img
      src=${call}
      alt="Call"
      width="29"
      height="29"
      title="Call"
    />
    <span class="btn-text">Позвонить и прослушать результат</span>
          <div class="rez-moon-l"></div>
        <div class="rez-moon-r"></div>
    </button>
  <div id="person-info"></div>
</div>`;

let interval;

export function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;

  interval = setInterval(() => {
    minutes = Math.floor(timer / 60);
    seconds = timer % 60;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = '00:00';
    }
    const btnColl = document.getElementById('btn-coll');
    btnColl?.addEventListener('click', () => stopTimer(display));
  }, 1000);
}

function stopTimer(display) {
  clearInterval(interval);
  display.textContent = '00:00';
}

export function onShowPerson() {
  dataApi()
    .then(resp => {
      personData(resp);
    })
    .catch(error => {
      console.log(error);
    });
  setTimeout(() => {
    document.location.reload();
  }, 9000);
}

function personData(resp) {
  const personInfo = document.getElementById('person-info');
  personInfo.innerHTML = `
  <ul>
    <li>Имя: <span class="person-info">${resp.name}</span></li>
    <li>Год рождения: <span class="person-info">${resp.birth_year}</span></li>
    <li>Пол: <span class="person-info">${resp.gender}</span></li>
    <li>Рост: <span class="person-info">${resp.height}</span></li>
    <li>Вес: <span class="person-info">${resp.mass}</span></li>
    <li>Цвет глаз: <span class="person-info">${resp.hair_color}</span></li>
    <li>Цвет волос:<span class="person-info"> ${resp.eye_color}</span></li>
    <li>Цвет кожи: <span class="person-info">${resp.skin_color}</span></li>
  </ul>
 `;
}
