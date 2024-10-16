const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
    {
        enunciado: "Qual foi o campeão da copa do mundo de 2010?",
        alternativas: [
            {
                testo:"Espanha!",
                afirmacao:"afirmação"
            },
            {
                texto:"Alemanha!",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "Qual a seleção que mais tem copas do mundo?",
        alternativas: [
            {
                testo:"Brasil.",
                afirmacao:"afirmação"
            },
            {
                texto:"Argentina.",
                afirmacao:"afirmação."
                

            }
        
        ]

    },
    {
        enunciado: "qual foi a ultima seleção campeam do mundo.",
        alternativas: [
            {
                testo:"França.",
                afirmacao:"afirmação"
            },
            {
                texto:"Argentina.",
                afirmacao:"afirmação."
                

            }
        
    
        ]


    },
    {
        enunciado: "quem foi a primeira campeam do mundo?",
        alternativas: [
            {
                testo:"Italia.",
                afirmacao:"afirmação"
            },
            {
                texto:"uruguai.",
                afirmacao:"afirmação"
                

            }
        
        
        ]

    }

];

let atual = 0;
let perguntaAtual; 

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",function(){
            atual++;
            mostraPergunta();
        });
        caixaAltermativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();