// 1. crear función fullName
// 2. aceptar dos parámetros "firstName", "lastName"
// 3. súmalos (concatenalos) y devuelve el resultado en mayúsculas
// 4. invoca fullName y pasa algunos valores
// 5. resultado del registro
// 6. cambiar el orden de los argumentos
// 7. refactorizar al parámetro del objeto

function fullName({firstName, lastName}){
    const fullName = `${firstName}${lastName}`
    return fullName.toUpperCase();
}

console.log(fullName({firstName:"Eduardo", lastName:" Rodriguez"}))