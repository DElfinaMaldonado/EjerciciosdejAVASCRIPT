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
    default:
        console.log("Cerrado");
}

//Una página web muestra un mensaje diferente dependiendo del rol del usuario: visitante, usuario registrado, moderador o administrador.
var rol = "Administrador";
if (rol == "usuario registrado") {
    console.log("Hola, Juan!, Bienvenido a Candy");
} else if (rol == "visitante") {
    console.log("Bienvenido a dulceria Candy");
} else if (rol == "moderador") {
    console.log(
        "Favor de revisar las interaccion que se presentan en la dulceria"
    );
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
    console.log("La calidad es de HD");
} else if (Mbps <= 4) {
    console.log("La calidad es de SD");
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
        console.log("El trafico esta Bloqueado");
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
        console.log(
            "Su tarifa ya esta fuera de cobertura y corresponde a es de $2500.00"
        );
        break;
}

// Un sistema de acceso al edificio muestra diferentes mensajes según el tipo de credencial: Empleado, Visitante, Proveedor, Mantenimiento o Sin autorización.
let credencial = "Mantenimiento";
switch (credencial) {
    case "Empleado":
        console.log("Usted tiene acceso a los cuartos de limpieza y areas verdes");
        break;
    case "Visitante":
        console.log(
            "Usted tiene acceso al departamento de su familiar o bien a ver nuestras instalaciones"
        );
        break;
    case "Proveedor":
        console.log("Usted tiene acceso a las bodegas para colocar la mercancia");
        break;
    case "Mantenimiento":
        console.log(
            "Usted tiene acceso a las areas de las albercas y areas de aparatos electronicos en caso de necesitar mantenimiento en ellos"
        );
        break;
    default:
        console.log("Usted no tiene acceso a ninguna area");
}

// 1. Un sistema de gestión de inventario clasifica productos según su rotación: Alta (más de 100 ventas/mes), Media (50-100 ventas/mes), Baja (10-49 ventas/mes) o Sin movimiento (menos de 10 ventas/mes). Además, si el stock es menor a 20 unidades Y la rotación es alta o media, debe mostrar "Reabastecer urgente".
let rotación = 4;
if (rotación > 100) {
    console.log("Alta");
} else if (rotación >= 50 && rotación <= 100) {
    console.log("Media");
} else if (rotación >= 10 && rotación <= 49) {
    console.log("Baja");
} else if (rotación < 10) {
    console.log("Sin movimiento");
} else if (rotación < 20 && (rotación == "alta" || "media")) {
    console.log("Reabastecer urgente");
}

// 2. Una plataforma de inversiones recomienda un perfil según la edad del usuario Y su tolerancia al riesgo (baja, media, alta). Si es menor de 30 años con riesgo alto: "Agresivo". Si tiene 30-50 años con riesgo medio o alto: "Moderado". Si es mayor de 50 con cualquier riesgo O cualquier edad con riesgo bajo: "Conservador".
let edad_usuario = 24;
let tolerancia_riesgo = "Alta";
if (edad_usuario < 30 && tolerancia_riesgo == "Alta") {
    console.log("Perfil Agresivo");
} else if (edad_usuario >= 30 && edad_usuario <= 50 && (tolerancia_riesgo == "media" || tolerancia_riesgo == "Alta")) {
    console.log("Moderado");
} else if (edad_usuario > 50 && (tolerancia_riesgo == "Alta" || tolerancia_riesgo == "media" || tolerancia_riesgo == "Baja") || (edad_usuario >= 30 && edad_usuario <= 50 || edad_usuario < 30) && tolerancia_riesgo === "Baja") {
    console.log("Conservador");
}

