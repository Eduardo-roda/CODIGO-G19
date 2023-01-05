//1° Implementar un algoritmo que reciba 2 argumentos y los sume, 
// el resultado se debera imprimir en pantalla


function imprimir(){
    var objeto=document.getElementById('imprimeme');  //obtenemos el objeto a imprimir
    ventana.document.write(objeto.innerHTML);  //imprimimos el HTML del objeto en la nueva ventana
    ventana.document.close();  //cerramos el documento
    ventana.print();  //imprimimos la ventana
    ventana.close();  //cerramos la ventana
}

function suma1 (a,b){
    return a+b
}

//llamar al boton //

//2° Registrar el ingreso de notas de 4 examenes y calcular el 
// promedio de estos

function promedio (a,b,c,d) {
    return (a+b+c+d) / 4
}

/* Llamar al boton */

//3° Calcular el área de un rectángulo

function rectangulo (a,b) {
    return (a * b)
}

/* Llamar al boton */

//4° Calcular el área de un triángulo

function triangulo (a,b) {
    return (a * b) / 2
}

/* Llamar al boton */

//5° Calcular el área de una circunferencia

function circunferencia(r) {
    return (r *r)
}

/* Llamar al boton */