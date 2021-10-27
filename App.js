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

    getApi(id);
    hiddePokeball();
}

getApi = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            document.getElementById('poke-image-front').setAttribute("src", pokemon.sprites.front_default);
            document.getElementById('poke-image-back').setAttribute("src", pokemon.sprites.back_default);
            document.getElementById('poke-nombre').innerHTML="Name: "+pokemon.name.charAt(0).toUpperCase()+pokemon.name.substring(1);
            document.getElementById('move').innerHTML="Attack: "+pokemon.moves[0].move.name.charAt(0).toUpperCase()+pokemon.moves[0].move.name.substring(1);
            document.getElementById('poke-type').innerHTML="Type: "+pokemon.types[0].type.name;
            document.getElementById('poke-ability').innerHTML="Ability: "+pokemon.abilities[0].ability.name;
        })
    })
}

hiddePokeball = () => {
    document.getElementsByClassName('pokeball')[0].style.display='none';
}