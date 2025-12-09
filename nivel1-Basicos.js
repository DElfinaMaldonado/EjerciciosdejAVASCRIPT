//Te dan la edad de una persona.
//Indica si puede entrar a una fiesta donde solo entran mayores de edad.
var edad = 45;
if (edad >= 18) {
console.log("Puedes entrar a la fiesta");
} else {
console.log ("No puedes entrar a la fiesta");
}

// Tienes una temperatura en grados.
//Decide si hace frío (menos de 15°) o no.
var temperatura = 15;
if ( temperatura <15) {
    console.log("Hace frio");
}else {
    console.log("No hace frio");
}

//Un estudiante tiene una calificación numérica.
//Indica si aprobó (mínimo 60) o reprobó.
var calificación = 40;
if(calificación >= 60) {
console.log("Aprobo la materia");
} else if (calificación < 60) {
console.log("No aprobó la materias");
}

// Tienes un numero cualquiera. Determina si es positivo o negativo
let numero = -8;
if(numero == 0){
    console.log("El numero es cero");
} else if (numero > 0){
    console.log("El numero es positivo");
} else if(numero < 0){
    console.log("El numero es negativo");
}

//Una tienda tiene un límite de stock para un producto. Verifica si hay suficiente inventario para realizar una venta de cierta cantidad de unidades.
var inventario = 45;
var ventadeproducto = 50;
if( ventadeproducto <= inventario){
    console.log("Se puede hacer la venta de producto en unidades");
} else if (ventadeproducto > inventario){
    console.log("No se puede vender el producto");
}

//Te dan la altura de una persona en centímetros. Determina si puede subirse a una montaña rusa que requiere mínimo 140 cm de altura.
var altura_Persona = 120;
if(altura_Persona >= 140){
    console.log("La persona puede subirse a la montaña rusa");
} else if(altura_Persona < 140){
    console.log("La persona no puede subirse a la montaña rusa");
}

//Un cine tiene un horario de cierre. Dada la hora actual, indica si el cine está abierto (antes de las 23 horas) o cerrado.
var hora = 4;
if(hora < 23){
    console.log("El cine esta abierto");
}else if(hora > 23) {
    console.log("El cine esta cerrado");
}

//Un jugador tiene cierta cantidad de puntos. Determina si ganó el nivel (necesita al menos 100 puntos) o lo perdió.
var cantidad_puntos = 36;
if(cantidad_puntos >= 100){
    console.log("Ganaste el nivel");
}else if(cantidad_puntos <= 99){
    console.log("Perdiste el nivel");
}

//Tienes la velocidad de Internet en Mbps. Decide si la conexión es lenta (menos de 10 Mbps) o rápida.
var velocidad_Internet = 20;
if(velocidad_Internet < 10){
    console.log("La velocidad de Internet es lenta");
}else if (velocidad_Internet >= 10){
    console.log("La velocidad de internet es rapida");
}

//Una persona tiene cierta cantidad de dinero y un producto tiene un precio.
//Determina si la persona puede comprarlo o no.
var cantidadInicial = 100;
var producto = 80;
if(cantidadInicial > producto ) {
console.log("Puede Comprar el producto");
} else if(cantidadInicial < producto){
    console.log("No puede comprar el producto");
}