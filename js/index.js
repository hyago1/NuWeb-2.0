const express = require("express");
const app = express();
const fs = require("fs");
const { url } = require("inspector");
const { default: axios } = require("axios");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json({ extended: true }));

const jsin = fs.readFileSync("json/musics.json", "utf-8");

let jsonFinal = JSON.parse(jsin);

let json = []; //variavel assistente

app.get("/listar", (req, res) => {
  //aqui lista todas as musicas
  const arquivojson = fs.readFileSync("json/musics.json", "utf-8");

  res.send(arquivojson);
});

app.post("/add", function (req, res) {
  //Aqui adciona na variavel assistente e CADASTRA A MUSICA
  const { nome, musica, duração, url, urlimage } = req.body;

  json.push(nome, musica, duração, url, urlimage);
  for (let index = 0; index < jsonFinal.artistas.length; index++) {
    if (jsonFinal.artistas[index].nome == null) {
      jsonFinal.artistas[index].nome = json[0];
    }
    if (jsonFinal.artistas[index].musica == null) {
      jsonFinal.artistas[index].musica = json[1];
    }
    if (jsonFinal.artistas[index].duração == null) {
      jsonFinal.artistas[index].duração = json[2];
    }
    if (jsonFinal.artistas[index].url == null) {
      jsonFinal.artistas[index].url = json[3];
    }
    if (jsonFinal.artistas[index].urlimage == null) {
      jsonFinal.artistas[index].urlimage = json[4];
      break;
    }
  }

  peegardados();

  fs.writeFileSync("json/musics.json", JSON.stringify(jsonFinal), (err) =>
    console.log("erro ao escrever no Json!!!!")
  );

  return res.redirect("http://127.0.0.1:5501/paginas/");
});

function peegardados() {
  //limpa a variavel assitente
  var jsin = [];
  json = jsin;
}

app.listen(8080, () => {
  console.log("subiu...");
});

//console.log(jsonDados)
