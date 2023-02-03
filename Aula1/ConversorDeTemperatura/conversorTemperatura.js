var temperatura = prompt('Digite o valor da temperatura:');

var escalaInicial = prompt('-Caso a temperatura inicial informada seja em Celsius, digite 1 \n-Caso seja em Fahrenheit, digite 2 \n-Caso seja em Kelvin, digite 3:');

var escalaFinal = prompt('-Caso a temperatura final buscada para conversão seja em Celsius, digite 1 \n-Caso seja em Fahrenheit, digite 2 \n-Caso seja em Kelvin, digite 3:')

var resultado;

if(escalaInicial == 1){
  if(escalaFinal == 2){
    resultado = (1.8*temperatura)+32;
    resultado = resultado.toFixed(2);
    alert("O resultado da conversão é: " + resultado);
  }

  if(escalaFinal == 3){
    resultado = temperatura + 273;
    resultado = resultado.toFixed(2);
    alert("O resultado da conversão é: " + resultado);
  
  }
   
  }


if(escalaInicial == 2){
  if(escalaFinal == 1){
    resultado = (temperatura - 32) /1.8;
    resultado = resultado.toFixed(2);
    alert("O resultado da conversão é: " + resultado);
  
  }
  if(escalaFinal == 3){
    resultado = (((temperatura - 32)*5/9) + 273);
    resultado = resultado.toFixed(2);
    alert("O resultado da conversão é: " + resultado);
  
  }
  
}

if(escalaInicial == 3){
  if(escalaFinal == 1){
    resultado = temperatura - 273;
    resultado = resultado.toFixed(2);
    alert("O resultado da conversão é: " + resultado);
  }
  if(escalaFinal == 2){
    resultado = ((temperatura - 273)*1.8) + 32;
    resultado = resultado.toFixed(2);
    alert("O resultado da conversão é: " + resultado);
  }
  
}