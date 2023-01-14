document.write("hola galaxia");


//vamos a crear una lista JS
//

const containerList = document.querySelector("#container-list");
//js tiene una funcion llamada createElement la cuak me permite crear un elemento HTML

const ul = document.createElement("ul");
ul.className = "lista";
containerList.appendChild(ul)



//para acceder a todo el body

const body = document.body;
body.style.backgroundColor = "yellow"
body.style.fontFamily ="Helvetica";
