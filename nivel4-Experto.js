//Una app muestra un mensaje diferente dependiendo del estado del clima: soleado, lluvioso, nublado, nevando o desconocido.
var clima = "lluvioso";
if(clima == "soleado"){
    console.log("El dia de hoy esta perfecto para ir a la playa");
} else if (clima == "lluvioso"){
    console.log("El dia de hoy se recomienda salir con paraguas");
} else if (clima == "nublado"){
    console.log("El dia de hoy se encuentra perfecto para tomar un cafe");
} else if (clima == "nevado") {
    console.log("El dia de hoy se recomienda salir abrigrado");
} else {
    console.log("El clima es desconocido");
}

//En una tienda, dependiendo del método de pago (efectivo, tarjeta, transferencia, criptomoneda), se aplica un porcentaje de descuento distinto.
var metodoPago = "criptomoneda";
if( metodoPago == "efectivo"){
    console.log("Usted cuenta con el 10% de descuento");
} else if(metodoPago == "tarjeta"){
    console.log("Usted cuenta con el 20% de descuento");
} else if(metodoPago == "tranferencia"){
console.log("Usted tiene el 25% de descuento");
}else if(metodoPago == "criptomoneda"){
    console.log("Tiene el 50% de descuento");
}

//En un sistema escolar, según el número de faltas, se determina: sin riesgo, advertencia, suspensión o expulsión.
var faltas = 2;
if( faltas >= 8){
    console.log("suspension o explusion");
}else if (faltas >= 5){
    console.log("advertencia");
} else if (faltas >= 4) {
    console.log("advetencia");
} else if (faltas <= 3){
    console.log("sin riesgo");
}

//Un restaurante tiene menú diferente según la hora: desayuno, comida, cena o cerrado.
var menu = 8;
switch (menu){
    case 8:
        console.log("Desayuno");
        break;
    case 14:
        console.log("Comida");
        break;
    case 20:
        console.log("Cena");
        break;
    default: console.log("Cerrado");
}

//Una página web muestra un mensaje diferente dependiendo del rol del usuario: visitante, usuario registrado, moderador o administrador.
var rol = "Administrador";
if( rol == "usuario registrado"){
    console.log("Hola, Juan!, Bienvenido a Candy");
} else if (rol == "visitante"){
    console.log("Bienvenido a dulceria Candy");
} else if (rol == "moderador"){
    console.log("Favor de revisar las interaccion que se presentan en la dulceria");
} else if (rol == "Administrador"){
    console.log("Planifica para lograr el objetivo del mes");
}