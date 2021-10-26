// NOTA: uso el setTimeout por los tiempos de ejecución 

window.setTimeout(function(){
    document.getElementById('load-next').addEventListener('click', sortPokemon);
});

// NOTA: return tiene valor de 1 en caso de ser 0 por que ese pokemon no existe

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
    pokemonAttack(id);
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
            document.getElementById('poke-image-front').setAttribute("src", pokemon.sprites.front_default);
            document.getElementById('poke-image-back').setAttribute("src", pokemon.sprites.back_default);
        })
    })
}

pokemonAttack = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            document.getElementById('move').innerHTML=pokemon.moves[0].move.name;
        })
    })
}

jsonContent = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            console.log(pokemon.location_area_encounters);
        })
    })
}