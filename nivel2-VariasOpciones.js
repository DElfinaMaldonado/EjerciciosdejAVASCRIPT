//Te dan la calificación de un estudiante (0 a 100).
// Clasificarla como: Excelente, Bueno, Regular o Malo.
var calificacion = 95;
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion <= 80) {
    console.log("Bueno");
} else if (calificacion <= 70) {
    console.log("Regular");
} else if (calificacion <= 60 ) {
    console.log("Malo");
}

// Dado un número del 1 al 7, indica qué día de la semana representa.
var dia = 4;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("El dia no es valido");
}

//Te dan una velocidad.
//Si es menor a 20, va lento; entre 20 y 80, normal; más de 80, rápido.
velocidad = 10;
if (velocidad < 20) {
    console.log("Va lento");
} else if (velocidad >= 20 && velocidad <= 80) {
    console.log("Normal");
} else if (velocidad > 80) {
    console.log("Rapido");
}

// Te dan un color.
// Indica si es un color primario (rojo, azul, amarillo) o no.
let color = "azul";
switch (color) {
    case "rojo":
    case "azul":
    case "amarillo":
        console.log("El color es primario");
        break;
    default:
        console.log("El color no es primario");
}

//Un usuario selecciona un tipo de membresía: Básica, Estándar o Premium.
//Muestra qué beneficios tiene la membresía elegida.
var membresia = "Basica";
if (membresia == "Basica") {
    console.log("Disfrutaras de poder darle me gusta a tus musicas");
} else if (membresia == "Estandar") {
    console.log("Podras compartir tu album de musica con tus amigo");
} else if (membresia == "Premium") {
    console.log(
        "Tendras la opcion de crear un remix con tus canciones favoritas"
    );
}

//Te dan el índice de masa corporal (IMC) de una persona. Clasifícalo como: Bajo peso, Normal, Sobrepeso u Obesidad.
var masa_corporal = 35;
if (masa_corporal >= 30) {
    console.log("Obesidad");
} else if (masa_corporal >= 25 && masa_corporal <= 29.9) {
    console.log("Sobrepeso");
} else if (masa_corporal >= 18.5 && masa_corporal <= 24.9) {
    console.log("Normal");
} else if (masa_corporal <= 18.5) {
    console.log("Bajo Peso");
}

//Dado un número del 1 al 12, indica qué mes del año representa.
var mes = 8;
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril"); 
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
}

//Te dan el nivel de batería de un celular en porcentaje. Si es menor a 20%, batería baja; entre 20% y 50%, media; más de 50%, batería alta.
var porcentaje = 25;
if (porcentaje < 20) {
    console.log("Bateria Baja");
} else if (porcentaje >= 20 && porcentaje <= 50) {
    console.log("Media");
} else if (porcentaje > 50) {
    console.log("Bateria alta");
}

//Te dan un tipo de vehículo. Indica si es terrestre (auto, moto, bicicleta), aéreo (avión, helicóptero) o acuático (barco, lancha).
var tipo_vehiculo = "barco";
switch (tipo_vehiculo) {
    case "auto":
    case "moto":
    case "bicicleta":
        console.log("El tipo de vehiculo es terrestre");
        break;
    case "avión":
    case "helicóptero":
        console.log("El tipo de vehiculo es aéreo");
        break;
    case "barco":
    case "lancha":
        console.log("El tipo de vehiculo es acuático");
        break;
}

//Un usuario selecciona un tamaño de pizza: Personal, Mediana, Grande o Familiar. Muestra cuántas rebanadas tiene cada tamaño.
var tamaño = "Mediana";
if (tamaño == "Personal") {
    console.log("Esta pizza cuenta con 5 rebanadas");
} else if (tamaño == "Mediana") {
    console.log("Esta pizza cuenta con 10 rebanadas");
} else if (tamaño == "Grande") {
    console.log("Esta pizza cuenta con 12 rebanadas");
} else if (tamaño == "Familiar") {
    console.log("Esta pizza cuenta con 15 rebanadas");
}



// 1. Te dan la edad de una persona. Clasifícala en categoría: Niño (0-12), Adolescente (13-17), Adulto joven (18-35), Adulto (36-60) o Adulto mayor (61+).
let edad = 0;
if (edad >= 61) {
    console.log("Es un adulto mayor");
} else if (edad >= 36 && edad <= 60) {
    console.log("Es un adulto")
} else if (edad >= 18 && edad <= 35) {
    console.log("Es un adulto joven");
} else if (edad >= 13 && edad <= 17) {
    console.log("Es un adolescente");
} else if (edad >= 0 && edad <= 12) {
    console.log("Es un niño");
}

