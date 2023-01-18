fetch("https://pokeapi.co/api/v2/pokemon?limit=100").then(
    function(response){
        console.log(response)
        response.json()
        .then(function (pokemon) {
            console.log(pokemon)
        })
    }
)