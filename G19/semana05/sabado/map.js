// Un Map siempre te devolvera una lista (Array)

const productos = [
    {
        name : "laptop",
        price : 1500
    },
    {
        name : "celular",
        price : 1800
    },
    {
        name : "monitos",
        price : 2000
    }
]

productos.map((producto,index)=>{
    console.log("indices", index);
    console.log("producto", producto.price);
})

//---------------------------------------------------------------------

const nombres = ["guille", "pedro", "maria", "jose"]

nombres.map((nombre,indicador)=>{
    if(indicador > 1){
        console.log(nombre)
    }
})

//----------------------------------------------------------------------
//arrays de lugares name- ubicacion
//return name de los lugares

const lugares = [
    {
        name : "Lima Gris",
        city : "Lima"
    },
    {
        name : "Piura Verano",
        city : "Piura"
    },
    {
        name : "Trujillo Primavera",
        city : "Trujillo"
    }
]

//index es para ir a un lugar especifico dentro del array [1]
lugares.map((lugar) => {
    console.log("Nombre", lugar.name);
})


//Veamos como retorna un Map

const numeros = [1,2,3,4,5,6,7,8,9,10];
const operacionProducto = numeros.map((numerito) =>{
    return numerito * 2
})

console.log(operacionProducto )

//---------------------------------------------------------------

const productos2 = [
    {
        name : "laptop",
        price : 1500
    },
    {
        name : "celular",
        price : 1800
    },
    {
        name : "monitos",
        price : 2000
    }
]

//reto cambiar o modificar el precio al doble

/*productos2.map((product) => {
    product.price = product.price*2
})
console.log(productos2)*/

const precioCyberWow = productos2.map((produc) =>{
    //en cada vuelta del elemento modificar el return 
    //producto2 = {name:"laptop", price:1500}
    return {
        name : `Cyberwow ${produc.name}`,
        price : produc.price * 2
    }
})

console.log("precioModificado", precioCyberWow)

// Escribir un programa que muestre la tabla de multiplicar del 1 al 10

const imprimirTable = (numero)=>{
    //esta instancia esta creando un array
    const arrayDiez = [1,2,3,4,5,6,7,8,9,10]

    arrayDiez.map((table,index)=>{
        console.log("producto", numero * (index + 1))
    });
}

imprimirTable(3)

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
// crear un array de numeros y luego calculemos el cubo de cada numero
//y hay que guardarlo en una variable 

const numeroCubo = [1,2,3,4,5,6,7,8,9,10];

let resultado = numeroCubo.map((cubo)=>{
    let newCubo = Math.pow(cubo,3);
    return `El cubo de ${cubo} es ${newCubo}`;
})

console.log(resultado)

let number = numeroCubo.map((numero)=>{
    console.log(Math.pow(numero,3));
})