// 2. Dado un número del 1 al 4, indica qué trimestre del año representa (Q1, Q2, Q3, Q4).
let numero = 3;
if (numero == 1) {
    console.log("Estas en el trimestre del año Q1");
} else if (numero == 2) {
    console.log("Estas en el trimestre del año Q2");
} else if (numero == 3) {
    console.log("Estas en el trimestre del año Q3");
} else if (numero == 4) {
    console.log("Estas en el trimestre del año Q4");
}

// 3. Te dan la temperatura del agua en grados Celsius. Indica su estado: Sólido (menos de 0°), Líquido (0° a 99°) o Gaseoso (100° o más).
let temperatura_agua = -4;
if (temperatura_agua >= 100) {
    console.log("Gaseoso");
} else if (temperatura_agua >= 0 && temperatura_agua <= 99) {
    console.log("Liquido");
} else if (temperatura_agua < 0) {
    console.log("Solido");
}

// 4. Te dan un código de error del sistema. Muestra el mensaje correspondiente: 404 (No encontrado), 500 (Error del servidor), 403 (Acceso denegado), 200 (Exitoso).
let codigo = 200;
if (codigo == 404) {
    console.log("No encontrado");
} else if (codigo == 500) {
    console.log("error del servidor");
} else if (codigo == 403) {
    console.log("Acceso denegado");
} else if (codigo == 200) {
    console.log("Exitoso");
}

// 5. Un banco clasifica créditos según el monto solicitado: Micro crédito (hasta $10,000), Crédito pequeño ($10,001-$50,000), Crédito medio ($50,001-$200,000) o Crédito grande (más de $200,000).
let monto_solicitado = 10000;
if (monto_solicitado > 200000) {
    console.log("Credito grande");
} else if (monto_solicitado >= 50001 && monto_solicitado <= 200000) {
    console.log("Credito medio");
} else if (monto_solicitado >= 10001 && monto_solicitado <= 50000) {
    console.log("Credito pequeño");
} else if (monto_solicitado <= 10000) {
    console.log("Micro credito");
}

// 6. Te dan la cantidad de años de antigüedad de un empleado. Clasifícalo: Nuevo (menos de 1 año), Junior (1-3 años), Senior (4-7 años) o Experto (8+ años).
let cantidad_años = 5;
if (cantidad_años >= 8) {
    console.log("Experto");
} else if (cantidad_años >= 4 && cantidad_años <= 7) {
    console.log("Senior");
} else if (cantidad_años >= 1 && cantidad_años <= 3) {
    console.log("Junior");
} else if (cantidad_años < 1) {
    console.log("Nuevo");
}

// 7. Te dan un tipo de sangre. Indica si es A, B, AB u O, y si es positivo o negativo.
let tipo_sangre = "A";
if (tipo_sangre == "A") {
    console.log("Tienes antigenos A en tus globulos rojo y es positivo");
} else if (tipo_sangre == "B") {
    console.log("Tienes antigenos B en tus globulos rojo y es positivo");
} else if (tipo_sangre == "AB") {
    console.log("Tienes tanto antígenos A como B y es positivo ");
} else if (tipo_sangre == "O") {
    console.log("No tienes antígenos A ni B y es psoitiva");
} else if (tipo_sangre == "A-") {
    console.log("Tiene el marcador A, pero no el factor Rh y es negativo");
} else if (tipo_sangre == "B-") {
    console.log("Tiene el marcador B, pero no el factor Rh, pero no el factor Rh y es negativo");
} else if (tipo_sangre == "AB-") {
    console.log("Tiene marcadores A y By es psoitiva");
}  else if (tipo_sangre == "O-") {
    console.log("No tiene marcadores A ni B, ni el factor Rh, y es psoitiva");
}

// 8. Un sistema de calificación de hoteles usa estrellas del 1 al 5. Muestra la categoría: 1 estrella (Básico), 2 estrellas (Económico), 3 estrellas (Confortable), 4 estrellas (Superior), 5 estrellas (Lujo).
let estrellas = 3;
switch (estrellas) {
    case 1:
        console.log("La calificacion del hotel es Basico");
        break;
    case 2:
        console.log("La calificacion del hotel es Economico");
        break;
    case 3:
        console.log("La calificacion del hotel es Confortable");
        break;
    case 4:
        console.log("La calificacion del hotel es Superior");
        break;
    case 5:
        console.log("La calificacion del hotel es Lujo");
        break;
}
// 9. Te dan el nivel de contaminación del aire en PPM. Clasifícalo: Buena (0-50), Moderada (51-100), Dañina para grupos sensibles (101-150), Dañina (151-200), Muy dañina (201+).
let contaminacion_aire = 201;
if(contaminacion_aire >= 201) {
    console.log("Muy dañina");
} else if (contaminacion_aire >= 151 && contaminacion_aire <= 200){
    console.log("Dañina");
} else if (contaminacion_aire >= 101 && contaminacion_aire <= 150){
    console.log("Dañina para grupos sensibles");
} else if (contaminacion_aire >= 51 && contaminacion_aire <= 100){
    console.log("Moderada");
} else if (contaminacion_aire >= 0 && contaminacion_aire <= 50){
    console.log("Buena");
}

