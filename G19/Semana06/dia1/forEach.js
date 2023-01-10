//for each es una mezcla de for y map
//la diferencia es no retornar nada 
//itera el array

const numero = [1,2,3,4,5,6,7,8,9,10];

numero.forEach((numerito, index) =>{
    return numerito * 2;
});

console.log(numero)

numero.forEach((numerito) => console.log(numerito * 2));