var url_string = window.location.href
var url = new URL(url_string);
var shuffler = url.searchParams.get("random");

var logo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 881 383"><text font-family="Myriad Pro" font-size="88" x="138" y="264.1"><tspan font-family="Sofia Pro" fill="#FFF">P</tspan><tspan font-family="Sofia Pro" fill="#FFF">RIVILEGIADOS</tspan></text><text font-family="Myriad Pro" font-size="84" x="334" y="143.9"><tspan font-family="Sofia Pro" fill="#FFF">JOGO</tspan></text><text font-family="Myriad Pro" font-size="27.6" x="419" y="182.7"><tspan font-family="Sofia Pro" fill="#FFF">DO</tspan><tspan font-family="Sofia Pro" fill="#FFF">S</tspan></text><path fill-rule="evenodd" fill="#FF004E" d="m196 45 46 112-66 11 8-121a24 24 0 1 1 12-2Z"/><path fill-rule="evenodd" fill="#0078FF" d="M692 28c-2 10-11 18-21 19l8 120-66-10 46-112a23 23 0 0 1 13-44c13 2 22 14 20 27Z"/><path fill-rule="evenodd" fill="#00FE1E" d="m6 200 28-13c5-1 9 2 9 8l5 42c1 6-2 12-7 14l-29 8c-3 2-7-2-7-7l-4-39c-1-6 1-11 5-13Z"/><path fill-rule="evenodd" fill="#F8739C" d="m45 285 27-26c4-4 10-3 13 2l23 40c3 5 2 13-3 17l-31 25c-4 3-10 1-13-4l-18-38c-3-5-2-12 2-16Z"/><path fill-rule="evenodd" fill="#00FE1E" d="m131 345 11-51c2-7 8-12 15-10l52 13c8 2 13 10 11 19l-14 57c-2 7-10 11-17 8l-49-20c-6-2-10-10-9-16ZM875 200l-28-13c-5-1-9 2-9 8l-5 42c-1 6 2 12 7 14l29 8c3 2 7-2 7-7l4-39c1-6-1-11-5-13Z"/><path fill-rule="evenodd" fill="#F8739C" d="m836 285-27-26c-4-4-10-3-13 2l-23 40c-3 5-2 13 3 17l31 25c4 3 10 1 13-4l18-38c3-5 2-12-2-16Z"/><path fill-rule="evenodd" fill="#00FE1E" d="m750 345-11-51c-2-7-8-12-15-10l-52 13c-8 2-13 10-11 19l14 57c2 7 10 11 17 8l49-20c6-2 10-10 9-16Z"/></svg>
`

var perguntas = [
    "Quantas horas você dorme por dia?",
    "O que você faz para agradar o chefão?",
    "Você tem uma vida sexual ativa?\nIsso mesmo, você transa?",        
    "Cite um defeito e uma qualidade sua.",
    "Você é casada/o?",
    "Quando você fica doente,\nvocê falta no trabalho?",
    "Você toma remédio controlado?",
    "Você trabalha em casa?",
    "Você pretende ter filhos?",
    "Qual o seu record de horas trabalhadas ininterruptas?"

];
var perguntas2 = [
    "Você engana as pessoas para parecer melhor aos olhos delas?",
    "Você usa de mentiras para conseguir o que quer?",
    "Você facilmente perde a paciência?",
    "Você nunca teve problemas com a lei?",
    "Você tem grande interesse em fazer amizade com pessoas famosas?",
    "Você tem tendências de grandeza?",
    "Você é uma pessoa cínica?",
    "Você manipula outros para conseguir o que quer?",
    "Você tem momentos em que age por impulso, ignorando as consequências ou riscos?",
    "Você despreza as pessoas que compartilham imprudentemente seus segredos?",
    "Você normalmente não sente remorso?",
    "Você mantem um registro de informações que podem ser utilizadas para machucar alguém em algum momento?",
    "Você tem um grande senso de auto-importância?",
    "Você sente que é mais especial do que os outros?",
    "Você domina situações sociais?",
    "Você merece que reconhecimento e sucesso surjam no seu caminho?",
    "Você é melhor do que os outros?",
    "Você usa elogios insinceros para conseguir o que quer?",
    "Você é uma pessoa que faz o que quer e que não se sente obrigada a fazer algo porque alguém quer?",
    "Você é uma pessoa que fica frustrada facilmente?", "Você fantasia com prestígio ou status extraordinários?",
    "Você evita entrar em conflito com pessoas que podem ser úteis no futuro?",
    "Você explora os outros para seus próprios fins?", 
    "Você tem uma boa relação com sua família?",
    "Você despreza pessoas que não conseguem controlar as próprias emoções?", "Você é pessoa egocêntrica?",
    "Você quer que outros te admirem?", "Você gosta de incomodar os perdedores?",
    "Você é uma pessoa que não fica tão chateada quanto outros quando alguém morre?",
    "Você espera favores especiais dos outros?", 
    "Os outros deveriam dedicar atenção especial para você?",
    "Todas as pessoas merecem respeito básico?", 
    "Frequentemente te chamam de insensível ou indiferente?",
    "A maioria das pessoas é preguiçosa e não trabalha duro a menos que seja necessário?",
    "Ser uma pessoa ética é mais importante do que passar na frente dos outros?",
    "Se preocupar com a moralidade dos seus atos é algo para perdedores?"
];




Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

var counter = 0;
var bgColor = "black";

//PERGUNTAS WAS HERE

//perguntas = perguntas.concat(perguntas2);
if (shuffler) perguntas = perguntas.shuffle();
perguntas.push("ACABARAM AS PERGUNTAS");

function ChangeQuestion(n){

document.body.style.backgroundColor = 'black';
bgColor = "black";
    
if (perguntas[n] == undefined) { counter = 0, n = 0;
    return document.getElementById("perguntasBox").innerHTML = logo;
                               }

if (document.getElementById("perguntasBox").innerText != "PRÓXIMA PERGUNTA") 
    return document.getElementById("perguntasBox").innerText = "PRÓXIMA PERGUNTA"
document.getElementById("perguntasBox").innerText = perguntas[n];
}

ChangeQuestion(counter);

document.onclick= function(e) {
        counter ++
ChangeQuestion(counter)
}

document.body.onkeyup = function(e){

if(e.keyCode == 49){
bgColor = "Green";
document.getElementById("perguntasBox").innerText = "RESPOSTA CORRETA"
    }

if(e.keyCode == 50){
bgColor = "FireBrick";

document.getElementById("perguntasBox").innerText = "RESPOSTA ERRADA"
    }

if(e.keyCode == 51){
bgColor = "orange";

document.getElementById("perguntasBox").innerText = "RESPOSTA INCOMPLETA"
    }

    if(e.keyCode == 32){
        counter ++
ChangeQuestion(counter)
    }
}



            function flashtext(ele,col) {
            var tmpColCheck = document.body.style.backgroundColor;

              if (tmpColCheck === 'black') {
                document.body.style.backgroundColor = col;
              } else {
                document.body.style.backgroundColor = 'black';
              }
            } 
            
            setInterval(function() {
                flashtext('flashingtext',bgColor);
            }, 500 ); //set an interval timer up to repeat the function
