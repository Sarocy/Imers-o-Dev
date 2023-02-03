
alert("Você tem 10 tentativas!");

var numeroSecreto = parseInt(Math.random()*(1001 - 1) + 1);


    for( var tentativas = 0; chute != numeroSecreto && tentativas < 10; tentativas++) {

   
        var chute = prompt("Digiteum número entre 1 a 1000");
        
        if(chute == numeroSecreto){
            alert("Acertou!");
            break;
        }else if(chute > numeroSecreto){
            alert("Errou... o número secreto é menor");
        } else if(chute < numeroSecreto){
            alert("Errou... o número secreto é maior")
        }
    
        alert("Você tem " + (9 - tentativas) + " tentativas.");

        if(tentativas == 9){
            alert("O número secreto era: " + numeroSecreto);
        };


}