//Una app muestra un mensaje diferente dependiendo del estado del clima: soleado, lluvioso, nublado, nevando o desconocido.
var clima = "nevado";
if (clima == "soleado") {
    console.log("El dia de hoy esta perfecto para ir a la playa");
} else if (clima == "lluvioso") {
    console.log("El dia de hoy se recomienda salir con paraguas");
} else if (clima == "nublado") {
    console.log("El dia de hoy se encuentra perfecto para tomar un cafe");
} else if (clima == "nevado") {
    console.log("El dia de hoy se recomienda salir abrigado");
} else {
    console.log("El clima es desconocido");
}

//En una tienda, dependiendo del método de pago (efectivo, tarjeta, transferencia, criptomoneda), se aplica un porcentaje de descuento distinto.
var metodoPago = "criptomoneda";
if (metodoPago == "efectivo") {
    console.log("Usted cuenta con el 10% de descuento");
} else if (metodoPago == "tarjeta") {
    console.log("Usted cuenta con el 20% de descuento");
} else if (metodoPago == "transferencia") {
    console.log("Usted tiene el 25% de descuento");
} else if (metodoPago == "criptomoneda") {
    console.log("Tiene el 50% de descuento");
}

//En un sistema escolar, según el número de faltas, se determina: sin riesgo, advertencia, suspensión o expulsión.
var faltas = 4;
if (faltas >= 12) {
    console.log("suspension o explusion");
} else if (faltas >= 9) {
    console.log("advertencia");
} else if (faltas >= 5) {
    console.log("advertencia");
} else if (faltas <= 4) {
    console.log("sin riesgo");
}

//Un restaurante tiene menú diferente según la hora: desayuno, comida, cena o cerrado.
var menu = 8;
switch (menu) {
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
if (rol == "usuario registrado") {
    console.log("Hola, Juan!, Bienvenido a Candy");
} else if (rol == "visitante") {
    console.log("Bienvenido a dulceria Candy");
} else if (rol == "moderador") {
    console.log("Favor de revisar las interaccion que se presentan en la dulceria");
} else if (rol == "Administrador") {
    console.log("Planifica para lograr el objetivo del mes");
}

// Una aplicación de streaming reproduce contenido según la calidad de Internet: SD, HD, Full HD o 4K. Determina qué calidad mostrar según los Mbps disponibles.
let Mbps = 4;
if (Mbps >= 15) {
    console.log("La calidad es de 4K");
} else if (Mbps >= 8) {
    console.log("La calidad es de FULL HD");
} else if (Mbps >= 5) {
    console.log("La calidad es de HD")
} else if (Mbps <= 4) {
    console.log("La calidad es de SD")
}

// En una cafetería, el precio final varía según el tamaño de bebida seleccionado: Chico, Mediano, Grande o Extra Grande. Calcula el precio correspondiente.
let tamaño = "Extra Grande";
if (tamaño == "Chico") {
    console.log("Este cafe tiene un precio de 20");
} else if (tamaño == "Mediano") {
    console.log("Este cafe tiene un precio de 35");
} else if (tamaño == "Grande") {
    console.log("Este cafe tiene un precio de 45");
} else if (tamaño == "Extra Grande") {
    console.log("Este cafe tiene un precio de 50");
}

// Un sistema de alertas de tráfico muestra diferentes mensajes según el nivel de congestionamiento: Fluido, Moderado, Pesado o Bloqueado.
let congestionamiento = "primarias";
switch (congestionamiento) {
    case "primarias":
        console.log("El trafico es fluido");
        break;
    case "secundarias":
        console.log("El trafico es Moderado");
        break;
    case "terciarias":
        console.log("El trafico es Pesado");
        break;
    case "cuartenario":
        console.log("El trafico esta Bloqueado")
        break;
}



// Una aplicación de delivery cobra diferente tarifa según la distancia: Zona cercana, Zona media, Zona lejana o Fuera de cobertura.
let tarifa = "20km";
switch (tarifa) {
    case "20km":
        console.log("Su tarifa es de $16.50");
        break;
    case "800km":
        console.log("Su tarifa es de $22.00");
        break;
    case "18,000km":
        console.log("Su tarifa es de $35.00");
        break;
    case "4,5000km":
        console.log("Su tarifa ya esta fuera de cobertura y corresponde a es de $2500.00");
        break;
}

// Un sistema de acceso al edificio muestra diferentes mensajes según el tipo de credencial: Empleado, Visitante, Proveedor, Mantenimiento o Sin autorización.
let credencial = "Mantenimiento";
switch (credencial) {
    case "Empleado":
        console.log("Usted tiene acceso a los cuartos de limpieza y areas verdes");
        break;
    case "Visitante":
        console.log("Usted tiene acceso al departamento de su familiar o bien a ver nuestras instalaciones");
        break;
    case "Proveedor":
        console.log("Usted tiene acceso a las bodegas para colocar la mercancia");
        break;
    case "Mantenimiento":
        console.log("Usted tiene acceso a las areas de las albercas y areas de aparatos electronicos en caso de necesitar mantenimiento en ellos");
        break;
    default:
        console.log("Usted no tiene acceso a ninguna area");
}


