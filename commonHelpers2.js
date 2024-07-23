import{a as h}from"./assets/vendor-WsyFh4ar.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=l(t);fetch(t.href,n)}})();const g="/test-iq/assets/image-qNql60TJ.png",y="/test-iq/assets/image--CG-LsGNE.png",E="/test-iq/assets/image---CfGRQqei.png",m=[{question:"Ваш пол?",answers:["Мужщина","Женщина"],shablon:"1"},{question:"Укажите ваш возраст:",answers:["До 18","От 18 до 28","От 29 до 35","От 36"],shablon:"1"},{question:"Виберите лишнее:",answers:["Дом","Шалаш","Бунгало","Скамейка","Хижина"],shablon:"1"},{question:"Продолжите числовой ряд: <br /> 18 20 24 32",answers:["62","48","74","57","60","77"],shablon:"1"},{question:"Выберите цвет, который сейчас наиболее вам приятен:",answers:["#a8a8a8","#0000a9","#00a701","#f60100","#fdff19","#a95403","#000","#850068","#46b2ac"],shablon:"2"},{question:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",answers:["#a8a8a8","#46b2ac","#a95403","#00a701","#000","#f60100","#850068","#fdff19","#0000a9"],shablon:"2"},{question:"Какой из городов лишний?",answers:["Вашингтон","Лондон","Париж","Нью-Йорк ","Москва","Оттава"],shablon:"1"},{question:"Выберите правильную фигуру из четырёх пронумерованных.",picture:`${g}`,answers:["1","2","3","4 "],shablon:"3"},{question:"Вам привычнее и важнее:",answers:["Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее","Учитывать в ежедневной практике прошлый опыт"],shablon:"1"},{question:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",picture:`${y}`,answers:["Оно остроконечное","Оно устойчиво","Оно находится в состоянии равновесия"],shablon:"4"},{question:"Вставьте подходящее число",picture:`${E}`,answers:["34","36","53","44","66","42"],shablon:"3"}],w='<div class="data-footer"> TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU <br/> DE DIVERTISMENT. PRIN FOLOSIREA LUI <br/> DECLARATI CA AVETI 18 ANI IMPLINITI.  </div>',I=`
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
`;function x(e){const c=document.getElementById("progress-bar"),l=e/m.length*100;c.style.width=`${l}%`}const C="/test-iq/assets/call-BdpohKNc.svg",v=h.create({baseURL:"https://swapi.dev/api/people/1/"}),q=async()=>{const{data:e}=await v.get("");return e},L=`<div class="rezult-container">
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
      src=${C}
      alt="Call"
      width="29"
      height="29"
      title="Call"
    />
    <span class="btn-text">Позвонить и прослушать результат</span>
  </button>
  <div id="person-info"></div>
