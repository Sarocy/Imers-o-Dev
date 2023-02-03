
var listaFilmes = [];

listaFilmes[0] = "https://br.web.img3.acsta.net/medias/nmedia/18/87/87/63/19962446.jpg";
listaFilmes[1] = "https://lumiere-a.akamaihd.net/v1/images/the_godfather_99f377a2.jpeg";
listaFilmes[2] = "https://vortexcultural.com.br/images/2020/01/poderoso-chefao-2.jpg";
listaFilmes[3] = "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/92/91/32/20224832.jpg";
listaFilmes[4] = "https://br.web.img2.acsta.net/medias/nmedia/18/92/34/89/20194741.jpg";
listaFilmes[5] = "https://br.web.img2.acsta.net/medias/nmedia/18/92/91/47/20224867.jpg"

for(var i = 0; i < listaFilmes.length; i++){
   document.write("<img src=" + listaFilmes[i]  + ">");
}
