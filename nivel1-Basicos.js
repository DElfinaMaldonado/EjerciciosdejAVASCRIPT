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


// 1. Un restaurante acepta reservaciones solo si hay al menos 5 mesas disponibles. Verifica si se puede hacer la reservación según las mesas libres.
let reservaciones_mesas = 6;
if(reservaciones_mesas >= 5 ) {
    console.log("Se pueden realizar su reservacion");
} else if (reservaciones_mesas <= 4) {
    console.log("No se puede realizar la reservacion debido a  no se tienen mesas disponibles");
}

// 2. Te dan el nivel de aceite del motor de un auto (en litros). Determina si necesita cambio de aceite (menos de 2 litros) o está bien.
let nivel_aceite = 20;
if(nivel_aceite >= 2 ){
    console.log("Usted tiene mas de 2 litrso de aceite, por lo que su nivel esta bien");
} else if(nivel_aceite < 2) {
    console.log("Usted teiene menos de 2 litros de aceite, por lo cual necesita un cambio");
}

// 3. Una persona tiene cierta cantidad de horas de sueño. Indica si durmió lo suficiente (al menos 7 horas) o necesita descansar más.
let cantidad_de_horas = 4;
if(cantidad_de_horas >= 7 ) {
    console.log("Usted durmio la cantidad de horas necesarias");
} else if(cantidad_de_horas < 7){
    console.log("Usted necesita dormir mas horas");
}

// 4. Te dan el porcentaje de humedad en el aire. Decide si el ambiente está seco (menos de 30%) o no.
let porcentaje_humedad = 45;
if(porcentaje_humedad > 30) {
    console.log("El ambiente no es fresco");
} else if (porcentaje_humedad < 30) {
    console.log("El clima no es fresco");
}

// 5. Un parque de diversiones tiene límite de capacidad. Verifica si aún hay cupo disponible según el número actual de visitantes.
let numero_visitantes = 45;
let limite_capacidad = 50;
if(numero_visitantes <= limite_capacidad) {
    console.log("Aun existe cupo para mas visitantes");
} else if (numero_visitantes > limite_capacidad) {
    console.log("Ya no se tiene cupo para mas visitantes");
}

// 6. Te dan el precio de un producto y el presupuesto de un cliente. Determina si le alcanza el dinero para comprarlo con un margen de $50 extras.
let precio_producto = 90;
let presupuesto_cliente = 50;
if (presupuesto_cliente >= precio_producto + 50) {
    console.log("Puede comprar el producto");
}else if (presupuesto_cliente < precio_producto){
    console.log("No puede comprar el producto");
}

// 7. Una aplicación tiene un tamaño en MB. Verifica si cabe en el almacenamiento disponible del celular para instalarla.
let almacenamiento_disponible =  42;
let tamaño_aplicacion = 56;
if (almacenamiento_disponible >= tamaño_aplicacion) {
    console.log("Se tiene el almacenamiento disponible");
} else if (almacenamiento_disponible < tamaño_aplicacion) {
    console.log("No se tiene el almacenaiento suficiente");
}

// 8. Te dan los kilómetros recorridos de un auto. Indica si necesita servicio de mantenimiento (cada 10,000 km).
let kilometros_recorridos = 900;
if(kilometros_recorridos >= 50000){
    console.log("Necesita de servicio de mantenimiento")
} else if(kilometros_recorridos >= 40000) {
    console.log("Necesita de servicio de mantenimiento");
} else if(kilometros_recorridos >= 30000) {
    console.log("Necesita de servicio de mantenimiento");
} else if(kilometros_recorridos >= 20000) {
    console.log("Necesita de servicio de mantenimiento");
}else if(kilometros_recorridos >= 10000) {
    console.log("Necesita de servicio de mantenimiento");
} else if(kilometros_recorridos < 10000) {
    console.log("Aun no necesita de servicio de mantenimiento");
}

// 9. Un empleado trabajó cierta cantidad de horas en la semana. Determina si hizo horas extras (más de 40 horas semanales).
var horasExtra = 10;
if (horasExtra > 40) {
    console.log("Trabaja horas extra");
} else if (horasExtra <= 40) {
    console.log("No trabaja horas extra");
}

