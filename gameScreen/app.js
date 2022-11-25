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

const display = document.querySelector(".timer");
let timer;

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

    timer = 60;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      timer = 9999999;

      if (score < quizData.length / 2) {
        quiz.innerHTML = `<span class="final">Você acertou ${score}/${quizData.length}</span>
        <span class="result"> Infelizmente Sora não conquistou o coração de Nina e foi embora para casa triste </span>
        <div class="control-panel">
            <button><a href="/creditsScreen/index.html">Créditos</a></button>
            <button onclick="history.go(0)">Jogar Novamente</button>
        </div>`;
      } else {
        quiz.innerHTML = `<span class="final">Você acertou ${score}/${quizData.length}</span>
      <span class="result"> Sora conseguiu se declarar para Nina e foi embora para casa feliz </span>
      <div class="control-panel">
            <button><a href="/creditsScreen/index.html">Créditos</a></button>
            <button onclick="history.go(0)">Jogar Novamente</button>
      </div>`;
      }
    }
  }
});

function startTimer(duration, display) {
  let minutes, seconds;
  timer = duration;

  setInterval(function () {
    //funcao que roda a cada 1 seg
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes; //adicionar 00 nos locais certos
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds; //adicionar os dois pontos entre minutos e segundos

    if (--timer < 0) {
      timer = 0;
      window.alert(
        "O tempo para responder acabou. Clique em ok para continuar a jogar"
      );

      currentQuiz++;
      timer = 60;

      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        timer = 9999999;
      }
    }
  }, 1000);
}

window.onload = function () {
  var time = 60; // tempo em segundos que vc quer
  startTimer(time, display);
};
