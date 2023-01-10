// existe dentro de js el document este es el archivo principal que envuelve todo nuestro proyecto
// esto nos permite obtener elementos html

// podemos hacerlo mediantesu etiqueta su clase o su id en base de selectores

const inputs = document.getElementsByTagName("input")
console.log("inputs", inputs);

//recordemos que input es un HTMLcollection pero para poder ser iterado debe ser convertido 
//a un array normal --
//usando Array.from convierte un HTMLcollection

const newInputs = Array.from(inputs);
console.log("new2", newInputs)
//------------------------------------------------
newInputs.map((newInput)=>{
    console.log(newInput)
})
//-----------------------------------------------------
const form = document.getElementsByTagName("form");

//acceder al botón
const button = document.getElementsByTagName("button");

//Voy a acceder al ID de un INPUT y cambiarle el color
const inputPassword = document.getElementById("input_password");
inputPassword.style.backgroundColor = "#000";
inputPassword.style.color = "#fff";

/*const inputLastName = document.getElementById("input_lastname");
inputLastName.style.fontFamily = "verdana";
inputLastName.style.color = "green";
inputLastName.style.borderColor = "red";*/

const inputEmail = document.getElementById("input_email");
inputEmail.style.color = "red";
inputEmail.style.borderRadius = "8px";

/*const inputName = document.getElementById("input_name");
inputName.style.backgroundColor = "yellow";
inputName.style.color = "#000";
inputName.style.padding = "8px";*/


console.log("password", inputPassword)

//atrapar por la clase
//en js class se conoce como className

const inputsName = document.getElementsByClassName("input_name")
console.log(inputsName);

const newInputsName = Array.from(inputsName);
newInputsName.forEach((input) => {
    console.log(input.value)
})

console.log(newInputsName)

const buttons = document.getElementsByClassName("btn_registro")
console.log(buttons);


// selectores querys selectors
// los hermanos menores de los selectores

// esto es con clase
const inputName = document.querySelector(".input_name");
console.log(inputName.value)

//esto es con id
const inputMail = document.querySelector("#input_email");
console.log(inputMail.value)

// query selectorAll es para mas de un elemento
const inputs2 = document.querySelectorAll("input");
console.log(inputs2)

//Quiero filtrar los input que sean de tipo texto
const arrayInputsText = [];
inputs2.forEach((input) => {
    if (input.type === "text"){
        arrayInputsText.push(input)
    }
});

console.log(arrayInputsText)

//Quiero filtrar los input que sean de tipo email
const arrayInputsEmail = [];
inputs2.forEach((input) => {
    if (input.type === "email"){
        arrayInputsEmail.push(input)
    }
});

console.log(arrayInputsEmail)

//-------------------------------------------------------------------------------------

const newInputs2 = Array.from(inputs2);
console.log("new", newInputs2)
