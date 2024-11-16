const nomeInput = document.getElementById("pokemonNome");
const idInput = document.getElementById("pokemonId");

function lerPokedex(id) {
  //console.log(id);
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((resposta) => {
      //console.log(resposta);
      if (!resposta.ok) {
        throw new Error("Não foi possível buscar os dados");
      }
      return resposta.json();
    })
    .then((data) => {
      //console.log(data.types[0].type);
      const pokemonImg = data.sprites.front_default;
      const img = document.getElementById("pokemonImagem");
      img.setAttribute("src", pokemonImg);

      const pokemonName = data.name;
      const pokemonOrder = data.id;
      //console.log(pokemonName);
      nomeInput.value = pokemonName.toUpperCase();
      idInput.value = pokemonOrder;

      const tipos = document.getElementById("tipos");
      tipos.innerHTML = "";
      data.types.forEach((typeInfo) => {
        const tipo = document.createElement("span");
        tipo.classList.add("tipo");
        tipo.textContent = typeInfo.type.name.toUpperCase();
        const botaoAntes = document.getElementById("antes");
        const botaoDepois = document.getElementById("depois");
        const sombraPokedex = document.getElementById("pokedex");
        //console.log(botaoAntes);
        //console.log(botaoDepois);
        //console.log(sombraPokedex);
        switch (typeInfo.type.name) {
          case "normal":
            tipo.style.backgroundColor = "#A8A878";
            botaoAntes.style.backgroundColor = "#A8A878";
            botaoDepois.style.backgroundColor = "#A8A878";
            sombraPokedex.style.boxShadow = "0px 5px 2px #A8A878";
            break;
          case "water":
            tipo.style.backgroundColor = "#6890F0";
            botaoAntes.style.backgroundColor = "#6890F0";
            botaoDepois.style.backgroundColor = "#6890F0";
            sombraPokedex.style.boxShadow = "0px 5px 2px #6890F0";
            break;
          case "bug":
            tipo.style.backgroundColor = "#A8B820";
            botaoAntes.style.backgroundColor = "#A8B820";
            botaoDepois.style.backgroundColor = "#A8B820";
            sombraPokedex.style.boxShadow = "0px 5px 2px #A8B820";
            break;
          case "grass":
            tipo.style.backgroundColor = "#78C850";
            botaoAntes.style.backgroundColor = "#78C850";
            botaoDepois.style.backgroundColor = "#78C850";
            sombraPokedex.style.boxShadow = "0px 5px 2px #78C850";
            break;
          case "fire":
            tipo.style.backgroundColor = "#F08030";
            botaoAntes.style.backgroundColor = "#F08030";
            botaoDepois.style.backgroundColor = "#F08030";
            sombraPokedex.style.boxShadow = "0px 5px 2px #F08030";
            break;
          case "electric":
            tipo.style.backgroundColor = "#F8D030";
            botaoAntes.style.backgroundColor = "#F8D030";
            botaoDepois.style.backgroundColor = "#F8D030";
            sombraPokedex.style.boxShadow = "0px 5px 2px #F8D030";
            break;
          case "flying":
            tipo.style.backgroundColor = "#A890F0";
            botaoAntes.style.backgroundColor = "#A890F0";
            botaoDepois.style.backgroundColor = "#A890F0";
            sombraPokedex.style.boxShadow = "0px 5px 2px #A890F0";
            break;
          case "ground":
            tipo.style.backgroundColor = "#E0C068";
            botaoAntes.style.backgroundColor = "#E0C068";
            botaoDepois.style.backgroundColor = "#E0C068";
            sombraPokedex.style.boxShadow = "0px 5px 2px #E0C068";
            break;
          case "poison":
            tipo.style.backgroundColor = "#A040A0";
            botaoAntes.style.backgroundColor = "#A040A0";
            botaoDepois.style.backgroundColor = "#A040A0";
            sombraPokedex.style.boxShadow = "0px 5px 2px #A040A0";
            break;
          case "fighting":
            tipo.style.backgroundColor = "#C03028";
            botaoAntes.style.backgroundColor = "#C03028";
            botaoDepois.style.backgroundColor = "#C03028";
            sombraPokedex.style.boxShadow = "0px 5px 2px #C03028";
            break;
          case "rock":
            tipo.style.backgroundColor = "#B8A038";
            botaoAntes.style.backgroundColor = "#B8A038";
            botaoDepois.style.backgroundColor = "#B8A038";
            sombraPokedex.style.boxShadow = "0px 5px 2px #B8A038";
            break;
          case "psychic":
            tipo.style.backgroundColor = "#F85888";
            botaoAntes.style.backgroundColor = "#F85888";
            botaoDepois.style.backgroundColor = "#F85888";
            sombraPokedex.style.boxShadow = "0px 5px 2px #F85888";
            break;
          case "steel":
            tipo.style.backgroundColor = "#B8B8D0";
            botaoAntes.style.backgroundColor = "#B8B8D0";
            botaoDepois.style.backgroundColor = "#B8B8D0";
            sombraPokedex.style.boxShadow = "0px 5px 2px #B8B8D0";
            break;
          case "dark":
            tipo.style.backgroundColor = "#705848";
            botaoAntes.style.backgroundColor = "#705848";
            botaoDepois.style.backgroundColor = "#705848";
            sombraPokedex.style.boxShadow = "0px 5px 2px #705848";
            break;
          case "ghost":
            tipo.style.backgroundColor = "#705898";
            botaoAntes.style.backgroundColor = "#705898";
            botaoDepois.style.backgroundColor = "#705898";
            sombraPokedex.style.boxShadow = "0px 5px 2px #705898";
            break;
          case "ice":
            tipo.style.backgroundColor = "#98D8D8";
            botaoAntes.style.backgroundColor = "#98D8D8";
            botaoDepois.style.backgroundColor = "#98D8D8";
            sombraPokedex.style.boxShadow = "0px 5px 2px #98D8D8";
            break;
          case "fairy":
            tipo.style.backgroundColor = "#EE99AC";
            botaoAntes.style.backgroundColor = "#EE99AC";
            botaoDepois.style.backgroundColor = "#EE99AC";
            sombraPokedex.style.boxShadow = "0px 5px 2px #EE99AC";
            break;
          case "dragon":
            tipo.style.backgroundColor = "#7038F8";
            botaoAntes.style.backgroundColor = "#7038F8";
            botaoDepois.style.backgroundColor = "#7038F8";
            sombraPokedex.style.boxShadow = "0px 5px 2px #7038F8";
            break;
          default:
            tipo.style.backgroundColor = "#ccc";
            botaoAntes.style.backgroundColor = "#ccc";
            botaoDepois.style.backgroundColor = "#ccc";
            sombraPokedex.style.boxShadow = "0px 5px 2px #ccc";
        }
        tipos.appendChild(tipo);
      });
    })
    .catch((error) => console.error(error));
}

