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
    scene: "/Assets/Images/eating.gif",
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
    scene: "/Assets/Images/skating.gif",
  },
  {
    question: "Após esse susto Sora continua seu caminho até a escola. Chegando a escola, ele encontra com a professora que está devendo uma atividade, com medo, tenta se esconder. Qual hormônio liberado?",
    answer: {
      a: "Insulina",
      b: "Epinefrina",
      c: "Adrenalina",
      d: "TSH",
    },
    correct: "c",
    scene: "/Assets/Images/street.jpeg",
  },
  {
    question: "Sora consegue fugir da professora e entra pela porta de trás. Ao entrar se encontra com seu melhor amigo e fica extremamente feliz. Qual hormônio liberado?",
    answer: {
      a: "Oxitocina",
      b: "Serotonina",
      c: "Dopamina",
      d: "Estrogênio",
    },
    correct: "a",
    scene: "/Assets/Images/street.jpeg",
  },
  {
    question: "Indo em direção a sala de aula Sora se depara com sua Crush, Nina. Sora a olha de longe apaixonado. Qual hormônio liberado?",
    answer: {
      a: "Testoterona",
      b: "Dopamina",
      c: "Norepinefrina",
      d: "ACTH",
    },
    correct: "b",
    scene: "/Assets/Images/street.jpeg",
  },
  {
    question: "Chegando na sala Sora percebe que é a aula mais chata que ele tem. O sono começa a bater e dá uma cochilada na aula. Qual hormônio causou isso?",
    answer: {
      a: "LH",
      b: "Melatonina",
      c: "Calcitonina",
      d: "Glicocorticoides",
    },
    correct: "b",
    scene: "/Assets/Images/classroom.gif",
  },
  {
    question: "Sora acorda assustado com o sinal do intervalo. Esse susto foi causado por qual hormônio?",
    answer: {
      a: "Dopamina",
      b: "Profesterona",
      c: "Paratormônio",
      d: "Noradrenalina",
    },
    correct: "d",
    scene: "/Assets/Images/street.jpeg",
  },
  {
    question: "Sora bebeu uma aguinha e saiu em direção a sala para estudar. No próximo horário ele terá uma prova, mas como não estudou ele fica nervoso. Qual hormônio é liberado?",
    answer: {
      a: "Insulina",
      b: "Cortisol",
      c: "Estrogênio",
      d: "Testoterona",
    },
    correct: "b",
    scene: "/Assets/Images/street.jpeg",
  }
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
  questionNumber.innerHTML = `STN - Fase ${currentQuiz + 1}`;
  questionScene.innerHTML = `<img src="${currentQuizData.scene}"/>`;

  a_text.innerText = currentQuizData.answer.a;
  b_text.innerText = currentQuizData.answer.b;
  c_text.innerText = currentQuizData.answer.c;
  d_text.innerText = currentQuizData.answer.d;

  console.log("Questão atual: ", currentQuiz+1);
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
