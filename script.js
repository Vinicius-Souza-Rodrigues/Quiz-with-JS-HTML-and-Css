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

let questaoatual = 0

proximo.addEventListener("click", criarformulario)

botaoresposta.forEach(function(botao) {
    botao.addEventListener("click", function() {
        verificar(botao.textContent);
    });
});

function criarformulario() {
    pergunta.innerHTML = questoes[questaoatual].perguntas
    let respostas = questoes[questaoatual].respostas;
    botaoresposta.forEach(function(botao, index) {
        botao.textContent = respostas[index].texto;
    });
    iniciarquiz()
}

function iniciarquiz() {
    if(quiz.classList.contains('hide') == true) {
        quiz.classList.remove('hide')
        titulo.classList.remove('iniciar')
    } else {
        
    }
}

function verificar(resposta) {
    console.log(resposta)
    if(resposta =! true) {
        console.log('acertou')
    }
}

