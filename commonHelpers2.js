(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="/test-iq/assets/image-qNql60TJ.png",f="/test-iq/assets/image--CG-LsGNE.png",g="/test-iq/assets/image---CfGRQqei.png",p=[{question:"Ваш пол?",answers:["Мужщина","Женщина"],shablon:"1"},{question:"Укажите ваш возраст:",answers:["До 18","От 18 до 28","От 29 до 35","От 36"],shablon:"1"},{question:"Виберите лишнее",answers:["Дом","Шалаш","Бунгало","Скамейка","Хижина"],shablon:"1"},{question:"Продолжите числовой ряд: 18 20 24 32",answers:["62","48","74","57","60","77"],shablon:"1"},{question:"Выберите цвет, который сейчас наиболее вам приятен:",answers:["#a8a8a8","#0000a9","#00a701","#f60100","#fdff19","#a95403","#000","#850068","#46b2ac"],shablon:"2"},{question:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",answers:["#a8a8a8","#46b2ac","#a95403","#00a701","#000","#f60100","#850068","#fdff19","#0000a9"],shablon:"2"},{question:"Какой из городов лишний?",answers:["Вашингтон","Лондон","Париж","Нью-Йорк ","Москва","Оттава"],shablon:"1"},{question:"Выберите правильную фигуру из четырёх пронумерованных.",picture:`${h}`,answers:["1","2","3","4 "],shablon:"3"},{question:"Вам привычнее и важнее:",answers:["Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее","Учитывать в ежедневной практике прошлый опыт"],shablon:"1"},{question:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",picture:`${f}`,answers:["Оно остроконечное","Оно устойчиво","Оно находится в состоянии равновесия"],shablon:"4"},{question:"Вставьте подходящее число",picture:`${g}`,answers:["34","36","53","44","66","42"],shablon:"3"}],y=`
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
`,w=`<div class="rezult-container">
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
  <button class="btn-coll">
    <img
      src="https://alexk.site/call.svg"
      alt="Call"
      width="29"
      height="29"
      title="Call"
    />
    <span class="btn-text">Позвонить и прослушать результат</span>
  </button>
</div>`;function E(s,i){let r=s,o,e;const t=setInterval(()=>{o=Math.floor(r/60),e=r%60,o=o<10?"0"+o:o,e=e<10?"0"+e:e,i.textContent=o+":"+e,--r<0&&(clearInterval(t),i.textContent="00:00")},1e3)}let m=0;function b(){const s=p[m],i=document.getElementById("question-title"),r=document.getElementById("answers-block");if(i.textContent=s.question,r.innerHTML="",s.shablon==="1")s.answers.forEach((e,t)=>{const c=document.createElement("label");c.className="answer-label";const n=document.createElement("input");n.type="radio",n.name="answer",n.value=t,n.className="answer-input";const a=document.createElement("span");a.className="radio-mark";const l=document.createElement("span");l.className="answer-text",l.textContent=e,c.appendChild(n),c.appendChild(a),c.appendChild(l),r.appendChild(c)});else if(s.shablon==="4"){const e=document.createElement("img");e.src=s.picture,e.alt="Question Image",e.className="question-image",r.appendChild(e),s.answers.forEach((t,c)=>{const n=document.createElement("label");n.className="answer-label";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=c,a.className="answer-input";const l=document.createElement("span");l.className="radio-mark";const d=document.createElement("span");d.className="answer-text",d.textContent=t,n.appendChild(a),n.appendChild(l),n.appendChild(d),r.appendChild(n),a.addEventListener("change",()=>{const u=document.getElementById("next-button");u.disabled=!1,u.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",u.style.color="#0d0c11"})})}else if(s.shablon==="2"){const e=document.createElement("div");e.className="container-color-ans",s.answers.forEach((t,c)=>{const n=document.createElement("label");n.className="answer-label",n.style.backgroundColor=t,n.style.width="75px",n.style.height="75px",n.style.display="inline-block",n.style.margin="5px",n.style.border="6px solid transparent";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=c,a.className="answer-input",a.style.display="none",n.addEventListener("click",()=>{document.querySelectorAll(".answer-label").forEach(d=>{d.style.border="2px solid transparent"}),n.style.border="6px solid #ffc700",a.checked=!0;const l=document.getElementById("next-button");l.disabled=!1,l.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",l.style.color="#0d0c11"}),n.appendChild(a),e.appendChild(n),r.appendChild(e)})}else if(s.shablon==="3"){const e=document.createElement("img");e.src=s.picture,e.alt="Question Image",e.className="question-image",r.appendChild(e);const t=document.createElement("div");t.className="container-btn-ans",s.answers.forEach((c,n)=>{const a=document.createElement("button");a.className="answer-button",a.textContent=c,a.addEventListener("click",()=>{document.querySelectorAll(".answer-button").forEach(u=>{u.style.border="2px solid transparent"}),a.style.border="6px solid #ffc700";const l=document.createElement("input");l.type="radio",l.name="answer",l.value=n,l.checked=!0,l.style.display="none",r.appendChild(l);const d=document.getElementById("next-button");d.disabled=!1,d.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",d.style.color="#0d0c11"}),t.appendChild(a)}),r.appendChild(t)}const o=document.getElementById("next-button");o.disabled=!0,o.style.background="#dadada",o.style.color="#8e8e8e",s.shablon==="1"&&document.querySelectorAll('input[type="radio"]').forEach(t=>{t.addEventListener("change",()=>{document.querySelector('input[type="radio"]:checked')?(o.disabled=!1,o.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",o.style.color="#0d0c11"):(o.disabled=!0,o.style.background="#dadada",o.style.color="#8e8e8e")})})}function x(){const s=document.getElementById("test-container");s.innerHTML="",s.innerHTML=y,setTimeout(()=>{s.innerHTML="",s.innerHTML=w;const i=document.getElementById("timer"),r=10*60;E(r,i)},5e3)}function q(){const s=document.querySelector('input[name="answer"]:checked');s&&(p[m].correctAnswer==parseInt(s.value),m++,m<p.length?b():x())}document.getElementById("next-button").addEventListener("click",q);b();
//# sourceMappingURL=commonHelpers2.js.map
