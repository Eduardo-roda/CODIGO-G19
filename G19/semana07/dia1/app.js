// API (APLICATION PROGRAMING INTERFACE)
// ES UN SERVICIO ----- formato json
//va usar el api de GitHub, esto nos devuelve información


// en js existe una funcion especifica para ello.. esto hace peticióna un 
//fetch
//funcion nativa de JS
//existe varios tipos de peticiones .. las principales sol;
//GET = OBTENER INFORMACIÓN
//POST = SIRVE PARA CREAR DATOS
//PUT = SIRVE PARA ACTUALIZAR DATOS 
//DELETE = PARA ELIMINAR DATOS

//FUNCION ASYNC asincrona
// Las funciones asincronas fueron creadas para ejecutar algo y en caso la ejecucion
//demore mas de lo normal se espere para poder ejecutar el siguiente 

//https://api.github.com/users/guillermosifu
//hay un tiempo de espera el cual no conocemos, no es automatico

//estructura de function async
//al aumnetar el async estamos convirtiendo nuestra funcion aun funcione async
//aync function obtenerDatos(){}

//const obtenerDatosGit = async ()=>{}

//existe una palabra clave la cual le dira el codigo que espere
//await

const imageProfile = document.querySelector("#img-profile");//
const githubName = document.querySelector("#github-name");//
const githubUsername = document.querySelector("#github-username");//
const githubBio = document.querySelector("#github-bio");//
const githubJoined = document.querySelector("#github-joined");//
const githubRepos = document.querySelector("#github-repos");//
const githubFollowers = document.querySelector("#github-followers");//
const githubFollowing = document.querySelector("#github-following");//
const githubLocation = document.querySelector("#github-location");
const githubURL = document.querySelector("#github-url")

//action button  input 
const githubActionSearch = document.querySelector("#github-action-search");
const githubInputSearch = document.querySelector("#github-search");


githubActionSearch.onclick = ()=>{
    const username = githubInputSearch.value;
    githubInputSearch.value = "";
    //aca nos falta validar si el input esta vacio
    if(username === ""){
        Swal.fire({
            title:"Error",
            text: "Debe llenar el campo usuario",
            icon:"error"
        });
        return;
    }
    //ojo solo llegar a ejecutar la ejecuión si el username no esta vacio
    //recuerda que el return termina la ejecucion
    obtenerDatosGithub(username);
}


githubInputSearch.addEventListener("keyup",function(event){
    if(event.key === "Enter"){
        obtenerDatosGithub(event.target.value)
    }
});


const obtenerDatosGithub = async (username = "guillermosifu")=>{
    //ejecuta fetch con la url y una vez que acabe la ejecucion recien ejecutara la siguiente funcion

    const response = await fetch(`https://api.github.com/users/${username}`)

    const data = await response.json()
    //data message erro .. solo no exista el usuario
    //su valor not found
    if(data.message === "Not Found"){
        Swal.fire({
            title: "Error",
            text: "no existe usuario",
            icon: "error"
        });
        return;
    }
    setDataUSer(data)
};

const formatDate = (fecha) =>{
    let date = new Date(fecha);
    return date.toISOString().split("T")[0];
}

const setDataUSer = (data)=> {
    imageProfile.src = data.avatar_url;
    githubName.innerHTML = data.name;
    githubUsername.innerHTML = data.login;
    githubBio.innerHTML = data.bio;
    githubJoined.innerHTML = formatDate(data.created_at);
    githubRepos.innerHTML = data.public_repos;
    githubFollowers.innerHTML = data.followers;
    githubFollowing.innerHTML = data.following;
    githubURL.innerHTML = data.url;
    githubLocation.innerHTML = data.location;
}

//llama funcion principal
obtenerDatosGithub()

/*(estructura de funcion normal)async function obtenerDatos(){}*/