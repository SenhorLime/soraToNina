const quizData = [
  {
    question: "Sora é um estudante do ensino médio normal. Começando mais um dia escolar, se levanta e vai tomar um banho gelado para se despertar. Qual hormônio liberado?",
    answer: {
      a: "Prolactina",
      b: "Cortisol",
      c: "Testoterona",
      d: "Adrenalina",
    },
    correct: "b",
  },
  {
    question: "Logo após o banho sora vai para a cozinha e se depara com sua comida preferida. Qual o hormônio liberado?",
    answer: {
      a: "Tiroxina",
      b: "Adrenalina",
      c: "Serotonina",
      d: "Glucagon",
    },
    correct: "c",
  },
  {
    question: "Sora pega seu skate, poe seu capacete e vai em direção a escola, mas no caminho um motorista imprudente avança o sinal vermelho e quase atropela sora. Qual o hormônio liberado?",
    answer: {
      a: "Estrogênio",
      b: "Paratormônio",
      c: "Testoterona",
      d: "Cortisol",
    },
    correct: "d",
  },
];

const quiz = document.getElementById("quiz-body");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");

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

  a_text.innerText = currentQuizData.answer.a;
  b_text.innerText = currentQuizData.answer.b;
  c_text.innerText = currentQuizData.answer.c;
  d_text.innerText = currentQuizData.answer.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    console.log(score);

   if (currentQuiz < quizData.length) {
      loadQuiz();
    } /*else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2> <button onclick="history.go(0)> Play Again</button>`;
    }*/
  }
});