function loadTemplates(i) {
  return /*html*/ `
          <h2>${quizData[i].question}</h2>
    <section class="answer-section">
          <div class="answers" id="answer-section"></div>
    </section>
    <section class="next-question">
        <button class="back-button" onclick="backQuestion()">Zurück</button>
        <button disabled id="forward_button" onclick="nextQuestion()">Nächste Frage</button>
    </section>
 `;
}

function loadAnswersTemplates(i, j) {
  return /*html*/ `
    <label class="answer-label"id="answer${j}" onclick="inputAnswer(${i},${j})">
        <input type="checkbox" name="answer-${i}">
        <span>${quizData[i].answers[j]}</span>
    </label>
    `;
}

function progressbarTemplate(i) {
  return /*html*/ `
    <div class="from-to-percent">
      <div class="one-array">
          <b>${i + 1}</b>
          <p>von</p>
          <b>${quizData.length}</b>
          <p>Fragen</p>
        </div>
        <div>
            30%
        </div>
    </div>
    <div class="progress-bar">

    </div>

    `;
}
