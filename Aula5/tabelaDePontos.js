
var paulo = {
    foto:`<img src= "https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg" height = "50" width ="50">`,
    nome: "Paulo",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var rafa = {
    foto: `<img src= "https://avatars0.githubusercontent.com/u/54322854" height = "50" width ="50">`,
    nome: "Rafa",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var gui = {
    foto:`<img src= "https://avatars.githubusercontent.com/u/30351153?v=4" height = "50" width ="50">`,
    nome: "Gui",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var renata = {
    foto:`<img src= eu.jpeg height = "50" width ="50">`,
    nome: "Sarah",
    vitoria: 10,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var jogadores = [paulo, rafa, gui, renata];

var elementoTabela = document.getElementById('tabelaJogadores');

exibirNaTela();

function exibirNaTela(){

elementoTabela.innerHTML = "";

for(var i=0; i<jogadores.length; i++)  {
    
    

    elementoTabela.innerHTML +=`<tr>
    <td>${jogadores[i].foto}</td>
    <td>${jogadores[i].nome}</td>
    <td>${jogadores[i].vitoria}</td>
    <td>${jogadores[i].empate}</td>
    <td>${jogadores[i].derrota}</td>
    <td>${jogadores[i].pontos}</td>
    <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
    <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
    <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
</tr>
  ` 

  ; 
  }  
} 

function zerarPontos(){
    jogadores.map(x => x.pontos = 0);
    jogadores.map(x => x.derrota = 0);
    jogadores.map(x => x.vitoria = 0);
    jogadores.map(x => x.empate = 0);
    exibirNaTela();
}


function adicionarJogadores(){
    var nomeDoJogador = prompt("Insira nome do jogador:");
    var infJogador = {
    
        foto:`<img src= "https://th.bing.com/th/id/OIP.Hqq_V0Tuqmtsdz2-dp-6SgHaHa?pid=ImgDet&rs=1" height = "50" width ="50">`,
        nome: nomeDoJogador,
        vitoria: 10,
        empate: 0,
        derrota: 0,
        pontos: 0
  };
  jogadores.push(infJogador);
  exibirNaTela();

}





function adicionarVitoria(i){

    jogadores.map(x => (x==jogadores[i])?((x.vitoria++) && (x.pontos+=3)):(x.derrota++))

    exibirNaTela();
}
function adicionarEmpate(){
    jogadores.map( x => ((x.empate++) && (x.pontos++)));
    exibirNaTela();
}
function adicionarDerrota(i){
    jogadores[i].derrota++;
    exibirNaTela();
}

