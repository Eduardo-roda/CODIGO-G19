// while tmabién sirve para poder hacer una accion un numero determinado
//es decir un bucle

//la estructura de while siempre va acompañada de un contador 

//while(la_condicion){

//}

let contador = 0;   // este sera el valor inicial

while(contador <= 5){ // este sera el valor maximo
    console.log("contador1", contador)
    //no se olviden de alterar el contador en cada vuekta
    contador++
}

//escribir un programa que pida al usuario una palabra y lo muestre 10 veces

const imprimirDiezVeces = (palabra) => {
    let contador = 0;

    while(contador < 10){
        console.log(palabra)
        contador++;
    }
}

imprimirDiezVeces("hola tecsup");

//escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10

const tabla = (num) => {
    let cont = 1;

    while(cont <= 10){
        console.log(num * cont)
        cont++
    }
}

tabla(9); 

//escribir un programa que pida al usuario un numero entero positivo y muestre por pantalla
//todos los numeros impares desde 1 hasta ese numero separado por comas
//todo:10
//resultado : 1,3,5,7,9

const imprimirNumero = () => {
    let numero = parseInt(prompt("Ingresa número entero positivo: "));
    let contador = 0;

    while(contador < numero){
        if(contador %2 != 0){
            console.log(contador);
        }
        contador++;
    }
};

imprimirNumero();

