(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();const p=[{question:"Ваш пол?",answers:["Мужщина","Женщина"],shablon:"1"},{question:"Укажите ваш возраст:",answers:["До 18","От 18 до 28","От 29 до 35","От 36"],shablon:"1"},{question:"Виберите лишнее",answers:["Дом","Шалаш","Бунгало","Скамейка","Хижина"],shablon:"1"},{question:"Продолжите числовой ряд: 18 20 24 32",answers:["62","48","74","57","60","77"],shablon:"1"},{question:"Выберите цвет, который сейчас наиболее вам приятен:",answers:["#a8a8a8","#0000a9","#00a701","#f60100","#fdff19","#a95403","#000","#850068","#46b2ac"],shablon:"2"},{question:"Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",answers:["#a8a8a8","#46b2ac","#a95403","#00a701","#000","#f60100","#850068","#fdff19","#0000a9"],shablon:"2"},{question:"Какой из городов лишний?",answers:["Вашингтон","Лондон","Париж","Нью-Йорк ","Москва","Оттава"],shablon:"1"},{question:"Выберите правильную фигуру из четырёх пронумерованных.",picture:"/img/image1.jpg",answers:["1","2","3","4 "],shablon:"3"},{question:"Вам привычнее и важнее:",answers:["Наслаждаться каждой минутой проведенного времени","Быть устремленными мыслями в будущее","Учитывать в ежедневной практике прошлый опыт"],shablon:"1"},{question:"Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",picture:"/img/image2.jpg",answers:["Оно остроконечное","Оно устойчиво","Оно находится в состоянии равновесия"],shablon:"4"},{question:"Вставьте подходящее число",picture:"/img/image3.jpg",answers:["34","36","53","44","66","42"],shablon:"3"}];let m=0,y=0;function b(){const o=p[m],i=document.getElementById("question-title"),c=document.getElementById("answers-block");if(i.textContent=o.question,c.innerHTML="",o.shablon==="1")o.answers.forEach((e,n)=>{const r=document.createElement("label");r.className="answer-label";const t=document.createElement("input");t.type="radio",t.name="answer",t.value=n,t.className="answer-input";const a=document.createElement("span");a.className="radio-mark";const s=document.createElement("span");s.className="answer-text",s.textContent=e,r.appendChild(t),r.appendChild(a),r.appendChild(s),c.appendChild(r)});else if(o.shablon==="4"){const e=document.createElement("img");e.src=o.picture,e.alt="Question Image",e.className="question-image",c.appendChild(e),o.answers.forEach((n,r)=>{const t=document.createElement("label");t.className="answer-label";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=r,a.className="answer-input";const s=document.createElement("span");s.className="radio-mark";const d=document.createElement("span");d.className="answer-text",d.textContent=n,t.appendChild(a),t.appendChild(s),t.appendChild(d),c.appendChild(t),a.addEventListener("change",()=>{const u=document.getElementById("next-button");u.disabled=!1,u.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",u.style.color="#0d0c11"})})}else if(o.shablon==="2"){const e=document.createElement("div");e.className="container-color-ans",o.answers.forEach((n,r)=>{const t=document.createElement("label");t.className="answer-label",t.style.backgroundColor=n,t.style.width="75px",t.style.height="75px",t.style.display="inline-block",t.style.margin="5px",t.style.border="6px solid transparent";const a=document.createElement("input");a.type="radio",a.name="answer",a.value=r,a.className="answer-input",a.style.display="none",t.addEventListener("click",()=>{document.querySelectorAll(".answer-label").forEach(d=>{d.style.border="2px solid transparent"}),t.style.border="6px solid #ffc700",a.checked=!0;const s=document.getElementById("next-button");s.disabled=!1,s.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",s.style.color="#0d0c11"}),t.appendChild(a),e.appendChild(t),c.appendChild(e)})}else if(o.shablon==="3"){const e=document.createElement("img");e.src=o.picture,e.alt="Question Image",e.className="question-image",c.appendChild(e);const n=document.createElement("div");n.className="container-btn-ans",o.answers.forEach((r,t)=>{const a=document.createElement("button");a.className="answer-button",a.textContent=r,a.addEventListener("click",()=>{document.querySelectorAll(".answer-button").forEach(u=>{u.style.border="2px solid transparent"}),a.style.border="6px solid #ffc700";const s=document.createElement("input");s.type="radio",s.name="answer",s.value=t,s.checked=!0,s.style.display="none",c.appendChild(s);const d=document.getElementById("next-button");d.disabled=!1,d.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",d.style.color="#0d0c11"}),n.appendChild(a)}),c.appendChild(n)}const l=document.getElementById("next-button");l.disabled=!0,l.style.background="#dadada",l.style.color="#8e8e8e",o.shablon==="1"&&document.querySelectorAll('input[type="radio"]').forEach(n=>{n.addEventListener("change",()=>{document.querySelector('input[type="radio"]:checked')?(l.disabled=!1,l.style.background="radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)",l.style.color="#0d0c11"):(l.disabled=!0,l.style.background="#dadada",l.style.color="#8e8e8e")})})}function f(){document.getElementById("question-container");const o=document.getElementById("result-container");o.style.display="block",document.getElementById("result").textContent=`You scored ${y} out of ${p.length}`}function g(){document.querySelector('input[name="answer"]:checked')&&(m++,m<p.length?b():f())}document.addEventListener("DOMContentLoaded",()=>{b(),document.getElementById("next-button").addEventListener("click",g)});
//# sourceMappingURL=commonHelpers2.js.map
