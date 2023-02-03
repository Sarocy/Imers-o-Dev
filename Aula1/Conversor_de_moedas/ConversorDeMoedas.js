
var nome = prompt("Oi, tudo bem? Qual o seu nome?");
var valor = prompt("Qual valor você gostaria de converter?");
var moedaInicial = prompt("Qual das opções abaixo corresponde à sua moeda inicial?\n-Dolar: digite 1\n-Bitcoin: digite 2\n-Euro: digite 3\n-Real: digite 4");
var moedaFinal = prompt("Qual das opções abaixo corresponde à sua moeda final?\n-Dolar: digite 1\n-Bitcoin: digite 2\n-Euro: digite 3\n-Real: digite 4");

var resultado;

if(moedaFinal == 1){
   if(moedaInicial == 2){
       resultado = valor/24022;

       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em dolar é " + resultado);
   }
   if(moedaInicial == 3){
        resultado = valor*1.09;
        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em dolar é " + resultado);
   }
   if(moedaInicial == 4){
    resultado = valor/5.02; 
    
    resultado = resultado.toFixed(2);
    alert("Olá, " + nome + "! O valor em dolar é " + resultado);
   }
}

if(moedaFinal == 2){
    if(moedaInicial == 1){
        resultado = valor*24022; 

        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em Bitcoin é " + resultado);
    }
    if(moedaInicial == 3){
        resultado = valor*22019.05;
        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em Bitcoin é " + resultado);
    }
    if(moedaInicial == 4){
        resultado = valor*120839;    
        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em Bitcoin é " + resultado);
    }
}

if(moedaFinal == 3){
    if(moedaInicial == 1){
        resultado = valor/1.09;
        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em euro é " + resultado);
    }
    if(moedaInicial == 2){
        resultado = valor/22019.05;
        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em euro é " + resultado);
    }
    if(moedaInicial == 4){
        resultado = valor/5.48; 
        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em euro é " + resultado);
    }
}

if(moedaFinal == 4){
    if(moedaInicial == 1){
         resultado = valor*5.02;
         
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em real é " + resultado);
    }
    if(moedaInicial == 2){
        resultado = valor/120839; 
        
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em real é " + resultado);
    }
    if(moedaInicial == 3){
         resultado = valor*5.48;
         
       resultado = resultado.toFixed(2);
       alert("Olá, " + nome + "! O valor em real é " + resultado);
    }
}











