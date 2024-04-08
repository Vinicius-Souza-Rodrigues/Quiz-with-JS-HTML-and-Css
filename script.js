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
            {texto: "JavaScript", correct: false},
            {texto: "Java", correct: false},
            {texto: "json", correct: false},
            {texto: "node", correct: true}
        ]
    }
]

let botaoresposta = document.querySelectorAll('.botaoresposta')
let proximo = document.getElementById('proximo')
let pergunta = document.getElementById('question')
let titulo = document.querySelector('.titulo')
let quiz = document.getElementById('quiz')

let perguntaAtual = 0

console.log(questoes[2])

proximo.addEventListener("click", iniciarquiz, criarformulario)

botaoresposta.forEach(function(botao) {
    botao.addEventListener("click", function() {
        verificar(botao.textContent);
    });
});

function criarformulario() {
    while(quiz.firstChild) {
        quiz.removeChild(quiz.firstChild)

        
    }
}

async function iniciarquiz() {
    if(quiz.classList.contains('hide') == true) {
        quiz.classList.remove('hide')
        titulo.classList.remove('iniciar')
    } else {
        
    }
}

function verificar(resposta) {
    console.log(resposta)
}

