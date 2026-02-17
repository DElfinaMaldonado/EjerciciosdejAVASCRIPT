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

//**1.** Un sistema de control de acceso a zonas restringidas verifica: nivel de clearance (1-5), biometría validada (Sí/No), hora de acceso (6-22 hrs permitidas), zona solicitada (A, B, C, D, E). Zona A requiere clearance 5 Y biometría. Zona B requiere clearance 4+ Y horario 8-18. Zona C requiere clearance 3+ O biometría Y horario permitido. Zona D requiere clearance 2+ Y NO estar en lista de auditoría. Zona E es pública pero requiere horario permitido. Si está en lista de auditoría Y clearance < 4: acceso denegado a todas las zonas.
let nivel_de_clearance = 5;
let biometrica_valida = true;
let hora_acceso = 6;
let lista_auditoría = false;
if(nivel_de_clearance == 5 && biometrica_valida == true){
    console.log("Le corresponde la zona A");
}else if(nivel_de_clearance >= 4 && (hora_acceso >= 8 && hora_acceso <= 18)){
    console.log("Le correponde la zona B");
}else if((nivel_de_clearance >= 3 || biometrica_valida == true) && (hora_acceso >= 6 && hora_acceso <= 22)){
    console.log("Le corresponde la zona C");
}else if(nivel_de_clearance >= 2 && lista_auditoría == false){
    console.log("Le correponde la zona D");
}else if(hora_acceso >= 6 && hora_acceso <= 22){
    console.log("Le correponde la zona E");
}else if(lista_auditoría == true && nivel_de_clearance < 4){
    console.log("Acceso denegado a todas las zonas");
}

//**2.** Una plataforma de trading algorítmico ejecuta operaciones según: volatilidad del mercado (Baja < 2%, Media 2-5%, Alta > 5%), tendencia (Alcista/Bajista/Lateral), volumen de operaciones (Bajo/Normal/Alto), indicador RSI (Sobrecompra > 70, Neutral 30-70, Sobreventa < 30). Si volatilidad Alta Y tendencia Alcista Y RSI < 30: "Compra agresiva". Si volatilidad Media Y tendencia Alcista Y volumen Alto Y RSI Neutral: "Compra moderada". Si volatilidad Alta Y tendencia Bajista: "Venta". Si RSI > 70 Y tendencia Alcista: "Mantener". Otros casos: "Observar".
let votalidad_mercado = 6;
let tendencia = "Alcista";
let volumes_operaciones = "Bajo";
let indicar_RSI = 20;
if(votalidad_mercado > 5 && tendencia == "Alcista" && indicar_RSI < 30 ){
    console.log("Es una compra agresiva");
}else if((votalidad_mercado >= 2 && votalidad_mercado <= 5) && tendencia == "Alcista" && volumes_operaciones == "Alto" && (indicar_RSI >= 30 && indicar_RSI <= 70)){
    console.log("Compra moderada");
}else if(votalidad_mercado > 5 && tendencia == "Bajista"){
    console.log("Venta");
}else if(indicar_RSI > 70 && tendencia == "Alcista"){
    console.log("Mantener");
}else {
    console.log("Observar");
}

//**3.** Un sistema de asignación de ambulancias prioriza llamadas según: gravedad (Código Rojo/Amarillo/Verde), distancia al hospital más cercano (0-5km, 5-15km, 15-30km, 30+km), unidades disponibles (0, 1-2, 3+), condiciones climáticas (Óptimas/Adversas/Extremas). Código Rojo siempre es prioridad 1 independiente de otros factores. Código Amarillo a 30+km con clima Extremo Y 0 unidades: solicitar helicóptero. Código Amarillo con 3+ unidades Y distancia < 15km: enviar 2 ambulancias. Código Verde solo se atiende si hay 3+ unidades Y clima Óptimo.
let codigo_ambulancia = "Rojo";
let distancia_hospital = 5;
let unidades_disponibles = 5;
let condiciones_climaticas = "Extremas";
if(codigo_ambulancia == "Rojo"){
    console.log("Prioridad 1");
}else if(codigo_ambulancia == "Amarillo" && distancia_hospital >= 30 && condiciones_climaticas == "Extremas" && unidades_disponibles == 0){
    console.log("Solicitar helicóptero");
}else if(codigo_ambulancia == "Amarillo" && unidades_disponibles >= 3 && distancia_hospital < 15){
    console.log("Enviar 2 ambulancias");
}else if(codigo_ambulancia == "Verde" && unidades_disponibles >= 3 && condiciones_climaticas == "Óptimas"){
    console.log("Si se atiende");
}

