var url_string = window.location.href
var url = new URL(url_string);
var shuffler = url.searchParams.get("random");

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
    
if (perguntas[n] == undefined) counter = 0, n = 0

if (n != 0 && document.getElementById("perguntasBox").innerText != "PRÓXIMA PERGUNTA") 
    return document.getElementById("perguntasBox").innerText = "PRÓXIMA PERGUNTA"
document.getElementById("perguntasBox").innerText = perguntas[n];
counter ++
}

//ChangeQuestion(counter);

document.onclick= function(e) {
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
