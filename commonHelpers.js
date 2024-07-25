import{a as Q}from"./assets/vendor-WsyFh4ar.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const z="/test-iq/assets/image-qNql60TJ.png",O="/test-iq/assets/image--CG-LsGNE.png",P="/test-iq/assets/image---CfGRQqei.png",M="/test-iq/assets/iq-CBAvcV2s.png",f=[{question:"Ваш пол?",answers:["Мужщина","Женщина"],shablon:"1"},{question:"Укажите ваш возраст:",answers:["До 18","От 18 до 28","От 29 до 35","От 36"],shablon:"1"},{question:"Виберите лишнее:",answers:["Дом","Шалаш","Бунгало","Скамейка","Хижина"],shablon:"1"},{question:"Продолжите числовой ряд: <br /> 18 20 24 32",answers:["62","48","74","57","60","77"],shablon:"1"},{question:"Выберите цвет, который сейчас наиболее вам приятен:",answers:["#a8a8a8","#0000a9","#00a701","#f60100","#fdff19","#a95403","#000","#850068","#46b2ac"],shablon:"2"},{question:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",answers:["#a8a8a8","#46b2ac","#a95403","#00a701","#000","#f60100","#850068","#fdff19","#0000a9"],shablon:"2"},{question:"Какой из городов лишний?",answers:["Вашингтон","Лондон","Париж","Нью-Йорк ","Москва","Оттава"],shablon:"1"},{question:"Выберите правильную фигуру из четырёх пронумерованных.",picture:`${z}`,answers:["1","2","3","4 "],shablon:"3"},{question:"Вам привычнее и важнее:",answers:["Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее","Учитывать в ежедневной практике прошлый опыт"],shablon:"1"},{question:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",picture:`${O}`,answers:["Оно остроконечное","Оно устойчиво","Оно находится в состоянии равновесия"],shablon:"4"},{question:"Вставьте подходящее число",picture:`${P}`,answers:["34","36","53","44","66","42"],shablon:"3"}],R=`<div class="name">
        <img src=${M} alt="IQ" width="48" />
        <h1 id="header-name">Тест на определение IQ</h1>
      </div>`,D=`<div class="name">
        <img src=${M} alt="IQ" width="48" />
        <h1 id="header-name">Готово!</h1>
      </div>`,N="&copy; 2024 IQ Test",V='<div class="data-footer"> TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU <br/> DE DIVERTISMENT. PRIN FOLOSIREA LUI <br/> DECLARATI CA AVETI 18 ANI IMPLINITI.  </div>',Z="data:image/svg+xml,%3csvg%20width='8'%20height='8'%20viewBox='0%200%208%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.45453%207.63636L4.45453%202.10454L6.99544%204.64545L7.63635%204L3.99999%200.363632L0.363625%204L1.00453%204.6409L3.54544%202.10454L3.54544%207.63636L4.45453%207.63636Z'%20fill='%230C0B10'/%3e%3c/svg%3e",H=`
<div id="home-container" class="container">
  <p class="home-pretext">Пройдите точный и быстрый</p>
  <h1 class="home-head">тест на <br/> определение <br/> IQ</h1>
  <img class="home-pfoto" src="${M}" alt="photo" width="178px" height="150px"/>
  <button id="home-btn-test" type="button">Пройти тест</button>
  <p class="home-text-akc">
    И получите рекомендации по развитию своего интеллекта<br/>
    <span class="home-text"
      >и улучшению финансового благосостояния и личной жизни</span
    >
  </p>

  <div id="home-btn-top">
    <img src="${Z}" alt="arrov" />
  </div>
  <div id="del-home-btn-more">
  <span id="home-btn-more">Подробнее</span>
  </div>