//**4.** Una aplicación de préstamos P2P calcula la tasa de interés según:
//score crediticio (300-579 Malo, 580-669 Regular, 670-739 Bueno, 740-850 Excelente),
//monto solicitado ($1,000-$5,000 / $5,001-$20,000 / $20,001-$50,000 / $50,001+),
//plazo (6/12/24/36 meses),
//relación deuda-ingreso (< 30% Baja, 30-43% Media, > 43% Alta).
//Score Excelente Y deuda Baja: tasa base 8%.
//Score Bueno Y deuda Baja O Media: tasa 12%.
//Score Regular O deuda Alta: tasa 18%.
//Score Malo O relación deuda > 50%: rechazado.
//Añadir 2% por cada categoría de monto adicional y 1% por cada plazo > 12 meses.
let score_crediticio = 830;
let monto_solicitado = 1200;
let plazo_meses = 12;
let relacion_deuda_ingreso = 20;
if((score_crediticio >= 740 && score_crediticio <=850) && relacion_deuda_ingreso < 30){
    console.log("Tasa base del 8%");
}else if((score_crediticio >= 670 && score_crediticio <= 739) && (relacion_deuda_ingreso < 30 || (relacion_deuda_ingreso >= 30 && relacion_deuda_ingreso <= 43))) {
    console.log("Tasa del 12%");
}else if((score_crediticio >= 580 && score_crediticio <= 669) || relacion_deuda_ingreso > 43) {
    console.log("Tasa del 18%");
}else if((score_crediticio >= 300 && score_crediticio <= 579) || relacion_deuda_ingreso > 50){
    console.log("Rechazado");
}else if((monto_solicitado >= 1000 && monto_solicitado <= 5000) || (monto_solicitado >= 5001 && monto_solicitado <= 20000) || (monto_solicitado >= 20001 && monto_solicitado <= 50000) || (monto_solicitado >=50001)){
    monto_solicitado = monto_solicitado * 1.02;
    console.log("El precio total a pagar es de: $" + monto_solicitado);
}else if(plazo_meses == 12 || plazo_meses == 24 || plazo_meses == 36){
    plazo_meses = plazo_meses * 1.01;
    console.log("El precio total a pagar es de: $" + plazo_meses);
}

//**5.** Un sistema de gestión de flotas de transporte asigna vehículos según: tipo de carga (Perecedera/Frágil/Peligrosa/Estándar), peso total (0-5 ton, 5-15 ton, 15-30 ton, 30+ ton), distancia del viaje (Local < 100km, Regional 100-500km, Nacional > 500km), certificaciones del conductor (Básica/Materiales peligrosos/Carga refrigerada/Todas). Carga Peligrosa requiere certificación específica Y distancia < 500km. Carga Perecedera requiere refrigeración Y conductor con certificación. Si peso > 30 ton Y distancia > 500km: requiere 2 conductores. Carga Frágil Y distancia > 100km: seguro premium obligatorio.
let tipo_de_carga = "Pesada";
let peso_total = 35;
let distancia_viaje = 450;
let certificaciones_conductor = "Peligrosos";
if(tipo_de_carga == "Peligrosa" && certificaciones_conductor == "Peligrosos" && distancia_viaje < 500) {
    console.log("Carga Peligrosa");
}else if(tipo_de_carga == "Perecedera" && certificaciones_conductor == "Carga Refrigerada") {
    console.log("Carga Perecedera");
}else if(peso_total > 30 && distancia_viaje > 500) {
    console.log("Requiere 2 conductores");
}else if(tipo_de_carga == "Frágil" && distancia_viaje > 100){
    console.log("seguro premium obligatorio");
}

