
function imprimir(){
    console.log("imprimo desde js")
}



//la idea es tener una funcion que reciba un parametro el cual me diga si es +-*/
//en base a ese parametro llamar a la funcion que necesite -- desde el archivo operaciones

function calcularHTML(operacion){
    //obtener el valor de los inputs
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;

    //validar que no este vacio---
    if(numero1 === "" || numero2 === ""){
        alert("Debes completar los datos");
        return
    }

    //una vez que validamos los campos debo hallar la operacion matematica
    //necesito una variable que se encargue de guardar el resultado

    let resultado = 0;
    if(operacion === "+"){
        resultado = sumar(numero1,numero2);
    } 
    ifelse(operacion === "-"){
        resultado = restar(numero1,numero2);
    }
    


    //para acabar mas bonito e insertarlo en html
    const p = document.createElement("p");
    const value = document.createTextNode(resultado);
    p.appendChild(value);
    const contenedor = document.querySelector("#resultado")
    contenedor.appendChild(p);
 }