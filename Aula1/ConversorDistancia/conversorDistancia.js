
var nome1 = prompt("Qual o nome da primeira estrela?");
var nome2 = prompt("Qual o nome da segunda estrela?");

var valorAnosLuz = prompt("Quantos anos-luz de distância está uma estrela da outra?");

var anosLuzEmKm = 9460800000000;

var resultado = (valorAnosLuz * anosLuzEmKm).toFixed(2);

alert("A distância correspondente a " + valorAnosLuz + " anos-luz entre a estrela " + nome1 + " e a estrela " + nome2 + " é " + resultado + " quilometros!");


