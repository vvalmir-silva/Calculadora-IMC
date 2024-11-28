/*
    Abaixo de 17 muito abaixo do peso
    Entre 17 e 18,49 abaixo do peso
    Entre 18,50 e 24,99 peso normal
    Entre 25,00 e 29,99 Acima do peso

    formula 
    peso / (altura * altura);
*/
var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  imc = peso / (altura * altura);
  resultado = document.getElementById("resultado");

  if (imc < 17) {    
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc.toFixed(2)} <br/> Cuidado voce está muito abaixo do peso!`;
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc.toFixed(2)} <br/> Voce está abaixo do peso!`;
  } else if (imc > 18.5 && imc <= 24.99) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc.toFixed(2)} <br/> Voce está no peso ideal!`;
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc.toFixed(2)} <br/> Voce está acima do peso`;
  }else if (imc > 30) {
    resultado.innerHTML = `<br/> Seu resultado foi: ${imc.toFixed(2)} <br/> Voce está obeso`;
  }
    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''

}