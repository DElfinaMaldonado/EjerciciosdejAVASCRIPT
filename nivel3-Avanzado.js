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
if (promedio >= 70 && asistencia >= 80) {
    console.log("Usted aprueba el curso");
} else {
    console.log("Usted no aprueba el curso");
}

// 2. Una tienda ofrece promoción 2x1 si es fin de semana O si el cliente cumple años ese día. Decide si aplica la promoción.
let dia_de_la_semana = "Lunes";
let cumpleaños = 'true';

if (dia_de_la_semana == "Fin de semana" || cumpleaños == 'true') {
    console.log("Cuenta con un promocion del 2 X 1");
}

// 3. Un sistema de alarma se activa si detecta movimiento Y es de noche (después de las 10 PM). Indica si la alarma se activa.
let Turno = 'noche';
let movimiento = "detectado";
let tiempo = 12;
if (movimiento == 'detectado' && Turno == "noche" && tiempo > 10) {
    console.log("Sistema de alarma activado");
}

// 4. Te dan un número. Determina si es impar Y está entre 20 y 100 (inclusive).
let numero_impar= 24;
if (numero_impar % 2 != 0 && numero_impar >= 20 && numero_impar <= 100) {
    console.log("EL numero es impar y este se encuentra ente 20 y 100");
}

// 5. Un restaurante acepta reservaciones si hay mesas disponibles O si el cliente tiene membresía gold. Válida si se acepta la reservación.
let mesas = "no disponibles";
let membresia = "gold";
if (mesas == "disponibles" || membresia == "gold") {
    console.log("Se acepta la reservacion")
}

// 6. Para aprobar un examen de manejo, debes tener al menos 80 puntos en la prueba teórica Y no cometer más de 3 errores en la práctica. Determina si aprueba.
let puntos = 75;
let errores = 5;
if (puntos >= 80 && errores <= 3) {
    console.log("Apuebas el examen de manejo");
} else {
    console.log("No lo aprueba");
}

// 7. Un banco aprueba un préstamo si el ingreso mensual es mayor a $15,000 Y el historial crediticio es "bueno" O "excelente". Decide si se aprueba el préstamo.
let ingreso_mensual = 16000;
let historial_crediticio = "excelente";
if (ingreso_mensual > 15000 && (historial_crediticio == "bueno" || historial_crediticio == "excelente")) {
    console.log("Se aprueba el prestamo");
}

// 8. Te dan la edad de una persona. Determina si es menor de edad (menor a 18) O es adulto mayor (mayor o igual a 65).
let edad_persona = 45;
if (edad_persona >= 65) {
    console.log("Es un adulto mayor");
} else if (edad_persona < 18) {
    console.log("Es menor de edad");
}

// 9. Un gimnasio permite el acceso si tienes membresía activa Y tu último pago fue hace menos de 30 días. Indica si puede acceder.
let membresias = "activa";
let pago_dias = 18;
if (membresias == "activa" && pago_dias < 30) {
    console.log("tiene acceso al gimnasio");
} else {
    console.log("No tiene acceso al gimnasio");
}

// 10. Para obtener una beca, el estudiante debe tener promedio mayor a 85 Y (tener bajos recursos O pertenecer a una minoría). Válida si obtiene la beca.
let promedio_beca = 86;
let situacion_economica = "Estable";
let minoria = "true";
if (promedio_beca > 85 && (situacion_economica == "Bajos recursos" || minoria == "true")) {
    console.log("Obtiene la beca");
}



// 1. Una empresa de seguros calcula riesgo: Bajo si edad 25-60 Y (no fuma O hace ejercicio regular), Medio si edad 18-24 O 61-70, Alto en otros casos.
let edad_PERSONA = 26;
let fuma = false;
let ejercicio = "regular";
if ((edad_PERSONA >= 25 && edad_PERSONA <= 60) && (fuma == false || ejercicio == "regular")) {
    console.log("El riesgo Bajo");
} else if ((edad_PERSONA >= 18 && edad_PERSONA <= 24) || (edad_PERSONA >= 61 && edad_PERSONA <= 70)) {
    console.log("El riesgo es Medio");
} else {
    console.log("El riesgo es Alto");
}

