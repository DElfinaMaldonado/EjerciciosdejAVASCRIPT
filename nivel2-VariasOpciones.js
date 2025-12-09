//Te dan la calificación de un estudiante (0 a 100).
// Clasificarla como: Excelente, Bueno, Regular o Malo.
var calificacion = 60;
if( calificacion >= 95){
    console.log("Excelente");
} else if(calificacion >= 80) {
    console.log("Bueno");
} else if (calificacion >=70) {
    console.log("Regular");
} else if (calificacion <= 60){
    console.log("Malo");
}

// Dado un número del 1 al 7, indica qué día de la semana representa.
var dia = 4;
switch (dia) {
        case 1: console.log("Lunes");
    break;
        case 2: console.log("Martes");
    break;
        case 3: console.log("Miercoles");
    break;
        case 4: console.log("Jueves");
    break;
        case 5: console.log("Viernes");
    break;
        case 6: console.log("Sabado");
    break;
        case 7: console.log("Domingo");
    break;
    default: console.log("El dia no es valido");
}

//Te dan una velocidad.
//Si es menor a 20, va lento; entre 20 y 80, normal; más de 80, rápido.
velocidad = 10;
if( velocidad < 20) {
    console.log("Va lento");
} else if (velocidad >= 20 && velocidad <= 80){
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
        default: console.log("El color no es primario");
}

//Un usuario selecciona un tipo de membresía: Básica, Estándar o Premium.
//Muestra qué beneficios tiene la membresía elegida.
var membresia = "Basica";
if (membresia == "Basica"){
    console.log("Disfrutaras de poder darle me gusta a tus musicas");
} else if(membresia == "Estandar") {
    console.log("Podras compartir tu album de musica con tus amigo");
} else if(membresia == "Premium"){
    console.log("Tendras la opcion de crear un remix con tus canciones favoritas");
}