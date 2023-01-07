// 1. crear objeto de coche
// 2. agregue marca, modelo, año, colores (matriz),
//    claves híbridas (booleanas)
// 3. agregar dos métodos (conducir y detener)
// 4. en el registro de configuración del cuerpo de la función con texto aleatorio
// 5. hacer registro
// 6. registra el primer color
// 7. invocar ambos métodos

const coche = {
    marca : "Toyota",
    modelo : "Hilux",
    anio : 2015,
    colores : ["rojo", "azul", "verde"],
    reparado : true,
    buenEstado : false,
    conducir: function(){
        console.log(`Tienes un carro ${this.marca} ${this.modelo} del año ${this.anio}`);
    },
    detener: function(){
        console.log(`El carro ${this.colores[0]} ${this.marca} se detuvo`);
    },
};

console.log(coche)
console.log(coche.colores[1])
console.log(coche.conducir())
console.log(coche.detener())