//**6.** Una plataforma de subastas online determina ganador según: puja actual, tiempo restante (< 5 min, 5-30 min, 30+ min), historial del pujador (Nuevo/Verificado/Premium/VIP), método de pago validado (Sí/No), país de origen (Nacional/Internacional). Si tiempo < 5 min Y hay pujas en últimos 30 seg: extender 2 min. VIP puede pujar por proxy con límite máximo. Premium tiene descuento 5% en comisión. Internacional requiere depósito 20% Y pago validado. Nuevos usuarios solo pueden pujar en artículos < $1,000 Y si son Nacionales. Si hay empate: gana quien pujó primero.
let tiempo_restante = 4;
let historia_del_pujador = "Nuevo";
let metodo_de_pago = true;
let pais_origen = "Nacional";
let ultima_puja_hace = 20;
let precio_actual_subasta = 100;
let puja_proxy = 500;
if (tiempo_restante < 5 && ultima_puja_hace <= 30) {
    tiempo_restante = tiempo_restante + 2;
    console.log("Se extiende la subasta 2 minutos más");
}

//**7.** Un sistema de mantenimiento predictivo de maquinaria industrial genera alertas según: temperatura del motor (Normal < 80°C, Elevada 80-95°C, Crítica > 95°C), vibración (Baja < 5mm/s, Media 5-10mm/s, Alta > 10mm/s), horas de operación continua (< 8h, 8-16h, 16-24h, > 24h), última fecha de mantenimiento (< 30 días, 30-90 días, > 90 días), tasa de fallas históricas (Baja < 5%, Media 5-15%, Alta > 15%). Si temperatura Crítica O vibración Alta: detener inmediatamente. Si temperatura Elevada Y vibración Media Y operación > 16h: programar mantenimiento urgente. Si último mantenimiento > 90 días Y tasa de fallas Alta: inspección preventiva. Si operación > 24h sin descanso: pausa obligatoria 4h.
let temperatura_del_motor = 84;
let vibracion_del_motor = 6;
let horas_de_operacion = 13;
let fecha_de_mantenimiento = 35;
let fallas_historicas = 16;
let descanso = false;
if(temperatura_del_motor > 95 && vibracion_del_motor > 10){
    console.log("Detener inmediatamente");
}else if((temperatura_del_motor >= 80 && temperatura_del_motor <= 95) && horas_de_operacion > 16 ){
    console.log("Programar mantenimiento urgente");
}else if(fecha_de_mantenimiento > 90 && fallas_historicas > 15){
    console.log("Inspección preventiva");
}else if(horas_de_operacion > 24 && descanso == false){
    console.log("Pausa obligatoria 4h");
}

//**8.** Una aplicación de reservas de restaurantes gestiona mesas según: número de comensales (1-2, 3-4, 5-6, 7+), tipo de ocasión (Casual/Negocios/Romántica/Celebración), horario solicitado (Desayuno 7-11, Comida 13-16, Cena 19-23), cliente (Nuevo/Regular/VIP), restricciones dietéticas (Ninguna/Vegetariano/Vegano/Alergias), tiempo estimado de comida (1h/1.5h/2h/2.5h+). VIP siempre tiene prioridad. Romántica requiere mesa junto a ventana Y iluminación especial si disponible. Celebración 7+ personas requiere reserva mínima 48h antes. Restricciones dietéticas requieren notificación a cocina 2h antes. Si horario peak (13-14h o 20-21h) Y grupo > 6: cargo adicional 15%. Regular con > 5 visitas al mes: descuento 10%.
let numero_comensales = 9;
let tipo_ocasion = "Romántica";
let horario_solicitado= 9;
let cliente = "VIP" ;
let restricciones_dietéticas = true;
let tiempo_estimado_comida = 1;
let reserva_minima = 13;
let horario_peak = 13;
let visitas_al_mes = 8;
let requiere_mesa_cerca_de_ventana = true;
let iluminacion_especial = true;
if(cliente == "VIP"){
    console.log("Siempre tiene propiedad");
}else if(tipo_ocasion == "Romántica" && requiere_mesa_cerca_de_ventana == true && iluminacion_especial == true){
    console.log("Disponible");
}else if(tipo_ocasion == "Celebración" && numero_comensales >= 7 && reserva_minima < 48){
    console.log("Es una reserva de Celebración");
}else if(restricciones_dietéticas == true && tiempo_estimado_comida <= 1.5){
    console.log("notificación a cocina 2h antes");
}else if((horario_peak >= 13 && horario_peak <= 14 ||horario_peak >= 20 && horario_peak <=21) && numero_comensales > 6){
    horario_peak = horario_peak * 1.15;
    console.log("El precio total a pagar es de: $" + horario_peak);
}else if(visitas_al_mes > 5){
    visitas_al_mes = visitas_al_mes * 0.90;
    console.log("El precio total a pagar es de: $" + visitas_al_mes);
}

