const crear = document.querySelector("#crear-sesion");
const obtener = document.querySelector("#obtener-sesion");
const eliminar = document.querySelector("#eliminar-sesion");


crear.onclick = function(){
    //para poder crear la variable desde session storage ....invocamos
    sessionStorage.setItem("variable_1","Mi primer variable en session")
}

obtener.onclick = function(){
    const variable = sessionStorage.getItem("variable_1")
    console.log(variable)
}

/*eliminar.onclick = function(){
    const variable1 = sessionStorage.removeItem("variable_1")
    console.log(variable1,"se elimino la sesión")
}*/

eliminar.onclick = function(){
    sessionStorage.removeItem("variable_1")
}