</div>
`,F="data:image/svg+xml,%3csvg%20width='23'%20height='23'%20viewBox='0%200%2023%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.5%20-2.71837e-05C18.5%20-2.70963e-05%2019.4333%200.383308%2020.3%201.14997C21.1333%201.94998%2021.8%202.98331%2022.3%204.24997C22.7667%205.51664%2023%206.86664%2023%208.29998C23%2010.5%2022.6167%2012.5666%2021.85%2014.5C21.05%2016.4666%2020.0833%2018.1166%2018.95%2019.45C17.8167%2020.8166%2016.7333%2021.7833%2015.7%2022.35L15.65%2022.35L13.9%2020.75L13.9%2020.05C14.7333%2019.2833%2015.5167%2018.1833%2016.25%2016.75C16.9833%2015.35%2017.35%2013.6166%2017.35%2011.55C17.35%2010.4833%2017.2%209.61664%2016.9%208.94997C16.6%208.28331%2016.15%207.54997%2015.55%206.74998C15.05%206.11664%2014.6833%205.56664%2014.45%205.09997C14.2167%204.63331%2014.1%204.06664%2014.1%203.39997C14.1%202.39997%2014.4333%201.58331%2015.1%200.949973C15.7333%200.31664%2016.5333%20-2.72682e-05%2017.5%20-2.71837e-05ZM3.59999%20-2.83989e-05C4.59999%20-2.83115e-05%205.51666%200.383307%206.34999%201.14997C7.18333%201.94997%207.85%202.98331%208.35%204.24997C8.81667%205.51664%209.05%206.86664%209.05%208.29997C9.05%2010.5%208.66666%2012.5666%207.89999%2014.5C7.1%2016.4666%206.13333%2018.1333%205%2019.5C3.86667%2020.8666%202.78333%2021.8166%201.75%2022.35L1.7%2022.35L1.39876e-07%2020.75L2.01072e-07%2020.05C0.833332%2019.2833%201.61666%2018.1833%202.34999%2016.75C3.08333%2015.35%203.45%2013.6166%203.45%2011.55C3.45%2010.4833%203.3%209.61664%203%208.94997C2.7%208.28331%202.25%207.54997%201.65%206.74997C1.15%206.11664%200.783323%205.56664%200.549989%205.09997C0.316658%204.63331%200.199999%204.06664%200.199999%203.39997C0.199999%202.39997%200.533333%201.58331%201.2%200.949972C1.83333%200.316639%202.63333%20-2.84834e-05%203.59999%20-2.83989e-05Z'%20fill='white'/%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20width='24'%20height='23'%20viewBox='0%200%2024%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.84845%2022.65C4.84845%2022.65%203.91512%2022.2667%203.04845%2021.5C2.21512%2020.7%201.54845%2019.6667%201.04845%2018.4C0.581788%2017.1333%200.34845%2015.7833%200.34845%2014.35C0.34845%2012.15%200.731785%2010.0833%201.49845%208.14999C2.29845%206.18332%203.26512%204.53332%204.39845%203.19999C5.53179%201.83332%206.61512%200.866655%207.64845%200.299988H7.69846L9.44846%201.89999V2.59999C8.61512%203.36665%207.83178%204.46665%207.09845%205.89999C6.36512%207.29999%205.99845%209.03332%205.99845%2011.1C5.99845%2012.1667%206.14846%2013.0333%206.44846%2013.7C6.74846%2014.3667%207.19845%2015.1%207.79845%2015.9C8.29845%2016.5333%208.66512%2017.0833%208.89845%2017.55C9.13179%2018.0167%209.24845%2018.5833%209.24845%2019.25C9.24845%2020.25%208.91512%2021.0667%208.24845%2021.7C7.61512%2022.3333%206.81512%2022.65%205.84845%2022.65ZM19.7485%2022.65C18.7485%2022.65%2017.8318%2022.2667%2016.9985%2021.5C16.1651%2020.7%2015.4985%2019.6667%2014.9985%2018.4C14.5318%2017.1333%2014.2985%2015.7833%2014.2985%2014.35C14.2985%2012.15%2014.6818%2010.0833%2015.4485%208.14999C16.2485%206.18332%2017.2151%204.51665%2018.3484%203.14999C19.4818%201.78332%2020.5651%200.83332%2021.5984%200.299988H21.6485L23.3484%201.89999V2.59999C22.5151%203.36665%2021.7318%204.46665%2020.9985%205.89999C20.2651%207.29999%2019.8985%209.03332%2019.8985%2011.1C19.8985%2012.1667%2020.0485%2013.0333%2020.3484%2013.7C20.6484%2014.3667%2021.0985%2015.1%2021.6985%2015.9C22.1985%2016.5333%2022.5651%2017.0833%2022.7985%2017.55C23.0318%2018.0167%2023.1485%2018.5833%2023.1485%2019.25C23.1485%2020.25%2022.8151%2021.0667%2022.1485%2021.7C21.5151%2022.3333%2020.7151%2022.65%2019.7485%2022.65Z'%20fill='white'/%3e%3c/svg%3e",_="/test-iq/assets/325-01-B9eOXIST.png",$=`
<div class="more-container container">
  <div class="more-blue-box">
  <div class="more-blue-box-top"></div>
    <div class="more-blue-text">
    <img
      class="coyot-top"
      src="${U}"
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
      src="${F}"
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
      src="${_}"
      alt="photo"
      width="238px"
      height="180px"
    />
    <button id="home-btn-test-more" type="button">
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
        <div class="more-moon-l"></div>
        <div class="more-moon-r"></div>
    </div>
    <button id="home-btn-test-black" type="button">
      Пройти тест
    </button>
  </div>