//**9.** Un sistema de evaluación de riesgo de incendios forestales analiza: temperatura ambiental (< 25°C Baja, 25-35°C Media, > 35°C Alta), humedad relativa (> 60% Alta, 40-60% Media, < 40% Baja), velocidad del viento (< 20 km/h Calma, 20-40 km/h Moderado, > 40 km/h Fuerte), días sin lluvia (0-7, 8-15, 16-30, 30+), vegetación seca acumulada (Baja/Media/Alta/Crítica), actividad humana cercana (Nula/Baja/Media/Alta). Si temperatura Alta Y humedad Baja Y viento Fuerte Y días sin lluvia > 15: riesgo Extremo. Si vegetación Crítica Y actividad humana Alta: prohibir acceso. Si riesgo Extremo Y actividad Media o Alta: evacuación preventiva. Si días sin lluvia > 30 Y vegetación Alta: vigilancia 24/7.
let temperatura_ambiental= 36;
let humedad_relativa = 22;
let velocidad_del_viento = 60;
let dias_sin_lluvia = 22;
let vegetación_acumulada = "Crítica";
let actividad_humana = "Alta";
let riesgo_extremo = true;
if((temperatura_ambiental > 35 && humedad_relativa < 40) && (velocidad_del_viento > 40 && dias_sin_lluvia > 15)) {
    console.log("Riesgo Extremo");
}else if(vegetación_acumulada == "Crítica" && actividad_humana == "Alta") {
    console.log("Prohibir acceso");
}else if(riesgo_extremo == true && (actividad_humana == "Alta" || actividad_humana == "Media")){
    console.log("Evacuación preventiva");
}else if(dias_sin_lluvia > 30 && vegetación_acumulada == "Alta"){
    console.log("Vigilancia 24/7");
}