// 2. Un estacionamiento cobra: $20 primera hora, $15 por hora adicional hasta 5 horas, $10 después de 5 horas. Si es cliente frecuente (más de 10 visitas) Y estadía menor a 3 horas: 30% descuento.
let precio_primera_hora = 20;
let precio_hora_adicional = 15;
let precio_despues_cinco = 10;
let cliente_frecuente = 12;
let estadia = 2;
let precio_total = 0;

if (estadia == 1) {
    precio_total = precio_primera_hora;
} else if (estadia >= 2 && estadia <= 5) {
    precio_total = precio_primera_hora + ((estadia - 1) * precio_hora_adicional);
} else if (estadia > 5) {
    precio_total = precio_primera_hora + (4 * precio_hora_adicional) + ((estadia - 5) * precio_despues_cinco);
}
if (cliente_frecuente > 10 && estadia < 3) {
    precio_total = precio_total * 0.70;
    console.log("Se le aplica el 30% de descuento. Total a pagar: $" + precio_total);
} else {
    console.log("El precio a pagar es de $" + precio_total);
}


// // 3. Una aplicación de citas hace match si: ambos tienen intereses compatibles (al menos 3 en común) Y (diferencia de edad menor a 10 años O ambos marcaron "flexible en edad") Y viven en la misma ciudad O en ciudades vecinas.
let intereses_persona1 = ["leer", "correr", "viajar", "cocinar"];
let edad_persona_1 = 25;
let ciudad_persona1 = "CDMX";
let flexible_edad_persona1 = false;
let intereses_persona2 = ["leer", "correr", "viajar", "nadar"];
let edad_persona_2 = 30;
let ciudad_persona2 = "CDMX";
let flexible_edad_persona2 = false;
let ciudades_vecinas = ["Estado de México", "Puebla", "Querétaro"];
let intereses_comunes = 0;
for (let i = 0; i < intereses_persona1.length; i++) {
    if (intereses_persona2.includes(intereses_persona1[i])) {
        intereses_comunes++;
    }
}
let diferencia_edad = Math.abs(edad_persona_1 - edad_persona_2);
if (intereses_comunes >= 3 && (diferencia_edad < 10 || (flexible_edad_persona1 && flexible_edad_persona2)) && (ciudad_persona1 == ciudad_persona2 || ciudades_vecinas.includes(ciudad_persona2))) {
    console.log("Se hace match");
} else {
    console.log("No hay match");
}


// // 4. Un sistema de riego automático activa si: humedad menor a 40% Y (temperatura mayor a 25°C O viento menor a 15 km/h) Y NO está lloviendo Y hora está entre 6AM-9AM O 6PM-9PM.
let humedad_riego = 39;
let temperatura_mayor = 30;
let viento = 12;
let lluvia = false;
let hora = 7;
if(humedad_riego < 40 && (temperatura_mayor > 25 || viento < 15) && lluvia == false && ((hora >= 6 && hora <= 9) || (hora >= 18 || hora <= 21 ))){
    console.log("Se activa el sistema de riego");
}else {
    console.log("No se activa el sistema de riego");
}


// 5. Una aerolínea asigna asientos: Primera clase si es viajero frecuente (más de 50,000 millas) O pagó upgrade, Clase ejecutiva si tiene entre 20,000-49,999 millas Y el vuelo es internacional, Económica en otros casos.
let viajero_frecuente = 25000;
let pago_viaje = "upgrade";
let tipo_vuelo = "internacional";
if (viajero_frecuente > 50000 || pago_viaje == "upgrade") {
    console.log("Primera clase");
} else if ((viajero_frecuente >= 20000 && viajero_frecuente <= 49999) && tipo_vuelo == "internacional") {
    console.log("Clase ejecutiva");
} else {
    console.log("Económica");
}