// 10. Un videojuego clasifica jugadores por rango: Bronce (0-999 puntos), Plata (1000-1999), Oro (2000-2999), Platino (3000-3999), Diamante (4000+).
let videojuego = 58;
if(videojuego >= 4000) {
    console.log("Diamente");
} else if (videojuego >= 3000 && videojuego <= 3999){
    console.log("Platino");
} else if (videojuego >= 2000 && videojuego <= 2999){
    console.log("Oro");
} else if (videojuego >= 1000 && videojuego <= 1999){
    console.log("Plata");
} else if (videojuego >= 0 && videojuego <= 999){
    console.log("Bronce");
}


// 1. Una aerolínea cobra según el peso del equipaje: Gratis (0-23kg), $500 (24-32kg), $1000 (33-50kg), No permitido (más de 50kg).
let peso_equipaje = 15;
if( peso_equipaje > 50){
    console.log("No permitido");
}else if(peso_equipaje >= 33 && peso_equipaje <= 50){
    console.log("El costo es de $1000");
}else if(peso_equipaje >=24 && peso_equipaje <= 32){
    console.log("El peso del equipaje es de $500");
}else if (peso_equipaje <= 23){
    console.log("El precio del equipaje es gratis");
}
// 2. Un sistema de seguridad tiene niveles de acceso: Visitante (nivel 0), Empleado (nivel 1-2), Supervisor (nivel 3-4), Gerente (nivel 5-6), Director (nivel 7+).
let nivel_de_acceso = 5;
if(nivel_de_acceso >= 7){
    console.log("Usted tiene un nivel de acceso de Director");
}else if(nivel_de_acceso >= 5 && nivel_de_acceso <= 6) {
    console.log("Usted tiene un nivel de acceso de Gerente");
}else if(nivel_de_acceso >= 3 && nivel_de_acceso <= 4){
    console.log("Usted tiene un nivel de acceso de supervisor");
}else if(nivel_de_acceso >= 1 && nivel_de_acceso <= 2){
    console.log("Usted tiene u nivel de acceso de empleado");
} else {
    console.log("Usted tiene un nivel de visitante");
}

// 3. Una app de fitness clasifica pasos diarios: Sedentario (menos de 5000), Poco activo (5000-7499), Moderadamente activo (7500-9999), Activo (10000-12499), Muy activo (12500+).
let pasos_diarios= 7600;
if(pasos_diarios >= 12500) {
    console.log("Muy activo");
} else if(pasos_diarios >= 10000 && pasos_diarios <= 12499){
    console.log("Activo");
} else if(pasos_diarios >= 7500 && pasos_diarios <= 9999){
    console.log("Moderadamente activo");
} else if(pasos_diarios >= 5000 && pasos_diarios <= 7499){
    console.log("Poco activo");
} else if(pasos_diarios <5000){
    console.log("Sedentario");
}

// 4. Un cine cobra según la hora: Matinée $50 (antes de 14:00), Tarde $80 (14:00-17:59), Noche $120 (18:00-21:59), Trasnoche $90 (22:00 en adelante).
let hora_cine =  "14:00";
if(hora_cine >= "22:00"){
    console.log("El horario se considera Trasnoche y por lo tanto el costo es de $90");
}else if(hora_cine >= "18:00" && hora_cine <= "21:59"){
    console.log("El horario se considera Noche y por lo tanto el costo es de $120");
}else if(hora_cine >= "14:00" && hora_cine <= "17:59"){
    console.log("El horario se considera Tarde y por lo tanto el costo es de $80");
}else if(hora_cine < "14:00"){
    console.log("El horario se considera Matutino y por lo tanto el costo es de $50");
}