//**10.** Una plataforma de freelancing calcula comisión y prioridad según: categoría del proyecto (Desarrollo/Diseño/Redacción/Marketing/Consultoría), presupuesto del proyecto ($100-$500 / $501-$2,000 / $2,001-$10,000 / $10,001+), tiempo de entrega solicitado (Express < 3 días, Normal 3-7 días, Flexible > 7 días), calificación del cliente (Sin historial/1-3 estrellas/3.5-4.5 estrellas/5 estrellas), nivel del freelancer (Junior/Semi-senior/Senior/Expert). Expert cobra 30% más que tarifa base. Express añade 50% al costo. Cliente 5 estrellas paga comisión reducida 12% vs 20% estándar. Sin historial requiere pago adelantado 50%. Proyectos $10,001+ requieren contrato formal Y freelancer mínimo Senior. Si presupuesto < $500 Y tiempo Express: solo Junior/Semi-senior pueden aplicar.
let categoría_proyecto = "Desarrollo";
let presupuesto_proyecto = 502;
let tiempo_de_entrega = "Express";
let calificación_del_cliente = "5 estrellas";
let nivel_freelancer = "Expert";
let puede_aplicar = true;
let requiere_contrato = false;
let pago_adelantado = 0;
if (presupuesto_proyecto > 10000) {
    if (nivel_freelancer !== "Senior" && nivel_freelancer !== "Expert") {
        puede_aplicar = false;
        console.log("Proyecto rechazado: presupuesto mayor a $10,000 requiere freelancer Senior o Expert");
    } else {
        requiere_contrato = true;
    }
}
if (presupuesto_proyecto < 500 && tiempo_de_entrega === "Express") {
    if (nivel_freelancer !== "Junior" && nivel_freelancer !== "Semi-senior") {
        puede_aplicar = false;
        console.log("Proyecto rechazado: presupuesto menor a $500 con Express solo permite Junior o Semi-senior");
    }
}
if (!puede_aplicar) {
    console.log("El proyecto no puede proceder con esta configuración.");
} else {
    let tarifa_base = presupuesto_proyecto;
    let tarifa_freelancer = tarifa_base;
    if (nivel_freelancer === "Expert") {
        tarifa_freelancer = tarifa_base * 1.30;
    }
    let costo_con_tiempo = tarifa_freelancer;
    if (tiempo_de_entrega === "Express") {
        costo_con_tiempo = tarifa_freelancer * 1.50;
    }
    let porcentaje_comision;
    if (calificación_del_cliente === "5 estrellas") {
        porcentaje_comision = 0.12;
    } else {
        porcentaje_comision = 0.20;
    }
    let comision = costo_con_tiempo * porcentaje_comision;
    let costo_total = costo_con_tiempo + comision;
    if (calificación_del_cliente === "Sin historial") {
        pago_adelantado = costo_total * 0.50;
    }
    console.log("Tarifa base: $" + tarifa_base.toFixed(2));
    console.log("Nivel freelancer: " + nivel_freelancer);
    console.log("Tarifa freelancer: $" + tarifa_freelancer.toFixed(2));
    console.log("Costo con tiempo: $" + costo_con_tiempo.toFixed(2));
    console.log("Comisión (" + (porcentaje_comision * 100) + "%): $" + comision.toFixed(2));
    console.log("COSTO TOTAL: $" + costo_total.toFixed(2));
    if (pago_adelantado > 0) {
        console.log("Pago adelantado requerido: $" + pago_adelantado.toFixed(2));
    }
    if (requiere_contrato) {
        console.log("Requiere contrato formal");
    }
}

//**11.** Un sistema de atención médica virtual triaje según: síntomas principales (Respiratorios/Digestivos/Cardiovasculares/Neurológicos/Dermatológicos/Dolor), intensidad del dolor (0-3 Leve, 4-6 Moderado, 7-10 Severo), duración de síntomas (< 24h Agudo, 24h-7días Subagudo, > 7días Crónico), edad del paciente (0-2 Bebé, 3-12 Niño, 13-17 Adolescente, 18-65 Adulto, 65+ Adulto mayor), factores de riesgo preexistentes (Ninguno/1-2 factores/3+ factores), signos de alarma (Sí/No). Síntomas Cardiovasculares con dolor Severo O signos de alarma: emergencia inmediata. Respiratorios en Bebé O Adulto mayor con 3+ factores: atención urgente < 2h. Neurológicos con dolor 7+ O duración Aguda: consulta especialista mismo día. Dermatológicos sin alarma Y dolor < 4: teleconsulta asíncrona. Crónico con 3+ factores: seguimiento programado semanal.
let sintomas_principales = "Cardiovasculares";
let intensidad_del_dolor = 10;
let duracion_de_sintoma = 23;
let edad_del_paciente = 2;
let factores_de_riesgo = 5;
let sintomas_de_alarma = true;
if(sintomas_principales == "Cardiovasculares" && (intensidad_del_dolor >= 7 && intensidad_del_dolor <= 10 || sintomas_de_alarma == true )){
    console.log("Emergencia inmediata");
}else if(sintomas_principales == "Respiratorios" && (edad_del_paciente >= 0 && edad_del_paciente <= 2 || edad_del_paciente > 65 && factores_de_riesgo >= 3)) {
    console.log("Atencion urgente en menos de 2h");
}else if(sintomas_principales == "Neurológicos" && (intensidad_del_dolor >= 7 && intensidad_del_dolor <= 10 || duracion_de_sintoma < 24 )){
    console.log("Consulta especialista mismo día");
}else if(sintomas_principales == "Dermatológicos" && (sintomas_de_alarma == false && intensidad_del_dolor < 4)){
    console.log("Teleconsulta asíncrona");
}else if(duracion_de_sintoma > 7 && factores_de_riesgo >= 3){
    console.log("Seguimiento programado semanal");
}

