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
    hiddePokeball();
    pokemonType(id);
    pokemonAbility(id);
}

getName = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            document.getElementById('poke-nombre').innerHTML="Name: "+pokemon.name.charAt(0).toUpperCase()+pokemon.name.substring(1);
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
            document.getElementById('move').innerHTML="Attack: "+pokemon.moves[0].move.name.charAt(0).toUpperCase()+pokemon.moves[0].move.name.substring(1);
        })
    })
}

pokemonType = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
            document.getElementById('poke-type').innerHTML="Type: "+pokemon.types[0].type.name;
        })
    })
}

pokemonAbility = (id) =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => {
        response.json()
        .then(function(pokemon){
           let s =  document.getElementById('poke-ability').innerHTML="Ability: "+pokemon.abilities[0].ability.name;
            console.log(s);
        })
    })
}

hiddePokeball = () => {
    document.getElementsByClassName('pokeball')[0].style.display='none';
}

jsonContent = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
    .then((response) => {
        if (response.status == 200) {
            console.log("Current Status: "+response.status);
        } else {
            console.log("Current status: Fail");    
        }
        
        response.json()
        .then(function(pokemon){
            // console.log("Current Status: "+pokemon.status);
        })
    })
}