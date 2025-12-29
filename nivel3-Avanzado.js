//Un empleado trabaja horas extra sólo si trabaja más de 40 horas y es turno de noche.
//Determina si tiene horas extra.
var horasExtra = 10;
var turno = "tarde";
if (horasExtra > 40) {
    console.log("Trabaja horas extra");
} else if (turno == "noche") {
    console.log("Trabaja horas extra");
} else {
    console.log("No trabaja horas extra")
}

//Una persona puede recibir un descuento si tiene tarjeta de cliente o si es mayor de 65 años.
//Decide si recibe descuento.
var tarjeta = "Usuario";
var edad = 70;
if (tarjeta == "cliente" || edad > 65) {
    console.log("El cliente recibe un descuento");
}

//Para entrar a un concurso, la persona debe tener más de 18 años y haber comprado un boleto.
//Indica si puede entrar.
var edad = 25;
var boleto = "false";
if (edad > 18 && boleto == "true") {
    console.log("La persona puede entrar al concurso");
}

//Te dan un número.
//Determina si es par y además mayor que 10.
//Este ejercicio se responde asi, porque teiene que ser par y mayor a 10
var numero = 14;
if (numero % 2 == 0 && numero > 10) {
    console.log("El numero es par y es mayor a 10");
}

//Un auto puede circular un día específico dependiendo del último dígito de su placa.
//Decide si puede circular hoy.
var placa = 4;
switch (placa) {
    case 1:
        console.log("Circula el dia Lunes");
        break;
    case 2:
        console.log("Circula el dia de hoy");
        break;
    case 3:
        console.log("Circula el dia Miercoles");
        break;
    case 4:
        console.log("Circula el dia jueves");
        break;
    default: console.log("El digito no es valido");
}

//Una persona puede votar si tiene 18 años o más y tiene credencial de elector vigente. Determina si puede votar.
let años = 10;
let credencial_elector = true;
if (años >= 18 && credencial_elector == true) {
    console.log("La persona puede votar");
}

//Un producto tiene envío gratis si el total de compra es mayor a $500 o si el cliente tiene membresía premium. Decide si califica para envío gratis.
let plan = "Estandar"
let producto = 230;
if (plan == "Premium") {
    console.log("Tiene envio gratis");
} else if (producto > 500) {
    console.log("Tiene envio gratis");
} else {
    console.log("No tiene envio gratis");
}

//Te dan un número. Determina si es múltiplo de 3 y además es menor que 50.
let cifra = 15;
if (cifra % 3 == 0 && cifra < 50) {
    console.log("El numero es multiplo de 3 y es menor a 50");
}

// //Para acceder a una sala VIP, la persona debe tener reservación confirmada y llegar antes de las 8 PM. Indica si puede acceder.
var reservacion = "confirmada";
let horario = 12;
if (reservacion == "confirmada" && horario < 8) {
    console.log("Puede acceder a la sala VIP");
} else {
    console.log("No puede acceder a la sala VIP");
}

// 1. Un estudiante aprueba el curso si tiene promedio mayor o igual a 70 Y asistió al menos al 80% de las clases. Determina si aprueba.
let promedio = 68;
let asistencia = 90;
if(promedio >= 70 && asistencia >= 80) {
    console.log("Usted aprueba el curso");
} else {
    console.log("Usted no aprueba el curso");
}

// 2. Una tienda ofrece promoción 2x1 si es fin de semana O si el cliente cumple años ese día. Decide si aplica la promoción.
let dia_de_la_semana = "Lunes";
let cumpleaños = 'true';

if(dia_de_la_semana == "Fin de semana" || cumpleaños == 'true') {
    console.log("Cuenta con un promocion del 2 X 1");
}

// 3. Un sistema de alarma se activa si detecta movimiento Y es de noche (después de las 10 PM). Indica si la alarma se activa.
let Turno = 'noche';
let movimiento = "detectado"
let tiempo  = 12;
if (movimiento == 'detectado' && Turno == "noche" && tiempo > 10 ){
    console.log("Sistema de alarma activado");
}

// 4. Te dan un número. Determina si es impar Y está entre 20 y 100 (inclusive).
let numero = 45;
if( numero % 2 != 0 && numero >= 20 && numero <= 100){
    console.log("EL numero es impar y este se encuentra ente 20 y 100");
}

// 5. Un restaurante acepta reservaciones si hay mesas disponibles O si el cliente tiene membresía gold. Válida si se acepta la reservación.
let mesas = "no disponibles";
let membresia = "gold";
if(mesas == "disponibles" || membresia == "gold") {
    console.log("Se acepta la reservacion")
}

// 6. Para aprobar un examen de manejo, debes tener al menos 80 puntos en la prueba teórica Y no cometer más de 3 errores en la práctica. Determina si aprueba.
let puntos = 75;
let errores = 5;
if(puntos >= 80 && errores <=3){
    console.log("Apuebas el examen de manejo");
} else {
    console.log("No lo aprueba");
}

// 7. Un banco aprueba un préstamo si el ingreso mensual es mayor a $15,000 Y el historial crediticio es "bueno" O "excelente". Decide si se aprueba el préstamo.
let ingreso_mensual = 16000;
let historial_crediticio = "excelente";
if(ingreso_mensual > 15000 && (historial_crediticio == "bueno" || historial_crediticio == "excelente")){
    console.log("Se aprueba el prestamo");
}

// 8. Te dan la edad de una persona. Determina si es menor de edad (menor a 18) O es adulto mayor (mayor o igual a 65).
let edad_persona= 45;
if( edad_persona >= 65){
    console.log("Es un adulto mayor");
} else if (edad_persona < 18){
    console.log("Es menor de edad");
}

// 9. Un gimnasio permite el acceso si tienes membresía activa Y tu último pago fue hace menos de 30 días. Indica si puede acceder.
let membresias = "activa";
let pago_dias = 18;
if(membresias == "activa" && pago_dias < 30){
    console.log("tiene acceso al gimnasio");
} else {
    console.log("No tiene acceso al gimnasio");
}

// 10. Para obtener una beca, el estudiante debe tener promedio mayor a 85 Y (tener bajos recursos O pertenecer a una minoría). Válida si obtiene la beca.
let promedio_beca = 86;
let situacion_economica = "Estable";
let minoria = "true";
if(promedio_beca > 85 && (situacion_economica == "Bajos recursos" || minoria == "true")){
    console.log("Obtiene la beca");
}
