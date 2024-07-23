import{a as f}from"./assets/vendor-WsyFh4ar.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=l(e);fetch(e.href,n)}})();const h="/test-iq/assets/image-qNql60TJ.png",g="/test-iq/assets/image--CG-LsGNE.png",y="/test-iq/assets/image---CfGRQqei.png",m=[{question:"Ваш пол?",answers:["Мужщина","Женщина"],shablon:"1"},{question:"Укажите ваш возраст:",answers:["До 18","От 18 до 28","От 29 до 35","От 36"],shablon:"1"},{question:"Виберите лишнее:",answers:["Дом","Шалаш","Бунгало","Скамейка","Хижина"],shablon:"1"},{question:"Продолжите числовой ряд: <br /> 18 20 24 32",answers:["62","48","74","57","60","77"],shablon:"1"},{question:"Выберите цвет, который сейчас наиболее вам приятен:",answers:["#a8a8a8","#0000a9","#00a701","#f60100","#fdff19","#a95403","#000","#850068","#46b2ac"],shablon:"2"},{question:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",answers:["#a8a8a8","#46b2ac","#a95403","#00a701","#000","#f60100","#850068","#fdff19","#0000a9"],shablon:"2"},{question:"Какой из городов лишний?",answers:["Вашингтон","Лондон","Париж","Нью-Йорк ","Москва","Оттава"],shablon:"1"},{question:"Выберите правильную фигуру из четырёх пронумерованных.",picture:`${h}`,answers:["1","2","3","4 "],shablon:"3"},{question:"Вам привычнее и важнее:",answers:["Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее","Учитывать в ежедневной практике прошлый опыт"],shablon:"1"},{question:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",picture:`${g}`,answers:["Оно остроконечное","Оно устойчиво","Оно находится в состоянии равновесия"],shablon:"4"},{question:"Вставьте подходящее число",picture:`${y}`,answers:["34","36","53","44","66","42"],shablon:"3"}],E='<div class="data-footer"> TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU <br/> DE DIVERTISMENT. PRIN FOLOSIREA LUI <br/> DECLARATI CA AVETI 18 ANI IMPLINITI.  </div>',w=`
<div class="loader-container">
  <h2 class="loader-mame">Обработка результатов</h2>
  <div class="loader-box">
    <span class="loader"></span>
  </div>

  <p class="loader-text">
    Определение стиля
    мышления..................................................................
  </p>
</div>
`;function I(t){const i=document.getElementById("progress-bar"),l=t/m.length*100;i.style.width=`${l}%`}const x="/test-iq/assets/call-BdpohKNc.svg",C=f.create({baseURL:"https://swapi.dev/api/people/1/"}),v=async()=>{const{data:t}=await C.get("");return t},q=`<div class="rezult-container">
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
      src=${x}
      alt="Call"
      width="29"
      height="29"
      title="Call"
    />
    <span class="btn-text">Позвонить и прослушать результат</span>
  </button>
  <div id="person-info"></div>
