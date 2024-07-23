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
    picture: '../public/image.png',
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
    picture: 'https://alexk.site/image-.png',
    answers: [
      'Оно остроконечное',
      'Оно устойчиво',
      'Оно находится в состоянии равновесия',
    ],
    shablon: '4',
  },
  {
    question: 'Вставьте подходящее число',
    picture: 'https://alexk.site/image--.png',
    answers: ['34', '36', '53', '44', '66', '42'],
    shablon: '3',
  },
];

export default questions;
