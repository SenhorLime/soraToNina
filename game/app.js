// Importando as questoes, respostas, resposta correta e localizacao das imagens
import { quizData } from "./quizData.js";

// Declaracao de variaveis para localizacao de partes do HTML
const questionScene = document.querySelector(".quiz-scene");
const quiz = document.querySelector(".quiz-container");
const questionElement = document.querySelector(".quiz-header");
const answerElements = document.querySelectorAll(".answer");
const questionNumber = document.querySelector("title");

// Declaracao de variaveis para localizacao das respostas
const a_text = document.getElementById("text_a");
const b_text = document.getElementById("text_b");
const c_text = document.getElementById("text_c");
const d_text = document.getElementById("text_d");

// Botao para mudar a pergunta
const submitButton = document.getElementById("submit");

// Variaveis para o timer
const display = document.querySelector(".timer");
let timer;

// Variaveis que contam qual a questao atual e quantos pontos marcados
let currentQuiz = 0;
let score = 0;

// Funcao para deselecionar as repostas
const deselectAnswers = () => {
  // Inicio da funcao
  answerElements.forEach((answer) => (answer.checked = false));
};
// Fim da funcao

// Funcao para armazenar qual resposta foi marcada
const getSelected = () => {
  // Inicio da funcao
  let answer;

  answerElements.forEach((answerElements) => {
    if (answerElements.checked) {
      answer = answerElements.id;
    }
  });

  return answer;
};
// Fim da funcao

// Funcao que carrega a pergunta e as respostas do quiz
const loadQuiz = () => {
  // Inicio da funcao
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionNumber.innerHTML = `STN - Fase ${currentQuiz + 1}`; // Muda o titulo da pagina de acordo com o numero da questao
  questionScene.innerHTML = `<img src="${currentQuizData.scene}"/>`; // Troca a imagem da cena de acordo com a cena
  questionElement.innerHTML = currentQuizData.question; // Carrega a pergunta

  // Carrega as repostas para a pergunta
  a_text.innerText = currentQuizData.answer.a;
  b_text.innerText = currentQuizData.answer.b;
  c_text.innerText = currentQuizData.answer.c;
  d_text.innerText = currentQuizData.answer.d;

  // Exibe qual questao e quantas ja foram marcadas no console (Usado na fase de testes, mas acho que e interessante entao decidi nao tirar)
  console.log("Questão atual: ", currentQuiz + 1);
  console.log("Quantidade de acertos: ", score);
};
// Fim da funcao

loadQuiz(); // Carrega o quiz

// Funcao ativada a partir do evento onclick no botao submit
submitButton.addEventListener("click", () => {
  // Inicio da funcao
  console.clear(); // Limpa o console para nao deixar poluido

  const answer = getSelected(); // Pega a resposta marcada no input

  // Realizacao de testes para saber se a reposta marcada foi certa ou errada
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++; // Aumenta o contador desde que a reposta correta seja marcada
    }
    currentQuiz++; // Aumenta o contador de qual questao esta

    timer = 60; // Define o tempo para o timer

    // Verifica se ainda existem questoes para serem respondidas
    if (currentQuiz < quizData.length) {
      loadQuiz(); // Se sim carrega a proxima
    } else {
      // Senao exibe a tela final e define o tempo do timer para algo que nao vai ser alcancado
      timer = 9999999;

      if (score < quizData.length / 2) {
        questionNumber.innerText = "Sora To Nina - Final";

        questionScene.innerHTML =
          '<img src="/Assets/Scenes/finalDaTristeza.gif"/>';

        quiz.innerHTML = `
                <div class="final-score">
                    <h2>Você acertou ${score}/${quizData.length} perguntas</h2>
                    <p>
                        Infelizmente Sora não conquistou o coração de Nina e voltou embora para casa triste
                    </p>
                </div>

                <div class="control-panel">
                    <a href="/credits/index.html">Créditos</a>
                    <a href="/index.html">Menu Inicial</a>
                    <button onclick="history.go(0)">Jogar Novamente</button>
                </div>`;
      } else {
        questionNumber.innerText = "Sora To Nina - Final";

        questionScene.innerHTML =
          '<img src="/Assets/Scenes/finalDaFelicidade.gif"/>';

        quiz.innerHTML = `
                <div class="final-score">
                    <h2>Você acertou ${score}/${quizData.length} perguntas</h2>
                    <p>
                        Sora conseguiu se declarar para Nina e voltou para casa feliz
                    </p>
                </div>

                <div class="control-panel">
                    <a href="/credits/index.html">Créditos</a>
                    <a href="/index.html">Menu Inicial</a>
                    <button onclick="history.go(0)">Jogar Novamente</button>
                </div>`;
      }
    }
  }
});

// Funcao que inicia o timer
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
  var time = 60;
  startTimer(time, display);
};
