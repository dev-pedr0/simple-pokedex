function lerPokedex(id) {
  //console.log(id);
  fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error("Não foi possível buscar os dados");
      }
      return resposta.json();
    })
    .then((data) => pokedexDados(data.results[id - 1].url))
    .catch((error) => console.error(error));
}

function pokedexDados(url) {
  //console.log(url);
  fetch(url)
    .then((resposta) => {
      if (!resposta.ok) {
        throw new Error("Não foi possível buscar os dados");
      }
      return resposta.json();
    })
    .then((data) => {
      const pokemonImg = data.sprites.front_default;
      const img = document.getElementById("pokemonImagem");
      img.setAttribute("src", pokemonImg);
      const pokemonName = data.name;
      const nome = document.getElementById("nome");
      nome.innerHTML = pokemonName.toUpperCase();
    })
    .catch((error) => console.error(error));
}

function selecionarId() {
  let pokemonId = document.enviarPokemon.pokemonId.value;
  pokemonId = Number(pokemonId) <= 1 ? 1 : Number(pokemonId);
  pokemonId = Number(pokemonId) >= 898 ? 898 : Number(pokemonId);
  lerPokedex(pokemonId);
}

function pokemonAnterior() {
  let pokemonId = document.enviarPokemon.pokemonId.value;
  pokemonId = Number(pokemonId) - 1 <= 1 ? 1 : Number(pokemonId) - 1;
  document.enviarPokemon.pokemonId.value = pokemonId;
  lerPokedex(pokemonId);
}

function pokemonDepois() {
  let pokemonId = document.enviarPokemon.pokemonId.value;
  pokemonId = Number(pokemonId) + 1 >= 898 ? 898 : Number(pokemonId) + 1;
  document.enviarPokemon.pokemonId.value = pokemonId;
  lerPokedex(pokemonId);
}

const formulario = document.getElementById("pokemonId");
formulario.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    evento.preventDefault();
  }
});
