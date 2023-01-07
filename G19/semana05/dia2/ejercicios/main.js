//1° Implementar un algoritmo que reciba 2 argumentos y los sume, 
// el resultado se debera imprimir en pantalla
function suma1 (a,b){
    return a+b
}


//2° Registrar el ingreso de notas de 4 examenes y calcular el 
// promedio de estos
function promedio (a,b,c,d) {
    return (a+b+c+d) / 4
}

//3° Calcular el área de un rectángulo
function rectangulo (a,b) {
    return (a * b)
}

//4° Calcular el área de un triángulo
function triangulo (a,b) {
    return (a * b) / 2
}

//5° Calcular el área de una circunferencia
function circunferencia(r) {
    return (r *r)
}


function MenuEjercicios(nro_ejercicios){
    switch(nro_ejercicios){
        case 1:
            let valor1 = parseFloat(prompt("ingresa el valor numero 1"));
            let valor2 = parseFloat(prompt("ingresa el valor numero 2"));
            alert(ej1_sumaValores(valor1,valor2))
    }
}



