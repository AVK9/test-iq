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
    correct: '2',
  },
  {
    question: 'Какой из городов лишний?',
    answers: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк ', 'Москва', 'Оттава'],
    shablon: '1',
  },
  {
    question: 'Выберите правильную фигуру из четырёх пронумерованных.',
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
    answers: [
      'Оно остроконечное',
      'Оно устойчиво',
      'Оно находится в состоянии равновесия',
    ],
    shablon: '4',
  },
  {
    question: 'Вставьте подходящее число',
    answers: ['34', '36', '53', '44', '66', '42'],
    shablon: '5',
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const question = questions[currentQuestionIndex];
  const questionTitle = document.getElementById('question-title');
  const answersBlock = document.getElementById('answers-block');

  questionTitle.textContent = question.question;
  answersBlock.innerHTML = '';

  if (question.shablon === '1') {
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
  } else if (question.shablon === '2') {
    question.answers.forEach((color, index) => {
      const label = document.createElement('label');
      label.className = 'answer-label';
      label.style.backgroundColor = color;
      label.style.width = '50px';
      label.style.height = '50px';
      label.style.display = 'inline-block';
      label.style.margin = '5px';
      label.style.border = '2px solid transparent';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      input.className = 'answer-input';
      input.style.display = 'none';

      label.addEventListener('click', () => {
        document.querySelectorAll('.answer-label').forEach(l => {
          l.style.border = '2px solid transparent';
        });
        label.style.border = '2px solid #000';
        input.checked = true;
        const nextButton = document.getElementById('next-button');
        nextButton.disabled = false;
        nextButton.style.background =
          'radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%)';
        nextButton.style.color = '#0d0c11';
      });

      label.appendChild(input);
      answersBlock.appendChild(label);
    });
  }

  const nextButton = document.getElementById('next-button');
  nextButton.disabled = true;
  nextButton.style.background = '#dadada';
  nextButton.style.color = '#8e8e8e';

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
    if (selectedAnswer.value == questions[currentQuestionIndex].correct) {
      score++;
    }
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
