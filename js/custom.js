/*async function getContent() {
  try {
    const dado = await fetch("https://nuweb.vercel.app/api/NuwebPlay");
    const data = await dado.json();
  } catch (error) {
    console.log("DEU ERRO");
  }

  getContent();
}*/

function dark() {
  const fundo = document.querySelector(".s");
  fundo.classList.add("s-activ");
  const f = document.querySelector(".tituloesub");
  f.classList.add("tituloesub-pp");
  const fe = document.querySelector(".duracao");
  fe.classList.add("duracao-pp");
  const pesquisa = document.querySelector(".pesquisar");
  pesquisa.classList.add("pesquisar-pp");
}




async function pesquisar() {

  var pesquisa = document.getElementById('search').value;

 try {
    var testeq = document.querySelector(".music");
    var teste = document.querySelector(".tituloesub");
    var teste1 = document.querySelector(".sub");
    var teste2 = document.querySelector(".duracao");

    const requestpesquisa = await fetch("/json/musics.json").then((e) => e.json());
      teste.innerHTML = ""    
      teste2.innerHTML = "" 


      for (var index = 0; index < requestpesquisa.artistas.length; index++) {
      let imagem = requestpesquisa.artistas[index].urlimage;
      let nomes = requestpesquisa.artistas[index].nome;
      let musicas = requestpesquisa.artistas[index].musica;
      if (nomes.match(pesquisa,'C') || musicas.match(pesquisa,'C') ) {
         if (
       requestpesquisa.artistas[index].nome != null &&
       requestpesquisa.artistas[index].musica != null &&
       requestpesquisa.artistas[index].duração != null
      ) {
        teste.innerHTML +=
          '<section class="music"><ul><a href="' +
          "https://www.spotify.com/br/" +
          '"><img class="image"  src="' +
          imagem +
          '"/></a></ul><div class="tituloesub"><ul><h4 class="titulo">' +
         nomes+
          '</h4><h5 class="sub">' +
         requestpesquisa.artistas[index].musica +
          "</h5></ul></div></section>";

        teste2.innerHTML +=
          ' </ul><h4 class="tempo">' +
         requestpesquisa.artistas[index].duração +
          "<h4></ul>";
        //teste1.innerHTML +='<div class="tituloesub"><ul></ul></div>';
      }
      teste.children(index).removeAttribute("style")
      }
     
    }

    // testeq.innerHTML += '<section class="musics"><ul><img class="image"  src="' requestpesquisa.items[index].track.album.images[0].url+'"/></ul></section>';
  } catch (error) {
    console.log(error);
  }



}


window.onload = clica;

function busca(search) {}

async function clica() {
  try {
    var testeq = document.querySelector(".music");
    var teste = document.querySelector(".tituloesub");
    var teste1 = document.querySelector(".sub");
    var teste2 = document.querySelector(".duracao");

    const requestpesquisa = await fetch("/json/musics.json").then((e) => e.json());

    for (var index = 0; index < requestpesquisa.artistas.length; index++) {
      var imagem = requestpesquisa.artistas[index].urlimage;

      if (
       requestpesquisa.artistas[index].nome != null &&
       requestpesquisa.artistas[index].musica != null &&
       requestpesquisa.artistas[index].duração != null
      ) {
        teste.innerHTML +=
          '<section class="music"><ul><a href="' +
          "https://www.spotify.com/br/" +
          '"><img class="image"  src="' +
          imagem +
          '"/></a></ul><div class="tituloesub"><ul><h4 class="titulo">' +
         requestpesquisa.artistas[index].nome +
          '</h4><h5 class="sub">' +
         requestpesquisa.artistas[index].musica +
          "</h5></ul></div></section>";

        teste2.innerHTML +=
          ' </ul><h4 class="tempo">' +
         requestpesquisa.artistas[index].duração +
          "<h4></ul>";
        //teste1.innerHTML +='<div class="tituloesub"><ul></ul></div>';
      }
    }

    // testeq.innerHTML += '<section class="musics"><ul><img class="image"  src="' requestpesquisa.items[index].track.album.images[0].url+'"/></ul></section>';
  } catch (error) {
    console.log(error);
  }
}