</div>`;function N(t,i){let l=t,o,e;const n=setInterval(()=>{o=Math.floor(l/60),e=l%60,o=o<10?"0"+o:o,e=e<10?"0"+e:e,i.textContent=o+":"+e,--l<0&&(clearInterval(n),i.textContent="00:00")},1e3)}function L(){v().then(t=>{B(t)}).catch(t=>{console.log(t)})}function B(t){const i=document.getElementById("person-info");i.innerHTML=`
  <ul>
    <li>Имя: <span class="person-info">${t.name}</span></li>
    <li>Год рождения: <span class="person-info">${t.birth_year}</span></li>
    <li>Пол: <span class="person-info">${t.gender}</span></li>
    <li>Рост: <span class="person-info">${t.height}</span></li>
    <li>Вес: <span class="person-info">${t.mass}</span></li>
    <li>Цвет глаз: <span class="person-info">${t.hair_color}</span></li>
    <li>Цвет волос:<span class="person-info"> ${t.eye_color}</span></li>
    <li>Цвет кожи: <span class="person-info">${t.skin_color}</span></li>
  </ul>
 `}let p=0;function b(){const t=m[p],i=document.getElementById("question-title"),l=document.getElementById("answers-block");if(i.innerHTML=t.question,l.innerHTML="",I(p),t.shablon==="1")t.answers.forEach((e,n)=>{const c=document.createElement("label");c.className="answer-label";const s=document.createElement("input");s.type="radio",s.name="answer",s.value=n,s.className="answer-input";const a=document.createElement("span");a.className="radio-mark";const r=document.createElement("span");r.className="answer-text",r.textContent=e,c.appendChild(s),c.appendChild(a),c.appendChild(r),l.appendChild(c)});else if(t.shablon==="4"){const e=document.createElement("img");e.src=t.picture,e.alt="Question Image",e.className="question-image",l.appendChild(e),t.answers.forEach((n,c)=>{const s=document.createElement("label");s.className="answer-label";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=c,a.className="answer-input";const r=document.createElement("span");r.className="radio-mark";const d=document.createElement("span");d.className="answer-text",d.textContent=n,s.appendChild(a),s.appendChild(r),s.appendChild(d),l.appendChild(s),a.addEventListener("change",()=>{const u=document.getElementById("next-button");u.disabled=!1,u.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",u.style.color="#0d0c11"})})}else if(t.shablon==="2"){const e=document.createElement("div");e.className="container-color-ans",t.answers.forEach((n,c)=>{const s=document.createElement("label");s.className="answer-label",s.style.backgroundColor=n,s.style.width="75px",s.style.height="75px",s.style.display="inline-block",s.style.margin="5px",s.style.border="6px solid transparent";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=c,a.className="answer-input",a.style.display="none",s.addEventListener("click",()=>{document.querySelectorAll(".answer-label").forEach(d=>{d.style.border="2px solid transparent"}),s.style.border="6px solid #ffc700",a.checked=!0;const r=document.getElementById("next-button");r.disabled=!1,r.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",r.style.color="#0d0c11"}),s.appendChild(a),e.appendChild(s),l.appendChild(e)})}else if(t.shablon==="3"){const e=document.createElement("img");e.src=t.picture,e.alt="Question Image",e.className="question-image",l.appendChild(e);const n=document.createElement("div");n.className="container-btn-ans",t.answers.forEach((c,s)=>{const a=document.createElement("button");a.className="answer-button",a.textContent=c,a.addEventListener("click",()=>{document.querySelectorAll(".answer-button").forEach(u=>{u.style.border="2px solid transparent"}),a.style.border="6px solid #ffc700";const r=document.createElement("input");r.type="radio",r.name="answer",r.value=s,r.checked=!0,r.style.display="none",l.appendChild(r);const d=document.getElementById("next-button");d.disabled=!1,d.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",d.style.color="#0d0c11"}),n.appendChild(a)}),l.appendChild(n)}const o=document.getElementById("next-button");o.disabled=!0,o.style.background="#dadada",o.style.color="#8e8e8e",t.shablon==="1"&&document.querySelectorAll('input[type="radio"]').forEach(n=>{n.addEventListener("change",()=>{document.querySelector('input[type="radio"]:checked')?(o.disabled=!1,o.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",o.style.color="#0d0c11"):(o.disabled=!0,o.style.background="#dadada",o.style.color="#8e8e8e")})})}function T(){const t=document.getElementById("test-container");t.innerHTML="",t.innerHTML=w,setTimeout(()=>{t.innerHTML="",t.innerHTML=q;const i=document.getElementById("timer"),l=10*60;N(l,i);const o=document.getElementById("header-name");o.innerHTML="Готово!";const e=document.getElementById("footer-content");e.innerHTML=E,document.getElementById("btn-coll").addEventListener("click",L)},5e3)}function k(){const t=document.querySelector('input[name="answer"]:checked');t&&(m[p].correctAnswer,parseInt(t.value),p++,p<m.length?b():T())}document.getElementById("next-button").addEventListener("click",k);b();
//# sourceMappingURL=commonHelpers2.js.map
