function toggleAnswer(questionNumber) {
  const answerElement = document.getElementById(`answer${questionNumber}`);
  const button = answerElement.previousElementSibling;

  if (answerElement.style.display === 'none' || answerElement.style.display === '') {
    answerElement.style.display = 'block';
    button.textContent = 'Sembunyikan';
  } else {
    answerElement.style.display = 'none';
    button.textContent = 'Tampilkan';
  }
}

function checkAnswers() {
  const correctAnswers = {
    q1: 'b',
    q2: 'b',
    q3: 'c',
    q4: 'c',
    q5: 'b',
    q6: 'b',
    q7: 'a',
    q8: 'b',
    q9: 'b',
    q10: 'b'
  };

  let score = 0;
  const form = document.forms['quizForm'];

  for (let question in correctAnswers) {
    const userAnswer = form[question].value;
    if (userAnswer === correctAnswers[question]) {
      score++;
    }
  }

  const result = document.getElementById('result');
  const totalQuestions = Object.keys(correctAnswers).length;
  result.innerHTML = `Skor Anda: ${score} dari ${totalQuestions}`;
}
