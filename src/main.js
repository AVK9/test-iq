import { questions, dataFooter } from './js/data';
import loaderHTML from './js/loader';
import { updateProgressBar } from './js/progress-bar';
import { rezult, startTimer } from './js/rezult';

export let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  const questionTitle = document.getElementById('question-title');
  const answersBlock = document.getElementById('answers-block');

  questionTitle.innerHTML = question.question;
  answersBlock.innerHTML = ''; // Очищаємо попередні відповіді
  updateProgressBar(currentQuestionIndex);

  if (question.shablon === '1') {
    // Шаблон 1: звичайні радіо-кнопки

    question.answers.forEach((answer, index) => {
      const label = document.createElement('label');
      label.className = 'answer-label';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      input.className = 'answer-input';

      const radioMark = document.createElement('span');
      radioMark.className = 'radio-mark';

      const answerText = document.createElement('span');
      answerText.className = 'answer-text';
      answerText.textContent = answer;

      label.appendChild(input);
      label.appendChild(radioMark);
      label.appendChild(answerText);
      answersBlock.appendChild(label);
    });
  } else if (question.shablon === '4') {
    // Шаблон 4: звичайні радіо-кнопки
    const img = document.createElement('img');
    img.src = question.picture;
    img.alt = 'Question Image';
    img.className = 'question-image';
    answersBlock.appendChild(img);

    question.answers.forEach((answer, index) => {
      const label = document.createElement('label');
      label.className = 'answer-label';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      input.className = 'answer-input';

      const radioMark = document.createElement('span');
      radioMark.className = 'radio-mark';

      const answerText = document.createElement('span');
      answerText.className = 'answer-text';
      answerText.textContent = answer;

      label.appendChild(input);
      label.appendChild(radioMark);
      label.appendChild(answerText);
      answersBlock.appendChild(label);

      // Додаємо обробник подій для оновлення стану кнопки
      input.addEventListener('change', () => {
        const nextButton = document.getElementById('next-button');
        nextButton.disabled = false;
        nextButton.style.background =
          'radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)';
        nextButton.style.color = '#0d0c11';
      });
    });
  } else if (question.shablon === '2') {
    // Шаблон 2: вибір кольору
    const containerColorAns = document.createElement('div');
    containerColorAns.className = 'container-color-ans';

    question.answers.forEach((color, index) => {
      const label = document.createElement('label');
      label.className = 'answer-label';
      label.style.backgroundColor = color;
      label.style.width = '75px';
      label.style.height = '75px';
      label.style.display = 'inline-block';
      label.style.margin = '5px';
      label.style.border = '6px solid transparent';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      input.className = 'answer-input';
      input.style.display = 'none'; // Приховуємо реальну радіо-кнопку

      label.addEventListener('click', () => {
        document.querySelectorAll('.answer-label').forEach(l => {
          l.style.border = '2px solid transparent'; // Знімаємо рамку з усіх
        });
        label.style.border = '6px solid #ffc700'; // Додаємо рамку до обраного
        input.checked = true; // Встановлюємо радіо-кнопку
        const nextButton = document.getElementById('next-button');
        nextButton.disabled = false; // Активуємо кнопку
        nextButton.style.background =
          'radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)';
        nextButton.style.color = '#0d0c11';
      });

      label.appendChild(input);
      containerColorAns.appendChild(label);

      answersBlock.appendChild(containerColorAns);
    });
  } else if (question.shablon === '3') {
    // Шаблон 3: зображення та кнопки
    const img = document.createElement('img');
    img.src = question.picture;
    img.alt = 'Question Image';
    img.className = 'question-image';
    answersBlock.appendChild(img);

    const containerBtnAns = document.createElement('div');
    containerBtnAns.className = 'container-btn-ans';

    question.answers.forEach((answer, index) => {
      const button = document.createElement('button');
      button.className = 'answer-button';
      button.textContent = answer;

      button.addEventListener('click', () => {
        document.querySelectorAll('.answer-button').forEach(btn => {
          btn.style.border = '2px solid transparent'; // Знімаємо рамку з усіх
        });
        button.style.border = '6px solid #ffc700'; // Додаємо рамку до обраного
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.checked = true;
        input.style.display = 'none'; // Приховуємо реальну радіо-кнопку

        answersBlock.appendChild(input);
        const nextButton = document.getElementById('next-button');
        nextButton.disabled = false; // Активуємо кнопку
        nextButton.style.background =
          'radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)';
        nextButton.style.color = '#0d0c11';
      });
      containerBtnAns.appendChild(button);
    });

    answersBlock.appendChild(containerBtnAns);
  }

  const nextButton = document.getElementById('next-button');
  nextButton.disabled = true; // Деактивуємо кнопку за замовчуванням
  nextButton.style.background = '#dadada'; // Змінюємо колір кнопки за замовчуванням
  nextButton.style.color = '#8e8e8e'; // Змінюємо колір тексту кнопки за замовчуванням

  // Додаємо обробники подій для новостворених радіо-кнопок для шаблону 1
  if (question.shablon === '1') {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', () => {
        if (document.querySelector('input[type="radio"]:checked')) {
          nextButton.disabled = false;
          nextButton.style.background =
            'radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)';
          nextButton.style.color = '#0d0c11';
        } else {
          nextButton.disabled = true;
          nextButton.style.background = '#dadada';
          nextButton.style.color = '#8e8e8e';
        }
      });
    });
  }
  //   updateProgressBar();
  //   console.log('mainBar');
}

// function displayResult() {
//   const questionContainer = document.getElementById('question-container');
//   const resultContainer = document.getElementById('result-container');
//   resultContainer.style.display = 'block';
//   document.getElementById(
//     'result'
//   ).textContent = `You scored ${score} out of ${questions.length}`;
// }

function showLoader() {
  const rezultBlock = document.getElementById('test-container');
  rezultBlock.innerHTML = '';
  rezultBlock.innerHTML = loaderHTML;

  setTimeout(() => {
    rezultBlock.innerHTML = '';
    rezultBlock.innerHTML = rezult;
    const display = document.getElementById('timer');
    const tenMinutes = 10 * 60;
    startTimer(tenMinutes, display);
    const headerName = document.getElementById('header-name');
    headerName.innerHTML = 'Готово!';
    const footerContent = document.getElementById('footer-content');
    footerContent.innerHTML = dataFooter;
  }, 5000);
}

function selectAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    if (
      questions[currentQuestionIndex].correctAnswer ===
      parseInt(selectedAnswer.value)
    ) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showLoader(); // Показуємо завантажувач після останнього запитання
    }
  }
}

document.getElementById('next-button').addEventListener('click', selectAnswer);

loadQuestion();
