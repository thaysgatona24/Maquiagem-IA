const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Entrando na boutique, você é imediatamente envolvida por uma atmosfera luxuosa. Uma vendedora simpática se aproxima oferecendo algumas opçoes de produtos",
        alternativas: [
            {
                texto: "Experimentar o novo batom fosco em tons de vermelho.",
                afirmacao: "Você aplica o batom e se olha no espelho, impressionada com a cor vibrante que destaca seus lábios "
            },
            {
                texto: "Testar o delineador líquido à prova d'água.",
                afirmacao: "Com cuidado, você traça uma linha suave ao longo de suas pálpebras, admirando o efeito dramático que ele cria em seu olhar"
            }
        ]
    },
    {
        enunciado: "Você é atraída por uma mesa cheia de produtos orgânicos e veganos. Uma vendedora sorridente lhe oferece duas opções",
        alternativas: [
            {
                texto: "Testar o blush em pó feito com ingredientes naturais.",
                afirmacao: "Ao aplicar o blush, você sente uma suave e natural coloração em suas bochechas"
            },
            {
                texto: "Experimentar o hidratante labial com aroma de frutas tropicais.",
                afirmacao: "Ao aplicar o hidratante, seus lábios são envolvidos por uma sensação suave e refrescante."
            }
        ]
    },
    {
        enunciado: "você encontra uma variedade de produtos exclusivos e feitos à mão",
        alternativas: [
            {
                texto: "Experimentar o iluminador em creme com brilho holográfico",
                afirmacao: "Ao aplicar o iluminador, seu rosto é banhado por um brilho sutil e mágico"
            },
            {
                texto: "Testar o esfoliante facial feito com ingredientes naturais.",
                afirmacao: "Enquanto massageia o esfoliante em sua pele, você sente uma sensação revigorante e fresca"
            }
        ]
    },
    {
        enunciado: "Uma vendedora atenciosa apresenta uma variedade de produtos adaptados para diferentes tons de pele e estilos culturais e você fica entre duas opções",
        alternativas: [
            {
                texto: "Testar o gloss labial em uma tonalidade neutra com brilho dourado.",
                afirmacao: "Ao aplicar o gloss, seus lábios ganham um brilho sutil e natural."
            },
            {
                texto: "Experimentar o corretivo cremoso em uma tonalidade especialmente formulada para disfarçar olheiras em peles morenas.",
                afirmacao: "Ao aplicar o corretivo, você sente suas olheiras desaparecerem e sua pele ganhar um aspecto luminoso."
            }
        ]
    },
    {
        enunciado: "Você encontra uma sala e Ao entrar, você é recebida por um ambiente sofisticado e elegante. Uma consultora de beleza oferece duas opções:",
        alternativas: [
            {
                texto: "Experimentar o iluminador líquido em tons de champanhe.",
                afirmacao: "Ao aplicar o iluminador, seu rosto é banhado por um brilho sutil e radiante"
            },
            {
                texto: "Testar o pó compacto de alta cobertura.",
                afirmacao: "Ao aplicar o pó, você sente sua pele ficar impecavelmente mate e uniforme"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Aós ter comprado as maquiagens você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