// 3. Un sistema de nómina calcula bonos según el departamento (Ventas, Producción, Administración) Y el desempeño (Excelente, Bueno, Regular). Ventas con Excelente recibe 15%, Producción con Excelente o Bueno recibe 10%, Administración con Excelente recibe 8%. Los demás casos reciben 0%.
let departamento = "Ventas";
let desempeño = "Excelente";
if (departamento == "Ventas" && desempeño == "Excelente") {
    console.log("Recibe el 15% de bono");
} else if (departamento == "Produccion" && (desempeño == "Excelente" || desempeño == "Bueno")) {
    console.log("Recibe el 10% de bono")
} else if (departamento == "Administracion" && desempeño == "Excelente") {
    console.log("Recibe el 8% de bono")
} else {
    console.log("Recibe el 0% de bono");
}
// 4. Una app de fitness recomienda rutinas según el objetivo (Bajar peso, Tonificar, Ganar masa) Y el nivel de experiencia (Principiante, Intermedio, Avanzado). Cada combinación muestra una rutina diferente (9 posibles combinaciones).
let objetivo = "Bajar de peso";
let nivel_de_experiencia = "Principiante";
if (objetivo == "Bajar de peso" && nivel_de_experiencia == "Principiante") {
    console.log("Necesitas hacer 30 minutos de cardio, 2 series de abdomen y 30 largartijas");
} else if (objetivo == "Bajar de peso" && nivel_de_experiencia == "Intermedio") {
    console.log("Necesitas hacer  45 minutos de cardio, 4 series de abdomen y 45 largartijas");
} else if (objetivo == "Bajar de peso" && nivel_de_experiencia == "Avanzado") {
    console.log("Necesitas hacer  60 minutos de cardio, 6 series de abdomen y 60 largartijas");
} else if (objetivo == "Tonificar" && nivel_de_experiencia == "Principiante") {
    console.log("Necesitas hacer 2 series de piernas, 2 series de sentadillas y 20 repeticiones de peso muerto");
} else if (objetivo == "Tonificar" && nivel_de_experiencia == "Intermedio") {
    console.log("Necesitas hacer 4 series de piernas, 4 series de sentadillas y 40 repeticiones de peso muerto");
} else if (objetivo == "Tonificar" && nivel_de_experiencia == "Avanzado") {
    console.log("Necesitas hacer 6 series de piernas, 6 series de sentadillas y 60 repeticiones de peso muerto");
} else if (objetivo == "Ganar masa" && nivel_de_experiencia == "Principiante") {
    console.log("Necesitas hacer 4 series con pesas para pierna , 4 series de sentadillas y 40 repeticiones de peso muerto");
} else if (objetivo == "Ganar masa" && nivel_de_experiencia == "Intermedio") {
    console.log("Necesitas hacer 6 series con pesas para pierna , 6 series de sentadillas y 45 repeticiones de peso muerto");
} else if (objetivo == "Ganar masa" && nivel_de_experiencia == "Avanzado") {
    console.log("Necesitas hacer 8 series con pesas para pierna , 8 series de sentadillas y 50 repeticiones de peso muerto");
}

// 5. Un sistema de reservas de vuelos aplica recargos según la clase (Económica, Ejecutiva, Primera) Y si el equipaje excede el límite (Sí/No) Y si se reserva con menos de 7 días de anticipación (Sí/No). Cada combinación tiene un cargo diferente.
let clase = "Economica";
let limite_equipaje = true;
let reserva_de_7_dias = true;
if (clase == "Economica" && limite_equipaje == true && reserva_de_7_dias == true) {
    console.log("Tiene un cargado de $200");
} else if (clase == "Economica" && limite_equipaje == false && reserva_de_7_dias == false) {
    console.log("Tiene un cargado de $400");
} else if (clase == "Economica" && limite_equipaje == true && reserva_de_7_dias == false) {
    console.log("Tiene un cargado de $600");
} else if (clase == "Economica" && limite_equipaje == false && reserva_de_7_dias == true) {
    console.log("Tiene un cargado de $800");
} else if (clase == "Ejecutiva" && limite_equipaje == true && reserva_de_7_dias == true) {
    console.log("Tiene un cargado de $1000");
} else if (clase == "Ejecutiva" && limite_equipaje == false && reserva_de_7_dias == false) {
    console.log("Tiene un cargado de $1200");
} else if (clase == "Ejecutiva" && limite_equipaje == true && reserva_de_7_dias == false) {
    console.log("Tiene un cargado de $1400");
} else if (clase == "Ejecutiva" && limite_equipaje == false && reserva_de_7_dias == true) {
    console.log("Tiene un cargado de $1800");
} else if (clase == "Primera" && limite_equipaje == true && reserva_de_7_dias == true) {
    console.log("Tiene un cargado de $2000");
} else if (clase == "Primera" && limite_equipaje == false && reserva_de_7_dias == false) {
    console.log("Tiene un cargado de $2200");
} else if (clase == "Primera" && limite_equipaje == true && reserva_de_7_dias == false) {
    console.log("Tiene un cargado de $2400");
} else if (clase == "Primera" && limite_equipaje == false && reserva_de_7_dias == true) {
    console.log("Tiene un cargado de $2600");
}

