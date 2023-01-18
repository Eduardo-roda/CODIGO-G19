function consultarPais() {
    fetch("https://restcountries.com/v3.1/subregion/europe").then(
    function(response){
        response.json()
        .then(function (paises) {
            console.log(paises)
        })
    })
}

consultarPais()