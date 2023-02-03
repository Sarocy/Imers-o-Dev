
var listaFilmes = [];



function adicionarFilme(){

   var urlFilme = document.getElementById("filme").value;

   if (listaFilmes.includes(urlFilme)){
      alert("Esse filme já existe!");
   }
   else{
      listaFilmes.push(urlFilme);
   }

   document.getElementById("filme").value = "";
   atualizarPagina(); 
   
}

function atualizarPagina(){
   
   document.getElementById("lista-filmes").innerHTML = "";
   var i=0;

   while ( i<listaFilmes.length) {
      document.getElementById("lista-filmes").innerHTML += `<div class="filme-container"><img src=${listaFilmes[i]}></div>`;
      i++;
      
   }

}



 



