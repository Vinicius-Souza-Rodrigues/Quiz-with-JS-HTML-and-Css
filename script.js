const questoes = [   //Banco de dados das questões
    {
        perguntas: "Qual dessas é uma IDE?",
        respostas: [
            {texto: "League of Legends", correct: false},
            {texto: "Vs Code", correct: true},
            {texto: "Valorant", correct: false},
            {texto: "Google", correct: false}
        ]
    },
    {
        perguntas: "Qual é um elemento de marcação?",
        respostas: [
            {texto: "JavaScript", correct: false},
            {texto: "Java", correct: false},
            {texto: "Python", correct: false},
            {texto: "HTML", correct: true}
        ]
    },
    {
        perguntas: "Oque significa Js?",
        respostas: [
            {texto: "JavaScript", correct: true},
            {texto: "Java", correct: false},
            {texto: "json", correct: false},
            {texto: "node", correct: false}
        ]
    },
    {
        perguntas: "Qual dessas variaveis está escrita errada?",
        respostas: [
            {texto: "var = nome", correct: false},
            {texto: "let = nome", correct: false},
            {texto: "const = nome", correct: false},
            {texto: "nome = int(nome)", correct: true}
        ]
    },
    {
        perguntas: "Oque significa um arquivo .py",
        respostas: [
            {texto: "Arquivo python", correct: true},
            {texto: "Arquivo corrompido", correct: false},
            {texto: "Arquivo aberto", correct: false},
            {texto: "Aqruivo do github", correct: false}
        ]
    },
    {
        perguntas: "Oque // faz no javascript?",
        respostas: [
            {texto: "Cria uma função", correct: false},
            {texto: "Cria uma variavel", correct: false},
            {texto: "Cria um comentario", correct: true},
            {texto: "apenas separa os arquivos", correct: false}
        ]
    }
]
let nome = document.querySelector('.titulo')
let comecar = document.getElementById('iniciar')
let quiz = document.getElementById('quiz')
//as variaveis de baixo são as mais utilizadas e mudadas durante o programa
let pergunta = document.getElementById('question')
let respostas = document.querySelectorAll('.botaoresposta')
let next = document.getElementById('proximo')
let questaoatual = 0
let pontuacao = 0

comecar.addEventListener('click', retirarhide)
next.addEventListener('click', gerarquestoes)

function retirarhide() {
    nome.classList.remove('iniciar')
    quiz.classList.remove('hide')
    next.classList.remove('hide')
    comecar.classList.add('hide')
    gerarquestoes()
}

function gerarquestoes() {
    while(quiz.firstChild) {
        quiz.removeChild(quiz.firstChild)
    }
    quiz.innerHTML = //usado para re-criar a seção de perguntas para receber novas perguntas
    `
    <h2 class="question" id="question"> </h2>
    <div class="respostas">
        <button class="botaoresposta" id="botaoresposta"> </button>
        <button class="botaoresposta" id="botaoresposta"> </button>
        <button class="botaoresposta" id="botaoresposta"> </button>
        <button class="botaoresposta" id="botaoresposta"> </button>
    </div>
    `
    document.getElementById('question').textContent = questoes[questaoatual].perguntas;
    let answers = document.querySelectorAll('.botaoresposta')
    answers.forEach((answer, index) => {
        answer.textContent = questoes[questaoatual].respostas[index].texto
        answer.addEventListener('click', verificar)
    })
}

function verificar(e) {  //para pegar a resposta colocada e atribui ponto na pontuação
    let respostaselecionada = e.target.textContent
    e.target.classList.add('travado')
    let respostaCorreta = questoes[questaoatual].respostas.find(resposta => resposta.texto === respostaselecionada);
    if(respostaCorreta.correct == true) {
        pontuacao += 1
        console.log(respostaCorreta)
        console.log(pontuacao)
        
    }
    questaoatual += 1
    let answers = document.querySelectorAll('.botaoresposta');
    answers.forEach(answer => {
        answer.removeEventListener('click', verificar);
    });
    if (questaoatual == questoes.length) {
        terminar()
    }
}
function terminar() {
    while(quiz.firstChild) {
        quiz.removeChild(quiz.firstChild)
    }
    quiz.innerHTML = `<h2 class="question" id="question"> </h2>`
    document.getElementById('question').innerHTML = `Você acertou ${pontuacao} / ${questoes.length}.`
    next.classList.add('hide')
}