// 6. Un sistema de calificación de películas recomienda si: calificación mayor a 4 estrellas Y (género coincide con preferencias O director favorito) Y duración menor a 150 minutos O usuario tiene tiempo ilimitado.
let calificacion_estrellas = 5;
let genero_preferido = "Terror";
let director_favorito = "Luis Fonsi";
let duracion_pelicula = 110;
let tiempo_usuario = "limitado";
if (calificacion_estrellas > 4 && (genero_preferido == "Terror" || director_favorito == "Luis Fonsi") && (duracion_pelicula <= 150 || tiempo_usuario == "ilimitado")) {
    console.log("Si se recomienda la pelicula");
} else {
    console.log("No se recomienda la pelicula");
}

// 7. Una app de delivery cobra: $50 si distancia menor a 3km, $80 si 3-7km, $120 si mayor a 7km. Aplica descuento 40% si es primera compra Y pedido mayor a $300, O descuento 20% si tiene cupón válido.
let distancia_delivery = 3;
let primera_compra = true;
let cantidad_pedido = 340;
let cupon_valido = true;
let precio_delivery = 0;
if(distancia_delivery < 3) {
    precio_delivery = 50;
}else if(distancia_delivery >= 3 && distancia_delivery <= 7) {
    precio_delivery = 80;
}else if(distancia_delivery > 7) {
    precio_delivery = 120;
}
let total = precio_delivery + cantidad_pedido;
if (primera_compra == true && cantidad_pedido > 300) {
    total = total * 0.60;
    console.log("Se aplica 40% de descuento. Total a pagar: $" + total);
} else if (cupon_valido == true) {
    total = total * 0.80;
    console.log("Se aplica 20% de descuento. Total a pagar: $" + total);
} else {
    console.log("Total a pagar: $" + total);
}


// 8. Un juego clasifica dificultad del nivel: Fácil si enemigos menores a 10 Y vida del jugador mayor a 70%, Medio si enemigos 10-20 O vida 40-70%, Difícil si enemigos mayor a 20 Y vida menor a 40%, Extremo si además hay jefe final.
let enemigos = 21;
let vida_del_jugador = 35;
let jefe_final = true;
if (enemigos > 20 && vida_del_jugador < 40 && jefe_final == true){
    console.log("Extremo");
}else if (enemigos > 20 && vida_del_jugador < 40) {
    console.log("Difícil");
}else if ((enemigos >= 10 && enemigos <= 20) || (vida_del_jugador >= 40 && vida_del_jugador <= 70)) {
    console.log("Medio");
}else if (enemigos < 10 && vida_del_jugador > 70) {
    console.log("Fácil");
}

// 9. Un hospital prioriza urgencias: Crítico si dolor mayor a 8 Y (tiene fiebre mayor a 39°C O presión anormal O sangrado activo), Urgente si dolor 5-8 Y algún síntoma grave, Normal en otros casos.
let nivel_de_dolor = 9;
let tiene_fiebre = 45;
let presion = "anormal";
let sangrado = "activo";
let sintoma = "grave";
if (nivel_de_dolor > 8 && (tiene_fiebre > 39 || presion == "anormal" || sangrado == "activo")) {
    console.log("Crítico");
} else if ((nivel_de_dolor >= 5 && nivel_de_dolor <= 8) && sintoma == "grave") {
    console.log("Urgente");
} else {
    console.log("Normal");
}

// 10. Una tarjeta de crédito aprueba compra internacional si: límite disponible cubre monto Y (país destino NO está en lista restringida O cliente preautorizó viaje) Y NO hay más de 3 transacciones en últimas 24 horas.
let limite_de_tarjeta = 60000;
let saldo_actual = 45000;
let total_credito = limite_de_tarjeta - saldo_actual;
let monto_compra = 2000;
let transacciones = 2;
let país_destino = "No restringido";
let preautorizó_viaje = true;
if(monto_compra <= total_credito && (país_destino == "No restringido" || preautorizó_viaje == true) && transacciones <= 3){
    console.log("se puede realizar la compra");
}else {
    console.log("No se puede realizar la compra");
}