// 6. Una plataforma educativa asigna tutores según la materia solicitada (Matemáticas, Ciencias, Idiomas) Y el nivel académico (Primaria, Secundaria, Preparatoria, Universidad). Si es Universidad en Matemáticas O Ciencias, requiere tutor especializado. Si es Idiomas en cualquier nivel, requiere hablante nativo.
let materia_solicitada = "Matematicas";
let nivel_academico = "Primaria";
if (materia_solicitada == "Matematicas" && nivel_academico == "Primaria") {
    console.log("Requiere tutor especializado");
} else if (materia_solicitada == "Ciencias" && nivel_academico == "Primaria") {
    console.log("Requiere tutor especializado");
} else if (materia_solicitada == "Idiomas" && nivel_academico == "Primaria") {
    console.log("Requiere hablar nativo");
} else if (materia_solicitada == "Matematicas" && nivel_academico == "Secundaria") {
    console.log("Requiere tutor especializado");
} else if (materia_solicitada == "Ciencias" && nivel_academico == "Secundaria") {
    console.log("Requiere tutor especializado");
} else if (materia_solicitada == "Idiomas" && nivel_academico == "Secundaria") {
    console.log("Requiere hablar nativo");
} else if (materia_solicitada == "Matematicas" && nivel_academico == "Preparatoria") {
    console.log("Requiere hablar nativo");
} else if (materia_solicitada == "Ciencias" && nivel_academico == "Preparatoria") {
    console.log("Requiere hablar nativo");
} else if (materia_solicitada == "Idiomas" && nivel_academico == "Preparatoria") {
    console.log("Requiere hablar nativo");
} else if (nivel_academico == "Universidad" && (materia_solicitada == "Matematicas" || materia_solicitada == "Ciencias")) {
    console.log("requiere tutor especializado");
} else if (materia_solicitada == "Idiomas" && nivel_academico == "Universidad") {
    console.log("Requiere hablar nativo");
}
// 7. Un sistema de control de calidad clasifica productos según temperatura de almacenamiento Y humedad relativa. Si temp < 0°C Y humedad < 40%: "Congelado seco". Si temp 0-10°C Y humedad 40-60%: "Refrigerado óptimo". Si temp > 25°C O humedad > 80%: "Condiciones críticas". Otros casos: "Almacenamiento estándar".
let tempratura_producto = 9;
let humedad = 45;
if (tempratura_producto > 25 || humedad > 80) {
    console.log("Condiciones criticas");
} else if (tempratura_producto >= 0 && tempratura_producto <= 10 && (humedad >= 40 && humedad <= 60)) {
    console.log("Refrigerado Optimo");
} else if (tempratura_producto < 0 && humedad < 40) {
    console.log("Congelado seco");
} else {
    console.log("Almacenamiento estandar");
}

// 8. Una app de citas prioriza matches según la compatibilidad (Alta, Media, Baja) Y la distancia en km (0-5, 6-20, 21-50, 51+) Y si tienen intereses en común (Sí/No). Solo muestra el match si compatibilidad es Alta O (compatibilidad Media Y distancia menor a 20km Y tienen intereses en común).
let compatibilidad = 'Alta';
let distancias = 18;
let interes_en_comun = "true";
if (compatibilidad == "Alta" || (compatibilidad == "Media" && distancias < 20 && interes_en_comun == "true")) {
    console.log("Tiene match");
}

