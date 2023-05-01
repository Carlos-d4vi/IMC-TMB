/* declaração dos elementos */
const button = document.getElementById('button')

const altura = document.getElementById('Altura')

const peso = document.getElementById('Peso')

const idade = document.getElementById('Idade')

const popupIMC = document.getElementById('IMC')

const popupTMB = document.getElementById('TMB')

const popup = document.getElementById('popup')

const closePopup = document.getElementById('closePopupButton')

/* funções */
function calculoMassa(h, kg){
  const altura = parseFloat(h.value)
  const peso = parseFloat(kg.value)

  const resultado = peso / (altura * altura) 
  return resultado.toFixed(2)
}

function massaAviso() {
  const resultado = calculoMassa(altura, peso);

  let aviso = "";

  switch (true) {
    case resultado < 18.5:
      aviso = "Abaixo do peso normal";
      break;
    case resultado >= 18.5 && resultado <= 24.9:
      aviso = "Peso normal";
      break;
    case resultado >= 25.0 && resultado <= 29.9:
      aviso = "Pré obesidade";
      break;
    case resultado >= 30.0 && resultado <= 34.9:
      aviso = "Obesidade grau I";
      break;
    case resultado >= 35.0 && resultado <= 39.9:
      aviso = "Obesidade grau II";
      break;
    case resultado >= 40:
      aviso = "Obesidade grau III";
      break;
    default:
      aviso = "Algo deu errado :)";
      break;
  }
  return aviso;
}


function calculoTBM(kg, h, a){
  const altura = parseInt(h.value.replace(".",""))
  const peso = parseFloat(kg.value)
  const idade = parseFloat(a.value)

  const resultado = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade)
  return resultado.toFixed(2)
}

function atividadeNenhuma(){
  const resultado = parseFloat(calculoTBM(peso, altura, idade))

  const nenhuma = resultado + (resultado * 0.25)

  return nenhuma.toFixed(2)
}

function atividadeModerda(){
  const resultado = parseFloat(calculoTBM(peso, altura, idade))

  const moderada = resultado + (resultado * 0.35)

  return moderada.toFixed(2)
}

function atividadeIntensa(){
  const resultado = parseFloat(calculoTBM(peso, altura, idade))

  const intensa = resultado + (resultado * 0.45)

  return intensa.toFixed(2)
}

/* aplicação */
button.addEventListener('click', function(){
 const container = document.getElementById('popupContainer');

 const p = document.createElement('p');

 const hr = document.createElement('hr');
  
 const resultado1 = calculoMassa(altura, peso);

 const aviso = massaAviso();
 
 const resultado2 = calculoTBM(peso, altura, idade);

 const nenhuma = atividadeNenhuma();

 const moderada = atividadeModerda();

 const intensa = atividadeIntensa();

 let texto = 
  `Nenhuma atividade física: ${nenhuma}\n`+
  `Atividade física moderada: ${moderada}\n`+
  `Atividade física intensa: ${intensa}`;

 popupIMC.innerHTML = `IMC: ${resultado1} ${aviso}`;
 popupTMB.innerHTML = `TMB: ${resultado2}`;

 p.innerHTML = texto;

 container.append(hr,p)

 popup.classList.add('opened')
}) /* botão calcular */

closePopup.addEventListener('click', function(){
  const container = document.getElementById('popupContainer')

  const p = document.querySelector('#popupContainer p')

  const hr = document.querySelector('#popupContainer hr')

  popup.classList.remove('opened')
  container.removeChild(p)
  container.removeChild(hr)
}) /* botão do popup */
