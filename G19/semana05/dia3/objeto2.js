//Crear un objeto persona
// Crear un objeto que pueda contener una funcion

const persona = {
    nombre : "Juanito",
    edad : 30,
    talla: 1.80,
    calcularEdad : function(){
        console.log("calcular la edad")
    },
}

// 1era forma de llamar una funcion que esta dentro de un objeto 

console.log("1era forma");
persona.calcularEdad();

// 2da forma de llamar a una funcion dentro de un objeto

console.log("2da forma")
persona.calcularEdad;

// vamos a ver como acceder a kas propiedades de un abjeto desde una funcion interna
// this : esto va a permitir acceder a los datos del objeto padre

const computadora = {
    color : "azul",
    marca : "hp",
    nuevo : true,
    mostrarDetalle : function(){
        //color no pertenece al ambito (scope)
        console.log("color", this.color)
    },

    mostrarDetalleCompleto : function(){
        console.log(
            "Detalle",
            `color : ${this.color} - marca : ${this.marca} - es nuevo? ${this.nuevo ? "si" : "no"}`
        );
    },
}

computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();


// se podra tener un array dentro de un abjote?

const alumno = {
    nombre : "Juanito",
    notas : [10,5,8,9],
    cursos : ["html", "css", "js"]
}

console.log("notas", alumno.notas[1])


// Crearemos un array de objetos

const alumnos = [
    {
        nombre : "Luciano",
        edad : 18,
        promedio : 15
    },
    {
        nombre : "Pepe",
        edad : 21,
        promedio : 14,
        direccion : "Callao",
    }
]

// Como imprimir la nota de luciano

console.log(`Nota de ${alumnos[0].nombre}`, alumnos[0].promedio)
console.log("Nota de " + alumnos[0].nombre + " y de " + alumnos[1].nombre + " es", alumnos[0].promedio + " y " + alumnos[1].promedio)


//Esta estructura tambien es conocida como JSON
//json es un formato de archivos


const laptops = [
    {
        marca : "lenovo", 
        imagen : "url",
        nombre : "ide 23",
        vendedor : "falabella",
        precio : 2500,
        caracteristicas: {
            procesador: "i7",
            tarjetaDeVideo : "integrada",
            discoDuro : "solido",
        }
    },
    {
        marca : "mac", 
        imagen : "url",
        nombre : "catalina",
        vendedor : "ripley",
        precio : 3500,
        caracteristicas: {
            procesador: "i3",
            tarjetaDeVideo : "independiente",
            discoDuro : "solido",
        },
    }
]
// esto es un bucle
for (o = 0; o <= laptops.length; o++) {
    console.log(laptops[o].marca)
}


//-------------------------------------------


const componentes = {
    nombre : "lenovo ipad",
    caracteristicas : {
        ram : 16,
        tarjeta : "3900 super",
        memoria : 512,
        extra : {
            pantalla : "4k"
        }
    }
}

console.log("computadora", componentes.caracteristicas.extra.pantalla);

