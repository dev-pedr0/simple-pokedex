function lerPokedex(nome) {
    //console.log(nome);
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then((resposta) => {
      //console.log(resposta);
      if (!resposta.ok) {
        throw new Error("Não foi possível buscar os dados");
      }
      return resposta.json();
    })
    .then((data) => console.log(data.sprites.front_default))
    .catch((error) => console.error(error));
}

function pegarNome() {
    let pokemonNome = document.enviarNome.pokemonNome.value;
    //console.log(pokemonNome);
    lerPokedex(pokemonNome);
}