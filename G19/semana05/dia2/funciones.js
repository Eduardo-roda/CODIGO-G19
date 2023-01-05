// una funcion es un conjunto de soluciones instrucciones
// realizar tareas - eventos - ejecucion numerica - fetch

//existen 3 tipos de funciones

//funcion declarativa o expresiva

function nombreDeLaFuncion(){
    //una ves declarada mi funcion todo el codigo que haga  en su interior 
    // se va a ejecutar solo al llamar a la funcion

    console.log();
}

//para poder llamar a la funcion necesito el nombre seguido de prentesis
//una vez que llame a la funsion el codigo se ejecutrara

nombreDeLaFuncion()

//una funsion es creada para poder reutilizar codigo 
//una de los trabajos de la funcion es hacer trabajo repetitivo
//al estar este trabajo en una funsion solo necesito escribir el codigo de la variable

function sumar(numero1, numero2){
    numero1 = 20;
    numero2 = 10; 

    return(numero1 + numero2)
}
console.log("suma", sumar(20,10))


// tipos de funciones 
//funcion declartiva 
function suma (a,b,y){
    return a+b-y
}
console.log("suma",suma(100,20,10))


//funcion expresiva o anonima 
// es la que se declara dentro de una variable 

let suma2 = function(a,b){
    return a+b
}

console.log("suma2", suma2(20,20))


//arrow function - funcion flecha
const suma3 = (a,b,c) =>{
    return a+b-c
}
console.log("suma3", suma3(20,20,20))


//funciones flecha cuando solo tiene un argumento o parametro no ncesita parentesis
const saludar =(nombre, apellido) => {
    //como imprimeuna manera mas elegante
    //return "hola mi nombre es" + nombre + "y mi apellido es " + apellido
    return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`
}
console.log(saludar("Eduardo", "Rodriguez"))


const hello =()=>"hola grupo 19"
console.log(hello())