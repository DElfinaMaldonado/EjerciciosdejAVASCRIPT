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

//Un sistema de seguridad permite el acceso si el código es correcto y la huella dactilar coincide. Válida si se otorga el acceso.
// let codigo_correcto = 469;
// let huella_dactilar = "";