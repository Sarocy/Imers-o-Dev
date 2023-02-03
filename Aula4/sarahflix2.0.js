var listaFilmes = [];
var listaNomes = [];


function adicionarFilme(){

    var urlFilme = document.getElementById("filme").value;
    var nomeFilme = document.getElementById("filmeNome").value;
    
    document.getElementById("filme").value = "";
    document.getElementById("filmeNome").value = "";

    if (urlFilme != "" && nomeFilme != "") {
        if (urlFilme.endsWith("jpg") == true || urlFilme.endsWith("png") == true) {
          listaFilmes.push(urlFilme)
          listaNomes.push(nomeFilme)
          atualizarPagina()
        }
      } else {
        alert("Você esqueceu de alguma informação!")
      }
    }

    function removerFilme(index){

        listaFilmes.splice(index, 1)
        listaNomes.splice(index, 1)
        atualizarPagina()
        
    }

    function atualizarPagina() {
        document.getElementById("lista-filmes").innerHTML = ""
        for (var i=0; i<listaFilmes.length; i++) {
          document.getElementById("lista-filmes").innerHTML += `<div class="filme-container"><img src=${listaFilmes[i]}><label>${listaNomes[i]}</label><button onclick="removerFilme(${i})">X</button></div>`
        }
      }




  