function selecionarId() {
  let pokemonId = idInput.value;
  pokemonId = Number(pokemonId) <= 1 ? 1 : Number(pokemonId);
  if(pokemonId >= 1026 && pokemonId <= 10000) {
    pokemonId = 10001;
  }
  lerPokedex(pokemonId);
}

function pokemonAnterior() {
  let pokemonId = idInput.value;
  pokemonId = Number(pokemonId) - 1 <= 1 ? 1 : Number(pokemonId) - 1;
  idInput.value = pokemonId;
  lerPokedex(pokemonId);
}

function pokemonDepois() {
  let pokemonId = idInput.value;
  pokemonId = Number(pokemonId) + 1;
  if(pokemonId >= 1026 && pokemonId <= 10000) {
    pokemonId = 10001;
  }
  idInput.value = pokemonId;
  lerPokedex(pokemonId);
}

function pegarNome() {
  lerPokedex(nomeInput.value.toLowerCase());
}

idInput.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    evento.preventDefault();
  }
});


let listaNomes = [];

function listaNomesPokemon() {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0`)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error("Não foi possível buscar os dados");
      }
      return resposta.json();
    })
    .then((data) => {
      //console.log(data.results);
      listaNomes = data.results.map((pokemon) => pokemon.name);
      //console.log(listaNomes);
      preencherContainerSugestoes(listaNomes);
    })
    .catch((error) => console.error(error));
}

function preencherContainerSugestoes (lista) {
  const ulNomes = document.querySelector("#container-sugestoes ul");
  const textoDigitado = nomeInput.value.toLowerCase();
  console.log(textoDigitado);
  console.log(lista);
  //console.log(ulNomes);
  ulNomes.innerHTML = "";
  const sugestoesFiltradas = lista.filter(sugestao => sugestao.startsWith(textoDigitado));
  console.log(sugestoesFiltradas);
  sugestoesFiltradas.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    li.addEventListener("click", () => {
      nomeInput.value = nome;
      ulNomes.innerHTML = "";
      pegarNome();
    });
    ulNomes.appendChild(li);
  });  
}

nomeInput.addEventListener("keyup", listaNomesPokemon);

listaNomesPokemon();