// 10. Te dan el nivel de batería de un dispositivo. Decide si necesita cargarse urgentemente (menos de 10%) o puede esperar.
let bateria = 5;
if(bateria >= 10) {
    console.log("Su dispositivo tiene mas o igual al 10 %, no necesita cargarse");
} else if (bateria < 10) {
    console.log("Su dispositivo tiene menos del 10 %, necesita cargarse");
}



// 1. Un cine ofrece descuento del 50% a niños menores de 12 años y adultos mayores de 65. Determina si una persona califica para descuento según su edad.
let edad_descuento = 12;
if(edad_descuento < 12 || edad_descuento  >= 65){
    console.log("Usted cuenta con el 50% de descuento");
} else {
    console.log("No cuenta con el 50% de descuento");
}

// 2. Una piscina solo permite el acceso si la temperatura del agua está entre 24°C y 30°C. Verifica si está en condiciones para abrir.
let temperatura_agua = 15;
if(temperatura_agua >= 24 && temperatura <= 30){
    console.log("Tiene acceso");
}else {
    console.log("No tiene acceso");
}

// 3. Un restaurante tiene capacidad para 80 personas y ya hay cierta cantidad de comensales. Llega un grupo de N personas. Determina si pueden entrar todos.
// let cantidad_personas = 75;
// if(cantidad_personas > 80){
//     console.log("Todos puede entrar");
// } else if (cantidad_personas <= 80){
//     console.log("No peden entrar");
// }
let cantidad_de_comensales = 50;
let c

// 4. Una tarjeta de crédito tiene un límite de $50,000 y un saldo usado actual. Verifica si se puede realizar una compra de cierto monto.
let limite_tarjeta = 50000;
let saldo_actual = 25000;
if(limite_tarjeta - saldo_actual){
    console.log("Aun cuentas con dinero para realizar la compra");
}else if (saldo_actual > limite_tarjeta){
    console.log("Ya no cuenta con saldo actual para realizar la compra");
}
// 5. Un examen tiene 50 preguntas. Necesitas al menos 35 correctas para aprobar y 45 para obtener mención honorífica. Clasifica el resultado según respuestas correctas.
let preguntas_correctas = 12;
if(preguntas_correctas >= 45){
    console.log("Felicidades tiene mencion honorifica");
}else if(preguntas_correctas >= 35){
    console.log("Felcidades apruebas");
}else if(preguntas_correctas < 34){
    console.log("Sigue esforzando");
}

// 6. Una planta necesita riego si la humedad de la tierra es menor al 40%. Determina si hay que regarla según el porcentaje actual.
let humedad_tierra = 65;
if(humedad_tierra < 40){
    console.log("La planta necesita riego");
}

// 7. Un delivery de comida tarda 30 minutos si la distancia es menor a 3 km, o 50 minutos si es mayor. Indica el tiempo de entrega estimado.
let distancia_comida = 2;
if(distancia_comida >= 3){
    console.log("Su comida tardara 50 minutos en ser entregada");
}else if (distancia_comida < 3){
    console.log("Su comida tardara 30 minutos en ser entregada");
}

// 8. Una persona quiere rentar un auto. Debe tener al menos 21 años y licencia vigente (antigüedad mínima de 2 años). Verifica si cumple los requisitos.
let edad_auto = 21;
let licencia_auto = 5;
if(edad_auto >= 21 && licencia_auto <= 2){
    console.log("Puede rentar su auto");
}else {
    console.log("No puede rentar su auto");
}

// 9. Un hotel cobra $800 por noche entre semana y $1,200 los fines de semana. Calcula el costo total según el día y las noches de estadía.
// let dia_semana_hotel = "Lunes";
// switch (dia_semana_hotel) {
//     case "Lunes":
//         case "Martes":
//             case "Miercoles":
//                 case "Jueves":
//                     case "Viernes":
//                         consonsole.log("El costo del hotel, es de $1,200");
//                         break;
//                         case

// }

// 10. Una tienda de mascotas solo vende perros de razas grandes a personas con jardín. Determina si puede realizarse la venta según el tipo de perro y si tiene jardín.
let cuenta_con_jardin = "true";
if(cuenta_con_jardin == "true"){
    console.log("Queda autorizada la venta de un perro grande");
}else if(cuenta_con_jardin == "false"){
    console.log("Solo queda autoriza la venta de perros medianos o pequeños");
}