import { questions } from './data';

export function updateProgressBar(currentQuestionIndex) {
  const progressBar = document.getElementById('progress-bar');
  const progress = (currentQuestionIndex / questions.length) * 100;
  progressBar.style.width = `${progress}%`;
}