</div>
`,y=document.getElementById("btn-burger"),E=document.getElementById("popup-container"),C=document.getElementById("btn-popup-close"),w=document.getElementById("popup-start-test"),L=document.getElementById("popup-home"),I=document.getElementById("popup-info"),v=document.getElementById("home-container"),A=document.getElementById("footer-content");y==null||y.addEventListener("click",G);C==null||C.addEventListener("click",J);L==null||L.addEventListener("click",K);function G(){E.classList.toggle("show");const e=document.getElementById("home-btn-test");e==null||e.addEventListener("click",u);const t=document.getElementById("home-btn-more");t==null||t.addEventListener("click",p);const a=document.getElementById("home-btn-top");a==null||a.addEventListener("click",p)}function K(){E.classList.toggle("show"),v.innerHTML="",A.innerHTML="",v.innerHTML=H;const e=document.getElementById("home-btn-test");e==null||e.addEventListener("click",u);const t=document.getElementById("home-btn-more");t==null||t.addEventListener("click",p);const a=document.getElementById("home-btn-top");a==null||a.addEventListener("click",p)}function J(){E.classList.toggle("show");const e=document.getElementById("home-btn-test");e==null||e.addEventListener("click",u);const t=document.getElementById("home-btn-more");t==null||t.addEventListener("click",p);const a=document.getElementById("home-btn-top");a==null||a.addEventListener("click",p)}w==null||w.addEventListener("click",X);function X(){v.innerHTML="",u(),E.classList.toggle("show")}I==null||I.addEventListener("click",j);function j(){v.innerHTML="",v.innerHTML=$,E.classList.toggle("show"),A.innerHTML=N;const e=window.document.getElementById("home-btn-test-more"),t=window.document.getElementById("home-btn-test-black");e==null||e.addEventListener("click",u),t==null||t.addEventListener("click",u)}const W=`
<div id="test-container">
  <div class="progress-bar-container">
    <div class="progress-bar" id="progress-bar"></div>
  </div>
  <h2 id="question-title"></h2>
  <div id="answers-block"></div>

  <div class="btn-box">
    <button id="next-button" disabled>ДАЛЕЕ</button>
  </div>
</div>
`,Y=`
<div class="loader-container container">
  <h2 class="loader-mame">Обработка результатов</h2>
  <div class="loader-box">
    <span class="loader"></span>
  </div>

  <p class="loader-text">
    Определение стиля
    мышления. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
