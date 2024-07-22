const questions = [
  {
    question: 'Ваш пол?',
    answers: ['Мужщина', 'Женщина'],
    shablon: '1',
  },
  {
    question: 'Укажите ваш возраст:',
    answers: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36'],
    shablon: '1',
  },
  {
    question: 'Виберите лишнее',
    answers: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина'],
    shablon: '1',
  },
  {
    question: 'Продолжите числовой ряд: 18 20 24 32',
    answers: ['62', '48', '74', '57', '60', '77'],
    shablon: '1',
  },

  {
    question: 'Выберите цвет, который сейчас наиболее вам приятен:',
    answers: [
      '#a8a8a8',
      '#0000a9',
      '#00a701',
      '#f60100',
      '#fdff19',
      '#a95403',
      '#000',
      '#850068',
      '#46b2ac',
    ],
    shablon: '2',
  },
  {
    question:
      'Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:',
    answers: [
      '#a8a8a8',
      '#46b2ac',
      '#a95403',
      '#00a701',
      '#000',
      '#f60100',
      '#850068',
      '#fdff19',
      '#0000a9',
    ],
    shablon: '2',
  },
  {
    question: 'Какой из городов лишний?',
    answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк ', 'Москва', 'Оттава'],
    shablon: '1',
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
    picture: './public/image.png',
    answers: ['1', '2', '3', '4 '],
    shablon: '3',
  },
  {
    question: 'Вам привычнее и важнее:',
    answers: [
      'Наслаждаться каждой минутой проведенного времени',
      'Быть устремленными мыслями в будущее',
      'Учитывать в ежедневной практике прошлый опыт',
    ],
    shablon: '1',
  },
  {
    question:
      'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    picture: './public/image-.png',
    answers: [
      'Оно остроконечное',
      'Оно устойчиво',
      'Оно находится в состоянии равновесия',
    ],
    shablon: '4',
  },
  {
    question: 'Вставьте подходящее число',
    picture: './public/image--.png',
    answers: ['34', '36', '53', '44', '66', '42'],
    shablon: '3',
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  const questionTitle = document.getElementById('question-title');
  const answersBlock = document.getElementById('answers-block');

  questionTitle.textContent = question.question;
  answersBlock.innerHTML = ''; // Очищаємо попередні відповіді

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
}

function displayResult() {
  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  resultContainer.style.display = 'block';
  document.getElementById(
    'result'
  ).textContent = `You scored ${score} out of ${questions.length}`;
}

function selectAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      displayResult();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion();

  document
    .getElementById('next-button')
    .addEventListener('click', selectAnswer);
});