// 5. Una biblioteca cobra multas por día de retraso: $0 (0 días), $10 (1-3 días), $25 (4-7 días), $50 (8-14 días), $100 (15+ días).
let dias_de_retraso = 5;
if(dias_de_retraso >= 15){
    console.log("El costo de la multa es de $100");
}else if(dias_de_retraso >= 8 && dias_de_retraso <= 14){
    console.log("El costo de la multa es de $50");
}else if(dias_de_retraso >= 4 && dias_de_retraso <= 7){
    console.log("El costo de la multa es de $25");
}else if(dias_de_retraso >= 1 && dias_de_retraso <=3){
    console.log("El costo de la multa es de $10");
}else {
    console.log("El costo de la multa es de $0 ");
}

// 6. Un termómetro clasifica fiebre en humanos: Normal (35-37°C), Febrícula (37.1-38°C), Fiebre moderada (38.1-39°C), Fiebre alta (39.1-40°C), Hipertermia (40.1+°C).
let fiebre_humanos = 36;
if(fiebre_humanos >= 40.1){
    console.log("Hipertemia");
}else if(fiebre_humanos >= 39.1 && fiebre_humanos <= 40){
    console.log("Fiebre Alta");
}else if(fiebre_humanos >= 38.1 && fiebre_humanos <= 39){
    console.log("Fiebre Moderada");
}else if(fiebre_humanos >= 37.1 && fiebre_humanos <= 38){
    console.log("Febrícula");
}else if(fiebre_humanos >= 35 && fiebre_humanos <= 37){
    console.log("Normal");
}

// 7. Una app de idiomas clasifica nivel: A1 Principiante (0-20 puntos), A2 Elemental (21-40), B1 Intermedio (41-60), B2 Intermedio-alto (61-80), C1 Avanzado (81-95), C2 Maestría (96-100).
let nivel_idioma = 16;
if(nivel_idioma >= 96 && nivel_idioma <= 100){
    console.log("Tienes un nivel C2 correspondiente a Maestría");
}else if(nivel_idioma >= 81 && nivel_idioma <= 95){
    console.log("Tienes un nivel C1 correspondiente Avanzado");
}else if(nivel_idioma >= 61 && nivel_idioma <= 80){
    console.log("Tienes un nivel B2 correspondiente a Intermedio-Alto");
}else if(nivel_idioma >= 41 && nivel_idioma <= 60){
    console.log("Tienes un nivel B1 correspondiente a Intermedio");
}else if(nivel_idioma >= 21 && nivel_idioma <= 40){
    console.log("Tienes un nivel A2 correspondiente a Elemental");
}else if(nivel_idioma <= 20){
    console.log("Tienes un nivel A1 correspondiente a Principiante");
}

// 8. Un restaurante clasifica reservas por tamaño de grupo: Individual (1 persona), Pareja (2), Pequeño (3-4), Mediano (5-8), Grande (9-15), Evento (16+).
let tamaño_grupo = 1;
if(tamaño_grupo >= 16){
    console.log("La reserva corresponde a un Evento");
}else if(tamaño_grupo >= 9 && tamaño_grupo <= 15){
    console.log("La reserva corresponde a Grande");
}else if(tamaño_grupo >=5 && tamaño_grupo <=8){
    console.log("La reserva corresponde a Mediano");
}else if(tamaño_grupo >=3 && tamaño_grupo <=4) {
    console.log("La reserva corresponde a un Pequeño");
}else if(tamaño_grupo == 2){
    console.log("La reserva corresponde a Pareja");
}else if(tamaño_grupo == 1){
    console.log("La reserva corresponde a Individual");
}

// 9. Una plataforma de streaming cobra según región: Zona A $99, Zona B $149, Zona C $199, Zona D $249.
let region = "Zona B";
if(region == "Zona D"){
    console.log("El costo del streaming es $249");
}else if(region == "Zona C"){
    console.log("El costo del streaming es de $199");
}else if(region == "Zona B"){
    console.log("El costo del streaming es de $149");
}else if(region == "Zona A"){
    console.log("El costo del streaming es $99");
}

// 10. Un sistema de riego clasifica humedad del suelo: Seco crítico (0-10%), Seco (11-30%), Óptimo (31-60%), Húmedo (61-80%), Saturado (81-100%).
let humedad_suelo = 5;
if(humedad_suelo >= 81 && humedad_suelo <= 100){
    console.log("Saturado");
}else if(humedad_suelo >= 61 && humedad_suelo <= 80){
    console.log("Húmedo");
}else if(humedad_suelo >= 31 && humedad_suelo <= 60){
    console.log("Óptimo");
}else if(humedad_suelo >= 11 && humedad_suelo <= 30){
    console.log("Seco");
}else if(humedad_suelo <= 10){
    console.log("Seco crítico")
}