</div>
`;function ee(e){const t=document.getElementById("progress-bar"),a=e/f.length*100;t.style.width=`${a}%`}const te="/test-iq/assets/call-BdpohKNc.svg",ne=Q.create({baseURL:"https://swapi.dev/api/people/1/"}),se=async()=>{const{data:e}=await ne.get("");return e},oe=`<div class="rezult-container container">
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
      src=${te}
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
</div>`;let T;function ae(e,t){let a=e,l,n;T=setInterval(()=>{l=Math.floor(a/60),n=a%60,l=l<10?"0"+l:l,n=n<10?"0"+n:n,t.textContent=l+":"+n,--a<0&&(clearInterval(T),t.textContent="00:00");const s=document.getElementById("btn-coll");s==null||s.addEventListener("click",()=>ce(t))},1e3)}function ce(e){clearInterval(T),e.textContent="00:00"}function le(){se().then(e=>{ie(e)}).catch(e=>{console.log(e)}),setTimeout(()=>{document.location.reload()},9e3)}function ie(e){const t=document.getElementById("person-info");t.innerHTML=`
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
 `}let g=0;function S(){const e=f[g],t=document.getElementById("header-name"),a=document.getElementById("question-title"),l=document.getElementById("answers-block");if(a&&l&&t){if(t.innerHTML=R,a.innerHTML=e.question,l.innerHTML="",ee(g),e.shablon==="1")e.answers.forEach((s,d)=>{const r=document.createElement("label");r.className="answer-label";const o=document.createElement("input");o.type="radio",o.name="answer",o.value=d,o.className="answer-input";const c=document.createElement("span");c.className="radio-mark";const i=document.createElement("span");i.className="answer-text",i.textContent=s,r.appendChild(o),r.appendChild(c),r.appendChild(i),l.appendChild(r)});else if(e.shablon==="4"){const s=document.createElement("img");s.src=e.picture,s.alt="Question Image",s.className="question-image",l.appendChild(s),e.answers.forEach((d,r)=>{const o=document.createElement("label");o.className="answer-label";const c=document.createElement("input");c.type="radio",c.name="answer",c.value=r,c.className="answer-input";const i=document.createElement("span");i.className="radio-mark";const m=document.createElement("span");m.className="answer-text",m.textContent=d,o.appendChild(c),o.appendChild(i),o.appendChild(m),l.appendChild(o),c.addEventListener("change",()=>{const h=document.getElementById("next-button");h.disabled=!1,h.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",h.style.color="#0d0c11"})})}else if(e.shablon==="2"){const s=document.createElement("div");s.className="container-color-ans",e.answers.forEach((d,r)=>{const o=document.createElement("label");o.className="answer-label",o.style.backgroundColor=d,o.style.width="75px",o.style.height="75px",o.style.display="inline-block",o.style.margin="5px",o.style.border="6px solid transparent";const c=document.createElement("input");c.type="radio",c.name="answer",c.value=r,c.className="answer-input",c.style.display="none",o.addEventListener("click",()=>{document.querySelectorAll(".answer-label").forEach(m=>{m.style.border="2px solid transparent"}),o.style.border="6px solid #ffc700",c.checked=!0;const i=document.getElementById("next-button");i.disabled=!1,i.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",i.style.color="#0d0c11"}),o.appendChild(c),s.appendChild(o),l.appendChild(s)})}else if(e.shablon==="3"){const s=document.createElement("img");s.src=e.picture,s.alt="Question Image",s.className="question-image",l.appendChild(s);const d=document.createElement("div");d.className="container-btn-ans",e.answers.forEach((r,o)=>{const c=document.createElement("button");c.className="answer-button",c.textContent=r,c.addEventListener("click",()=>{document.querySelectorAll(".answer-button").forEach(h=>{h.style.border="2px solid transparent"}),c.style.border="6px solid #ffc700";const i=document.createElement("input");i.type="radio",i.name="answer",i.value=o,i.checked=!0,i.style.display="none",l.appendChild(i);const m=document.getElementById("next-button");m.disabled=!1,m.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",m.style.color="#0d0c11"}),d.appendChild(c)}),l.appendChild(d)}}else console.error('Elements "question-title" or "answers-block" not found.');const n=document.getElementById("next-button");n.disabled=!0,n.style.background="#dadada",n.style.color="#8e8e8e",e.shablon==="1"&&document.querySelectorAll('input[type="radio"]').forEach(d=>{d.addEventListener("change",()=>{document.querySelector('input[type="radio"]:checked')?(n.disabled=!1,n.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",n.style.color="#0d0c11"):(n.disabled=!0,n.style.background="#dadada",n.style.color="#8e8e8e")})})}function de(){const e=document.getElementById("test-container");e.innerHTML="",e.innerHTML=Y,setTimeout(()=>{e.innerHTML="",e.innerHTML=oe;const t=document.getElementById("timer"),a=10*60;ae(a,t);const l=document.getElementById("header-name");l.innerHTML=D;const n=document.getElementById("footer-content");n.innerHTML=V,document.getElementById("btn-coll").addEventListener("click",le)},5e3)}function re(){const e=document.querySelector('input[name="answer"]:checked');e&&(f[g].correctAnswer,parseInt(e.value),g++,g<f.length?S():de())}const q=document.getElementById("footer-content"),b=document.getElementById("home-container");b.innerHTML="";b.innerHTML=H;q.innerHTML="";const x=document.getElementById("home-btn-test");x==null||x.addEventListener("click",u);function u(){b.innerHTML="",b.innerHTML=W,q.innerHTML="",S(),document.getElementById("next-button").addEventListener("click",re)}const k=document.getElementById("home-btn-more");k==null||k.addEventListener("click",p);const B=document.getElementById("home-btn-top");B==null||B.addEventListener("click",p);function p(){b.innerHTML="",b.innerHTML=$,q.innerHTML=N;const e=window.document.getElementById("home-btn-test-more"),t=window.document.getElementById("home-btn-test-black");e==null||e.addEventListener("click",u),t==null||t.addEventListener("click",u)}
//# sourceMappingURL=commonHelpers.js.map
