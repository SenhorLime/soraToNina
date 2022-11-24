import { quizData } from "./quizData.js";

const quiz = document.querySelector(".quiz-container");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.querySelector(".quiz-header");
const questionScene = document.querySelector(".quiz-scene");
const questionNumber = document.querySelector("title");

const a_text = document.getElementById("text_a");
const b_text = document.getElementById("text_b");
const c_text = document.getElementById("text_c");
const d_text = document.getElementById("text_d");

const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;

  answerElements.forEach((answerElements) => {
    if (answerElements.checked) {
      answer = answerElements.id;
    }
  });

  return answer;
};

const loadQuiz = () => {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  questionNumber.innerHTML = `STN - Fase ${currentQuiz + 1}`;
  questionScene.innerHTML = `<img src="${currentQuizData.scene}"/>`;

  a_text.innerText = currentQuizData.answer.a;
  b_text.innerText = currentQuizData.answer.b;
  c_text.innerText = currentQuizData.answer.c;
  d_text.innerText = currentQuizData.answer.d;

  console.log("Questão atual: ", currentQuiz + 1);
  console.log("Quantidade de acertos: ", score);
};

loadQuiz();

submitButton.addEventListener("click", () => {
  console.clear();

  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      if (score < quizData.length / 2) {
        quiz.innerHTML = `<span class="final">Você acertou ${score}/${quizData.length}</span>
        <span class="result"> Infelizmente Sora não conquistou o coração de Nina e foi embora para casa triste </span>`;
      } else {
        quiz.innerHTML = `<span class="final">Você acertou ${score}/${quizData.length}</span>
      <span class="result"> Sora conseguiu se declarar para Nina e foi embora para casa feliz </span>`;
      }
    }
  }
});