//**12.** Una aplicación de gestión de energía inteligente para hogares controla dispositivos según: tarifa eléctrica actual (Valle/Intermedia/Punta), consumo actual en kW (0-2 Normal, 2-5 Moderado, 5-8 Alto, 8+ Crítico), temperatura exterior (< 15°C Frío, 15-25°C Templado, > 25°C Calor), presencia en casa (Nadie/1 persona/2-4 personas/5+ personas), prioridad de dispositivos (Esencial/Alta/Media/Baja), carga de batería solar si disponible (0-25%/25-50%/50-75%/75-100%). Si tarifa Punta Y consumo Alto: apagar dispositivos Baja prioridad. Si batería > 75% Y tarifa Punta: usar batería para Esenciales. Si temperatura Calor Y tarifa Valle Y presencia 2+: activar pre-enfriamiento AC. Si Nadie en casa Y consumo > 2kW: enviar alerta. Calor extremo > 35°C con Adulto mayor en casa: AC siempre activo independiente de tarifa.
let tarifa_eléctrica = "Punta";
let consumo_en_kW = "Alto";
let temperatura_exterior = 30;
let presencia_en_casa = 6;
let prioridad_de_dispositivos = "Baja";
let carga_de_bateria = 80;
let presencia_adulto = true;
if(tarifa_eléctrica == "Punta" && consumo_en_kW == "Alto"){
    console.log("Apagar dispositivos, Baja prioridad");
}else if(carga_de_bateria > 75 && tarifa_eléctrica == "Punta"){
    console.log("Usar batería para Esenciales");
}else if(temperatura_exterior > 25 && (tarifa_eléctrica == "Valle" && presencia_en_casa >= 2)){
    console.log("Activar pre-enfriamiento AC");
}else if(presencia_en_casa == "Nadie" && consumo_en_kW > 2){
    console.log("Enviar Alerta");
}else if(temperatura_exterior > 35 && presencia_adulto == true){
    console.log("AC siempre activo independiente de tarifa");
}

//**13.** Un sistema de gestión de estacionamientos dinámico asigna espacios según: tipo de vehículo (Compacto/Sedán/SUV/Camioneta/Eléctrico/Motocicleta), duración estimada (< 1h, 1-3h, 3-6h, 6-12h, 12-24h, 24h+), membresía (Ninguna/Mensual/Anual/Corporativa), nivel de ocupación del estacionamiento (< 30% Bajo, 30-70% Medio, 70-90% Alto, > 90% Crítico), hora del día (6-9 am Peak mañana, 9-17 Normal, 17-20 Peak tarde, 20-6 Nocturno), necesita carga eléctrica (Sí/No). Eléctricos siempre tienen estaciones dedicadas. Si ocupación Crítica Y duración < 1h: tarifa +100%. Mensual/Anual tienen espacios reservados si ocupación < 90%. Corporativa tiene área exclusiva. Peak + ocupación Alta + duración > 6h: rechazar entrada. Motocicletas pagan 50% tarifa. Si carga eléctrica Y ocupación > 70%: límite 2h en estación.
let tipo_vehiculo = "Eléctrico";
let duracion_estimada = 0;
let membresía = "Mensual";
let nivel_de_ocupacion = 95;
let hora_del_dia = 18;
let necesita_carga_eléctrica = true;
if( tipo_vehiculo == "Eléctrico"){
    console.log("Siempre tiene estaciones dedicadas");
}else if(nivel_de_ocupacion > 90 && duracion_estimada < 1){
    console.log("Se le cobra tarifa + 100 %");
}else if((membresía == "Mensual" || membresía =="Anual") && nivel_de_ocupacion < 90){
    console.log("Tienen espacios reservados");
}else if(membresía == "Corporativa"){
    console.log("Tiene área exclusiva");
}else if((hora_del_dia >= 17 && hora_del_dia <= 20) && (nivel_de_ocupacion >= 70 && nivel_de_ocupacion <= 90) && duracion_estimada > 6){
    console.log("Rechazar Entrada");
}else if(tipo_vehiculo == "Motocicleta"){
    console.log("Pagan el 50 % de tarifa");
}else if(necesita_carga_eléctrica == true && nivel_de_ocupacion > 70){
    console.log("Límite 2h en estación");
}

