//un  objeto es una cantidad independiente de datos diferentes tipos de datos

//Carro = atributos de ese carro - llantas - tipo - alarma
//numero de puertos
//color 
//placa
//motor 
//hp

// un objeto se define un key (llave) un value (valor)

//crear el objeto carro

const carro = {
    color: "azul",
    motor: 2.0,
    marca: "nissan",
    modelo: "GTR",
    nuevo: true,
};

const persona = {
    edad: 35,
    nombre : "juanito", 
    sexo : "M",
    talla : 1.75,
    estadoCivil : "cazado",
    mayoEdad : true,
    donanteOrganos : false,
    tatuajes : true,
}

//se capturta todo el objeto
console.log("carro", carro);
//se captura un key luego de colocar el . a lado del objeto
console.log("carro", carro.color);


//se podra agregar mas atribitos o keys?
persona.celular = 99999999;
//segunda forma de agregar atributos
persona["profesion"] = "ingeniero";

persona.nombre = "Juan";
persona.estadoCivil = "soltero";


console.log("persona", persona);
