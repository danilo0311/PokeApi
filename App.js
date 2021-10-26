// NOTA: uso el setTimeout por los tiempos de ejecución 
window.setTimeout(function(){
    document.getElementById('load-next').addEventListener('click', sortPokemon);
});

randomNumber = () => {
    let idPokemon = Math.floor(Math.random() * 118);
    if (idPokemon != 0) {
        return idPokemon
    }
    return 1;
}

sortPokemon = () => {
    let id = randomNumber();

    getImage(id);
    getName(id);
}

getName = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            document.getElementById('poke-nombre').innerHTML=pokemon.name;
        })
    })
    
}

getImage = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            document.getElementById('poke-image').setAttribute("src", pokemon.sprites.front_default);
        })
    })
}

jsonValues = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${1}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            alert(pokemon.moves[0].move.name);
        })
    })
}