//**14.** Una plataforma de inversión en bienes raíces recomienda propiedades según: presupuesto disponible ($50K-$200K / $200K-$500K / $500K-$1M / $1M+), objetivo de inversión (Renta/Reventa/Uso personal/Desarrollo), zona geográfica (Centro/Norte/Sur/Este/Oeste), ROI esperado (< 5%, 5-8%, 8-12%, > 12%), riesgo tolerado (Bajo/Medio/Alto), horizonte de inversión (< 2 años Corto, 2-5 años Medio, > 5 años Largo). Centro + Renta + presupuesto < $500K + ROI > 8%: no disponible. Desarrollo requiere presupuesto > $500K Y riesgo Alto Y horizonte Largo. Reventa + horizonte Corto + mercado caliente: priorizar Norte/Este. Uso personal ignora ROI pero considera ubicación + presupuesto. Riesgo Bajo + ROI > 12%: advertir expectativas no realistas. Presupuesto > $1M: ofrecer asesoría personalizada.
let presupuesto_disponible = 350;
let objetivo_de_inversion = "Reventa";
let zona_geográfica = "Centro";
let ROI_esperado = 12;
let riesgo_tolerado = "Alto";
let horizonte_de_inversion = 6;
let condicion_de_mercado = "Caliente";
if(zona_geográfica == "Centro" && presupuesto_disponible < 500 && ROI_esperado > 8) {
    console.log("No disponible");
}else if(presupuesto_disponible > 500 && riesgo_tolerado == "Alto" && horizonte_de_inversion > 5){
    console.log("Desarrollo");
}else if(objetivo_de_inversion == "Reventa"  && horizonte_de_inversion < 2 && condicion_de_mercado == "Caliente"){
    console.log("Priorizar Norte/Este");
}else if(objetivo_de_inversion == "Uso Personal" && zona_geográfica == "Centro" && presupuesto_disponible > 500){
    console.log("Ignorar ROI");
}else if(riesgo_tolerado == "Bajo" && ROI_esperado > 12){
    console.log("Advertir expectativas no realistas");
}else if(presupuesto_disponible > 1000000){
    console.log("Ofrecer asesoría personalizada");
}

//**15.** Un sistema de gestión de desastres naturales coordina recursos según: tipo de evento (Terremoto/Huracán/Inundación/Incendio/Tsunami/Deslizamiento), magnitud (Menor/Moderada/Severa/Catastrófica), área afectada en km² (< 10, 10-50, 50-200, 200+), población en riesgo (< 1,000 / 1K-10K / 10K-100K / 100K+), infraestructura crítica afectada (Ninguna/Hospitales/Plantas eléctricas/Carreteras/Múltiple), tiempo desde inicio (< 1h Primera respuesta, 1-6h Respuesta activa, 6-24h Rescate, 24-72h Recuperación, > 72h Rehabilitación). Catastrófica + población > 100K: activar protocolo nacional. Hospitales afectados + magnitud Severa+: prioridad máxima evacuación médica. Múltiple infraestructura + área > 200km²: solicitar apoyo internacional. Terremoto Severo + < 1h: desplegar búsqueda y rescate inmediato. Si > 72h Y población > 10K: iniciar campamentos temporales. Tsunami + población costera > 1K: evacuación preventiva automática.
let tipo_de_evento = "Terremoto";
let magnitud = "Catastrófica";
let area_afectada = 500;
let población_en_riesgo = 2000;
let infraestructura_afectada = "Hospitales";
let tiempo_de_inicio =  6;
if(magnitud == "Catastrófica" && población_en_riesgo > 1000){
    console.log("Activar protocolo nacional");
}else if(infraestructura_afectada == "Hospitales" && magnitud == "Severa"){
    console.log("Prioridad máxima evacuación médica");
}else if(infraestructura_afectada == "Múltiple"  && area_afectada > 200){
    console.log("Solicitar apoyo internacional");
}else if(tipo_de_evento == "Tsunami" && area_afectada > 1000){
    console.log("evacuación preventiva automática");
}