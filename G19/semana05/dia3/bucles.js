//Bucle es una estructura repetitiva, es decir hace algo muchas veces

// son normalmente usados para poder leer arrays, porque un bucle me va 
// leer cada elemento independiente

// for, en español es para, y el bucle mas antiguo y conocido
//

//iterador => indice de mi bucle
// i++
// i = i+i
// indica que se hara de 1 en 1

for (let i=0; i<=10; i++)
console.log("iterador",i);

// realizar bucles for - de incremento de 5 de 10 y de 50 100

/*for (let i=0; i<=100; i+=5)
console.log("num" , i);

for (let i=0; i<=100; i+=10)
console.log("num" , i);

for (let i=0; i<=100; i+=50)
console.log("num" , i);*/

// como recorremos un arrays con for ?

const alumnos = ["pepe", "guille", "carlos", "luis", "ana", "fernando"];

for(let i = 0; i < alumnos.length; i++){
    console.log(alumnos[i]);
}

const numeros = [1,2,3,4,5,6,7,8,9,10];
for (let j=0; j< numeros.length; j++){
    // como haria si quiero imprimir solo los pares??
    if (numeros[j]%2 == 0){
        console.log(numeros[j]);
    }
}
for (let j=0; j< numeros.length; j++){
    if (numeros[j]%2 != 0){
        console.log(numeros[j]);
    }
}

//---------------------------------------------------------------------------


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

for(i=0; i<laptops.length; i++){
    console.log(laptops[i].caracteristicas.procesador)
}


// Escribir un programa que pida una frase y escriba cuantas veces
// aparecen cada una de las vocales

const contarVocales = palabra => {
    const vocales = "aeiou";
    let cantidadVocales = 0;
    for(const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

const cadena = "Hola me llamo Juanito";
const vocales = contarVocales(cadena);
console.log("La cadena '%s' tiene %d vocales", cadena, vocales);

//----------------------------------------------------------

const contarVocal = (frase) => {
    const fraseMayuscula = frase.toUpperCase();
    //para poder saber cuantas vocales tengo, necesito un contador
    //este contador se va a encargar de guardar cuantas vocales tengo
    let contador = 0;
    for (let i = 0; i < fraseMayuscula.length; i++){
        const letras = fraseMayuscula[i]
        if (
            letras === "A" ||
            letras === "E" ||
            letras === "I" ||
            letras === "O" ||
            letras === "U"
        ){
            //contador = contador + 1
            contador ++;
        }
    }

    return `la frase tiene ${contador} vocales`
};

console.log(contarVocal("hola me llamo juan"));
console.log(contarVocal("aeiou"));
console.log(contarVocal("Eduardo"));

const array = [13,2,17,9,13,1,123,10];
let mayores = array.filter(elem => elem >10);
console.log(mayores);
