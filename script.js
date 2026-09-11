let currentQuestion = 0;

function init() {
  renderQuestion(currentQuestion);
  renderProgressBar(currentQuestion);
}

function renderQuestion(i) {
  const quizSectionRef = document.getElementById('quiz-section');

  quizSectionRef.innerHTML = loadTemplates(i);

  for (let j = 0; j < quizData[i].answers.length; j++) {
    document.getElementById(`answer-section`).innerHTML += loadAnswersTemplates(i, j);
  }

  // let percent = currentQuestion / quizData.length;
  // percent = percent * 100;
  // document.getElementById('progress_bar').innerHTML = /*html*/ `
  //   ${percent} %
  // `;
}

function renderProgressBar() {
  const progressSectionRef = document.getElementById('progress-section');
  progressSectionRef.innerHTML = progressbarTemplate(currentQuestion);
}

function nextQuestion() {
  currentQuestion++;
  renderQuestion(currentQuestion);
}

function backQuestion() {
  currentQuestion--;
  renderQuestion(currentQuestion);
}

function inputAnswer(i, j) {
  const selectedAnswer = document.getElementById('answer' + j);
  const correctAnswer = quizData[i].correctAnswer;

  if (quizData[i].answers[j] === quizData[i].correctAnswer) {
    selectedAnswer.classList.add('approve');
  } else {
    selectedAnswer.classList.add('denied');

    const correctIndex = quizData[i].answers.indexOf(correctAnswer);
    const correctAnswerElement = document.getElementById('answer' + correctIndex);
    correctAnswerElement.classList.add('approve');
  }

  document.getElementById('forward_button').disabled = false;
  document.getElementById('forward_button').classList.add('forward-button');
}