</div>`;let b;function N(e,c){let l=e,o,t;b=setInterval(()=>{o=Math.floor(l/60),t=l%60,o=o<10?"0"+o:o,t=t<10?"0"+t:t,c.textContent=o+":"+t,--l<0&&(clearInterval(b),c.textContent="00:00"),document.getElementById("btn-coll").addEventListener("click",()=>B(c))},1e3)}function B(e){clearInterval(b),e.textContent="00:00"}function T(){q().then(e=>{k(e)}).catch(e=>{console.log(e)})}function k(e){const c=document.getElementById("person-info");c.innerHTML=`
  <ul>
    <li>Имя: <span class="person-info">${e.name}</span></li>
    <li>Год рождения: <span class="person-info">${e.birth_year}</span></li>
    <li>Пол: <span class="person-info">${e.gender}</span></li>
    <li>Рост: <span class="person-info">${e.height}</span></li>
    <li>Вес: <span class="person-info">${e.mass}</span></li>
    <li>Цвет глаз: <span class="person-info">${e.hair_color}</span></li>
    <li>Цвет волос:<span class="person-info"> ${e.eye_color}</span></li>
    <li>Цвет кожи: <span class="person-info">${e.skin_color}</span></li>
  </ul>
 `}let p=0;function f(){const e=m[p],c=document.getElementById("question-title"),l=document.getElementById("answers-block");if(c.innerHTML=e.question,l.innerHTML="",x(p),e.shablon==="1")e.answers.forEach((t,n)=>{const i=document.createElement("label");i.className="answer-label";const s=document.createElement("input");s.type="radio",s.name="answer",s.value=n,s.className="answer-input";const a=document.createElement("span");a.className="radio-mark";const r=document.createElement("span");r.className="answer-text",r.textContent=t,i.appendChild(s),i.appendChild(a),i.appendChild(r),l.appendChild(i)});else if(e.shablon==="4"){const t=document.createElement("img");t.src=e.picture,t.alt="Question Image",t.className="question-image",l.appendChild(t),e.answers.forEach((n,i)=>{const s=document.createElement("label");s.className="answer-label";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=i,a.className="answer-input";const r=document.createElement("span");r.className="radio-mark";const d=document.createElement("span");d.className="answer-text",d.textContent=n,s.appendChild(a),s.appendChild(r),s.appendChild(d),l.appendChild(s),a.addEventListener("change",()=>{const u=document.getElementById("next-button");u.disabled=!1,u.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",u.style.color="#0d0c11"})})}else if(e.shablon==="2"){const t=document.createElement("div");t.className="container-color-ans",e.answers.forEach((n,i)=>{const s=document.createElement("label");s.className="answer-label",s.style.backgroundColor=n,s.style.width="75px",s.style.height="75px",s.style.display="inline-block",s.style.margin="5px",s.style.border="6px solid transparent";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=i,a.className="answer-input",a.style.display="none",s.addEventListener("click",()=>{document.querySelectorAll(".answer-label").forEach(d=>{d.style.border="2px solid transparent"}),s.style.border="6px solid #ffc700",a.checked=!0;const r=document.getElementById("next-button");r.disabled=!1,r.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",r.style.color="#0d0c11"}),s.appendChild(a),t.appendChild(s),l.appendChild(t)})}else if(e.shablon==="3"){const t=document.createElement("img");t.src=e.picture,t.alt="Question Image",t.className="question-image",l.appendChild(t);const n=document.createElement("div");n.className="container-btn-ans",e.answers.forEach((i,s)=>{const a=document.createElement("button");a.className="answer-button",a.textContent=i,a.addEventListener("click",()=>{document.querySelectorAll(".answer-button").forEach(u=>{u.style.border="2px solid transparent"}),a.style.border="6px solid #ffc700";const r=document.createElement("input");r.type="radio",r.name="answer",r.value=s,r.checked=!0,r.style.display="none",l.appendChild(r);const d=document.getElementById("next-button");d.disabled=!1,d.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",d.style.color="#0d0c11"}),n.appendChild(a)}),l.appendChild(n)}const o=document.getElementById("next-button");o.disabled=!0,o.style.background="#dadada",o.style.color="#8e8e8e",e.shablon==="1"&&document.querySelectorAll('input[type="radio"]').forEach(n=>{n.addEventListener("change",()=>{document.querySelector('input[type="radio"]:checked')?(o.disabled=!1,o.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",o.style.color="#0d0c11"):(o.disabled=!0,o.style.background="#dadada",o.style.color="#8e8e8e")})})}function A(){const e=document.getElementById("test-container");e.innerHTML="",e.innerHTML=I,setTimeout(()=>{e.innerHTML="",e.innerHTML=L;const c=document.getElementById("timer"),l=10*60;N(l,c);const o=document.getElementById("header-name");o.innerHTML="Готово!";const t=document.getElementById("footer-content");t.innerHTML=w,document.getElementById("btn-coll").addEventListener("click",T)},5e3)}function M(){const e=document.querySelector('input[name="answer"]:checked');e&&(m[p].correctAnswer,parseInt(e.value),p++,p<m.length?f():A())}document.getElementById("next-button").addEventListener("click",M);f();
//# sourceMappingURL=commonHelpers2.js.map
