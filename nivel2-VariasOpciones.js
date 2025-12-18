//Te dan la calificación de un estudiante (0 a 100).
// Clasificarla como: Excelente, Bueno, Regular o Malo.
var calificacion = 60;
if (calificacion >= 95) {
    console.log("Excelente");
} else if (calificacion >= 80) {
    console.log("Bueno");
} else if (calificacion >= 70) {
    console.log("Regular");
} else if (calificacion <= 60) {
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
var color = "Naranja";
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
if (masa_corporal >= 40) {
    console.log("Obesidad");
} else if (masa_corporal >= 30) {
    console.log("Sobrepeso");
} else if (masa_corporal >= 20) {
    console.log("Normal");
} else if (masa_corporal <=19) {
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
    default: console.log("El numero no es valido");
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
    default: console, log("El tipo de vehiculo no es reconocido");
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