

const obtenerPokemones = async ()=> {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    const data = await response.json();

    console.log(data.results)

}

obtenerPokemones()