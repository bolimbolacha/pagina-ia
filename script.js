const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "quem e considerado o pai da fisica?",
        alternativas: [
            {
                texto:"newton",
                afirmacao:"afirmação"
            },
            {
                texto:"einstein",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "quem criou o prisma de luz?",
        alternativas: [
            {
                texto:"aristoteles.",
                afirmacao:"afirmação"
            },
            {
                texto:"newton.",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "quem foi newton?",
        alternativas: [
            {
                texto:"matematico",
                afirmacao:"afirmação"
            },
            {
                texto:"filosofo",
                afirmacao:"afirmação."
                

            }
        
    
        ]


    },
    {
        enunciado: "oque fez com que oppenhimer fosse julgado?",
        alternativas: [
            {
                texto:"criação da bomba nuclear.",
                afirmacao:"afirmação"
            },
            {
                texto:"criação das armas belicas.",
                afirmacao:"afirmação"
                

            }
        
        
        ]

    },
    {
        enunciado: "A Física permite-nos conhecer as leis gerais da Natureza que regulam o desenvolvimento dos processos que se verificam, tanto no Universo circundante como no Universo em geral.",
        

    },

];

let atual = 0;
let perguntaAtual;
let hitoriaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        motraReultados();
        return;
    }[]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",() => repostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function repostaSelecionada(opcaoSelecionada){
    atual++;
    mostraPergunta();
    const afirmacoes = opcaoSelecionada.afirmacoes
}

function mostraResultados(){
    caixaPerguntas.textContent = "em 2019...";
    textoResultados.textContent = hitoriaFinal += afirmacoes + "";
    caixaAlternativas.textContent = "";

}
mostraPergunta();