// 1. crear las variables "puntuación1", "puntuación2", "puntuación3" y
//    asignar valores (0-100)
// 2. calcular la puntuación total y la puntuación media, y asignarlas a las variables.
// 3. registre la puntuación total y la puntuación media
// 4. crea la variable "placas" y asigna 20
// 5. crea la variable "personas" y asigna 7
// 6. calcular placas restantes y asignar a la variable
// 7. agregue uno a las placas restantes
// 8. cree una variable de mensaje y muestre 'Hay (su valor va aquí) placas disponibles' - concatenación de cadenas
// 9. mensaje de registro

const puntuación1 = 15;
const puntuación2 = 48;
const puntuación3 = 73;

const pTotal = puntuación1 + puntuación2 + puntuación3;
let pMedia = pTotal / 3;

const placas = 20;
const personas = 7;

let placasRestantes = 20 % 7;
placasRestantes++;

const message = 'there are ' + placasRestantes + ' placas disponibles';
console.log(message);