// 9. Un sistema bancario aprueba tarjetas de crédito según ingreso mensual, historial crediticio (Excelente, Bueno, Regular, Malo) Y antigüedad laboral en años. Si ingreso > $30,000 Y historial Excelente O Bueno: tarjeta Platinum. Si ingreso $15,000-$30,000 Y historial Bueno Y antigüedad > 2 años: tarjeta Gold. Si ingreso < $15,000 O historial Regular O Malo: rechazado. Otros casos: tarjeta Clásica.
let historial_crediticioo = "Bueno";
let antigüedad_laboral = 3;
let ingreso = 16000;
if (ingreso > 30000 && (historial_crediticioo == "Excelente" || historial_crediticioo == "Bueno")) {
    console.log("Tarjeta platium");
} else if ((ingreso >= 15000 && ingreso <= 30000) && historial_crediticioo == "Bueno" && antigüedad_laboral > 2) {
    console.log("Tarjeta Gold")
} else if (ingreso < 15000 || (historial_crediticioo == "Regular" || historial_crediticioo == "Malo")) {
    console.log("Rechazado");
} else {
    console.log("Tarjeta clasica");
}

// 10. Una plataforma de entregas urgentes calcula el costo según peso del paquete (0-1kg, 1-5kg, 5-20kg, 20+kg) Y velocidad solicitada (Estándar, Express, Mismo día) Y código postal de destino (Local, Nacional, Internacional). Cada combinación genera un precio diferente y algunas combinaciones no están disponibles (ej: 20+kg en Mismo día Internacional).
let peso_paquete = 2;
let velocidad_solicitada = "Estandar";
let codigo_postal = "Local";
if ((peso_paquete >= 0 && peso_paquete <=1) && velocidad_solicitada == "Estandar" && codigo_postal == "Local") {
    console.log("Tiene un costo 100");
} else if ((peso_paquete >= 0 && peso_paquete <=1) && velocidad_solicitada == "Express" && codigo_postal == "Nacional") {
    console.log("Tiene un costo 150");
} else if ((peso_paquete >= 0 && peso_paquete <=1) && velocidad_solicitada == "Mismo dia" && codigo_postal == "Internacional") {
    console.log("Tiene un costo 200");
} else if ((peso_paquete > 1 && peso_paquete < 5) && velocidad_solicitada == "Estandar" && codigo_postal == "Local") {
    console.log("Tiene un costo 250");
} else if ((peso_paquete > 1 && peso_paquete < 5) && velocidad_solicitada == "Express" && codigo_postal == "Nacional") {
    console.log("Tiene un costo 500");
} else if ((peso_paquete > 1 && peso_paquete < 5) && velocidad_solicitada == "Mismo dia" && codigo_postal == "Internacional") {
    console.log("Tiene un costo 1000");
} else if ((peso_paquete >= 5 && peso_paquete <= 20) && velocidad_solicitada == "Estandar" && codigo_postal == "Local") {
    console.log("Tiene un costo 1500");
} else if ((peso_paquete >= 5 && peso_paquete <= 20) && velocidad_solicitada == "Express" && codigo_postal == "Nacional") {
    console.log("Tiene un costo 2000");
} else if ((peso_paquete >= 5 && peso_paquete <= 20) && velocidad_solicitada == "Mismo dia" && codigo_postal == "Internacional") {
    console.log("Tiene un costo 2500");
} else if ((peso_paquete > 20) && velocidad_solicitada == "Estandar" && codigo_postal == "Local") {
    console.log("Tiene un costo 3000");
} else if ((peso_paquete > 20) && velocidad_solicitada == "Express" && codigo_postal == "Nacional") {
    console.log("Tiene un costo 3500");
} else if ((peso_paquete > 20) && velocidad_solicitada == "Mismo dia" && codigo_postal == "Internacional") {
    console.log("No esta disponible");
}

