const quizData = [
  {
    question:
      "Sora é um estudante do ensino médio normal. Começando mais um dia escolar, se levanta e vai tomar um banho gelado para se despertar. Qual hormônio liberado?",
    answer: {
      a: "Prolactina",
      b: "Cortisol",
      c: "Testoterona",
      d: "Adrenalina",
    },
    correct: "b",
    scene: "/Assets/Images/bath.gif",
  },
  {
    question:
      "Logo após o banho sora vai para a cozinha e se depara com sua comida preferida. Qual o hormônio liberado?",
    answer: {
      a: "Tiroxina",
      b: "Adrenalina",
      c: "Serotonina",
      d: "Glucagon",
    },
    correct: "c",
    scene: "/Assets/Images/kitchen.jpeg",
  },
  {
    question:
      "Sora pega seu skate, poe seu capacete e vai em direção a escola, mas no caminho um motorista imprudente avança o sinal vermelho e quase atropela sora. Qual o hormônio liberado?",
    answer: {
      a: "Estrogênio",
      b: "Paratormônio",
      c: "Testoterona",
      d: "Cortisol",
    },
    correct: "d",
    scene: "/Assets/Images/street.jpeg",
  },
];

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
  questionNumber.innerHTML = `STN - Questão ${currentQuiz+1}`;
  questionScene.innerHTML = `<img src="${currentQuizData.scene}"/>`;

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
    } else {
      quiz.innerHTML = `Você respondeu ${score}/${quizData.length} corretamente`;
      questionNumber.innerHTML = `Sora To Nina`;
    }
  }
});

//function warning() {
  //window.alert("Caso você esteja usando um dispositivo movel é indicado usar em modo paisagem");
//}