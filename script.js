var url_string = window.location.href;
var url = new URL(url_string);
var shuffler = url.searchParams.get("random");
var maximo = url.searchParams.get("maximo");


var animTXT = 30;
var logo  = document.getElementById("perguntasBox").innerHTML;

var perguntas = [
  "Quantas horas você dorme por dia?",
  "O que você faz para agradar o chefão?",
  "Você tem uma vida sexual ativa?<br>Isso mesmo, você transa?",
  "Cite um defeito e uma qualidade sua.",
  "Você é casada/o?",
  "Quando você fica doente,<br>você falta no trabalho?",
  "Você toma remédio controlado?",
  "Você trabalha em casa?",
  "Você pretende ter filhos?",
  "Qual o seu record de horas trabalhadas ininterruptas?",
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
  "Você tem momentos em que age por impulso,<br>ignorando as consequências ou riscos?",
  "Você despreza as pessoas que compartilham imprudentemente seus segredos?",
  "Você normalmente não sente remorso?",
  "Você mantem um registro de informações que podem<br>ser utilizadas para machucar alguém em algum momento?",
  "Você tem um grande senso de auto-importância?",
  "Você sente que é mais especial do que os outros?",
  "Você domina situações sociais?",
  "Você merece que reconhecimento e sucesso surjam no seu caminho?",
  "Você é melhor do que os outros?",
  "Você usa elogios insinceros para conseguir o que quer?",
  "Você é uma pessoa que faz o que quer<br>e que não se sente obrigada a fazer algo porque alguém quer?",
  "Você é uma pessoa que fica frustrada facilmente?",
  "Você fantasia com prestígio ou status extraordinários?",
  "Você evita entrar em conflito com pessoas que podem ser úteis no futuro?",
  "Você explora os outros para seus próprios fins?",
  "Você tem uma boa relação com sua família?",
  "Você despreza pessoas que não conseguem controlar as próprias emoções?",
  "Você é pessoa egocêntrica?",
  "Você quer que outros te admirem?",
  "Você gosta de incomodar os perdedores?",
  "Você é uma pessoa que não fica tão chateada quanto outros quando alguém morre?",
  "Você espera favores especiais dos outros?",
  "Os outros deveriam dedicar atenção especial para você?",
  "Todas as pessoas merecem respeito básico?",
  "Frequentemente te chamam de insensível ou indiferente?",
  "A maioria das pessoas é preguiçosa e não trabalha duro a menos que seja necessário?",
  "Ser uma pessoa ética é mais importante do que passar na frente dos outros?",
  "Se preocupar com a moralidade dos seus atos é algo para perdedores?",
];

var respostas = ["RESPOSTA CORRETA", "RESPOSTA ERRADA", "METADE DOS PONTOS", "JOGUEM O DADO", logo]

Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

var counter = 0;
var bgColor = "black";

//PERGUNTAS WAS HERE

//perguntas = perguntas.concat(perguntas2);
if (shuffler == 1) perguntas = perguntas.shuffle();
if (maximo) perguntas.length = maximo 
else maximo = perguntas.lenght;

perguntas.push(logo);

const ChangeQuestion = async (n) => {
  document.getElementById("rodada").innerHTML = "";
  document.body.style.backgroundColor = "black";
  bgColor = "black";

  if (perguntas[n] == undefined) (counter = 0), (n = 0);

  if (  document.getElementById("perguntasBox").innerHTML != respostas[3] && n < maximo ) //(n != 0 && document.getElementById("perguntasBox").innerHTML != respostas[3]) &&
    return (document.getElementById("perguntasBox").innerHTML = respostas[3]), bgColor = "#00003B";

  if (n < maximo) for (let i = 0; i < perguntas2.length; i++) { 
    document.getElementById("perguntasBox").innerHTML = perguntas2[i];
    await sleep(animTXT);  
                 }
  
  document.getElementById("perguntasBox").innerHTML = perguntas[n];
  counter++;
  
  if (document.getElementById("perguntasBox").innerHTML != logo) document.getElementById("rodada").innerHTML = counter+"ª PERGUNTA", bgColor = "black";
  else bgColor = document.getElementById("rodada").innerHTML = "", "black"
  
};

//ChangeQuestion(counter);

document.onclick = function (e) {

 if (respostas.indexOf(document.getElementById("perguntasBox").innerHTML) > -1)  document.getElementById("rodada").innerHTML = "", 
   ChangeQuestion(counter);
};

document.body.onkeyup = function (e) {
  if ( e.keyCode == 32 && (respostas.indexOf(document.getElementById("perguntasBox").innerHTML) > -1) ) return ChangeQuestion(counter);

  if ( e.keyCode == 37 ) {
document.getElementById("perguntasBox").innerHTML = respostas[3];
    counter --;
    counter --;
    counter < 0 ? counter = counter.length -1 : "";
    ChangeQuestion(counter);
  }

if ( e.keyCode == 39 ) {
document.getElementById("perguntasBox").innerHTML = respostas[3];
    //counter ++;
    //counter > counter.length ? counter = counter.length : "";
    ChangeQuestion(counter);
  }
  
if (document.getElementById("perguntasBox").innerHTML == respostas[3]) return;
if (document.getElementById("perguntasBox").innerHTML == logo) return;

  if (e.keyCode == 49) {
    bgColor = "Green";
    document.getElementById("perguntasBox").innerHTML = respostas[0];
  }

  if (e.keyCode == 50) {
    bgColor = "FireBrick";
    document.getElementById("perguntasBox").innerHTML = respostas[1];
  }

  if (e.keyCode == 51) {
    bgColor = "orange";
    document.getElementById("perguntasBox").innerHTML = respostas[2];
  }
};

function flashtext(ele, col) {
  var tmpColCheck = document.body.style.backgroundColor;

  if (tmpColCheck === "black") {
    document.body.style.backgroundColor = col;
  } else {
    document.body.style.backgroundColor = "black";
  }
}

setInterval(function () {
  flashtext("flashingtext", bgColor);
}, 500); //set an interval timer up to repeat the function
