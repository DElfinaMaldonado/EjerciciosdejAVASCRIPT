//Un empleado trabaja horas extra sólo si trabaja más de 40 horas y es turno de noche.
//Determina si tiene horas extra.
var horasExtra = 10;
var turno = "tarde";
if(horasExtra > 40) {
    console.log("Trabaja horas extra");
} else if(turno == "noche"){
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
if( edad > 18 && boleto == "true"){
    console.log("La persona puede entrar al concurso");
}

//Te dan un número.
//Determina si es par y además mayor que 10.
   //Este ejercicio se responde asi, porque teiene que ser par y mayor a 10
var numero = 14;
if( numero % 2 == 0 && numero > 10){
    console.log("El numero es par y es mayor a 10");
}

//Un auto puede circular un día específico dependiendo del último dígito de su placa.
//Decide si puede circular hoy.
var placa = 4;
switch (placa){
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