// 11. Un sistema de entrada a eventos permite acceso si: tiene boleto válido Y (llegó en horario permitido O tiene pase VIP) Y (NO está en lista de prohibidos Y pasó control de seguridad) O es personal autorizado.
let boleto_valido = true;
let horario_de_llegada = "permitido";
let pase_VIP = true;
let lista_de_prohibidos = false;
let control_de_seguridad = true;
let personal_autorizada = true;
if (boleto_valido == true && (horario_de_llegada == "permitido" || pase_VIP == true) && lista_de_prohibidos == false && control_de_seguridad == true || personal_autorizada == true) {
    console.log("Tiene acceso");
} else {
    console.log("No permite el acceso");
}

// 12. Una plataforma educativa desbloquea siguiente módulo si: completó módulo actual con mínimo 80% Y (resolvió quiz con 7/10 O hizo proyecto final) Y (pasaron al menos 2 días desde inicio O tiene membresía premium).
let porcetaje_modulo = 80;
let total_quiz = 7;
let realizo_proyecto_final = true;
let total_de_dias = 2;
let membresia_educativa = "premium";
if (porcetaje_modulo >= 80 && (total_quiz >= 7 || realizo_proyecto_final == true) && (total_de_dias >= 2 || membresia_educativa == "premium")) {
    console.log("Se desbloquea el siguiente modulo");
} else {
    console.log("No se desbloquea el modulo");
}

// 13. Un sistema de préstamos de biblioteca permite: máximo 3 libros si es usuario básico Y NO tiene multas, 5 libros si es usuario premium O estudiante verificado, 10 libros si es investigador Y tiene solicitud aprobada.
let usuario_biblioteca = "básico";
let multas_biblioteca = false;
let estudiante_verificado = true;
let ocupacion_del_usuario = "investigador";
let solicitud = "aprobada";
if (usuario_biblioteca == "básico" && multas_biblioteca == false) {
    console.log("Se le permite el prestamo máximo 3 libros");
} else if (usuario_biblioteca == "premium" || estudiante_verificado == true) {
    console.log("Se le permite el prestamo de 5 libros");
} else if (ocupacion_del_usuario == "investigador" && solicitud == "aprobada") {
    console.log("Se le permite el prestamo de 10 libros");
}

// 14. Una app de clima alerta "Quédate en casa" si: temperatura menor a -5°C O mayor a 40°C, O (está lloviendo Y viento mayor a 50 km/h), O (hay alerta sanitaria Y eres grupo vulnerable), O índice UV mayor a 10 Y hora entre 11AM-4PM.
let temperatura_clima = -3;
let clima_lloviendo = true;
let viento_clima = 60;
let alerta_santaria = true;
let grupo_vulnerable = true;
let indice_UV = 12;
let hora_clima = 2;
if(temperatura_clima < -5 || temperatura_clima > 40) {
    console.log("Quedate en casa");
}else if(clima_lloviendo == true && viento_clima > 50) {
    console.log("Quedate en casa");
}else if(alerta_santaria == true && grupo_vulnerable == true){
    console.log("Quedate en casa");
}else if (indice_UV > 10 && (hora_clima >= 11 && hora_clima <= 4)){
    console.log("Quedate en casa");
}

// 15. Un sistema de acceso multinivel permite entrada si: (es empleado Y horario laboral) O (es gerente Y NO es domingo) O (es guardia de seguridad Y turno asignado coincide) O (es visitante Y tiene cita confirmada Y está acompañado).
let puesto_ocupante = "empleado";
let horario_laboral = true;
let es_domingo = true;
let guardia_seguridad = true;
let turno_asignado = "coincide";
let visitante = false;
let cita_confirmada = true;
let acompañado = true;
if (puesto_ocupante == "empleado" && horario_laboral == true){
    console.log("Se te permite la entrada al sistema");
}else if(puesto_ocupante == "gerente" && es_domingo == false){
    console.log("Se te permite la entrada al sistema");
}else if(guardia_seguridad == true && turno_asignado == "coincide"){
    console.log("Se te permite la entrada al sistema");
}else if((visitante == true && cita_confirmada == true) && acompañado == true) {
    console.log("Se te permite la entrada al sistema")
}