function inicializar() {
    let reloj = setInterval(hora,1000);
}

let temporizador;

function hora() {
    let actualHora = new Date(); // Obtiene la fecha y hora actual
    let horas = actualHora.getHours(); // Extrae la hora (0–23)
    if (horas < 10) {
        horas = "0" + horas; // Añade un 0 delante si es menor que 10
    }

    let minutos = actualHora.getMinutes(); // Extrae los minutos
    if (minutos < 10) {
        minutos = "0" + minutos; // Formato 2 dígitos
    }

    let segundos = actualHora.getSeconds(); // Extrae los segundos
    if (segundos < 10) {
        segundos = "0" + segundos; // Formato 2 dígitos
    }

    // Construye un string con el formato HH:MM:SS
    let horaLimpia = horas + ":" + minutos + ":" + segundos;

    // Inserta la hora en el elemento con id="hora" del HTML
    document.getElementById('hora').innerHTML = horaLimpia;
}

function limpiarAlarma() {
    // Reinicia los campos de entrada de la alarma a "00"
    document.getElementsByName('hora')[0].value = "00";
    document.getElementsByName('minutos')[0].value = "00";
    document.getElementsByName('segundos')[0].value = "00";
}

function comprobarAlarma() {
    // Lee los valores escritos por el usuario
    let hora = document.getElementsByName('hora')[0].value;
    let minutos = document.getElementsByName('minutos')[0].value;
    let segundos = document.getElementsByName('segundos')[0].value;

    // Validaciones:
    if ((isNaN(hora)) || (isNaN(minutos)) || (isNaN(segundos))) {
        // Error si alguno no es un número
        alert('Error: Tienen que ser numeros enteros.');
        limpiarAlarma();
    } else if ((hora < 0) || (hora > 23)) {
        // Horas fuera de rango
        alert('Error: La hora está mal introducida. Por favor, intropduzca un número entre 0 y 23.');
        limpiarAlarma();
    } else if ((minutos < 0) || (minutos > 59)) {
        // Minutos fuera de rango
        alert('Error: Los minutos no pueden ser menores de 0 ni mayores de 59.');
        limpiarAlarma();
    } else if ((segundos < 0) || (segundos > 59)) {
        // Segundos fuera de rango
        alert('Error: Los segundos no pueden ser menores de 0 ni mayores de 59');
        limpiarAlarma();
    } else {
        // Si pasa todas las validaciones, activa la alarma
        activarAlarma(hora, minutos, segundos);
    }
}

function activarAlarma(in_horas, in_minutos, in_segundos) {
    let actualHora = new Date().getTime(); 
    // Obtiene la fecha/hora actual en milisegundos

    let horaAlarma = new Date().setHours(in_horas, in_minutos, in_segundos, 0);
    // Crea un objeto Date y le establece la hora deseada de la alarma
    // Luego lo pasa a milisegundos

    let tiempoRestante = horaAlarma - actualHora;
    console.log(tiempoRestante);

    if (horaAlarma < actualHora) {
        // Si la hora de la alarma es anterior a la actual
        alert('[!] Has asignado la alarma a una anterior a la actual.');
    } else {
        // Si la hora es válida, programa un temporizador para que suene
        temporizador = setTimeout(mensajeAlarma, tiempoRestante);
    }
}

function mensajeAlarma() {
    let parar = confirm('RRRRIIIIINNNNGGGG RRRRIIIINNNNGGGG !!!!!! Soy la alarma, si el sueño aprieta, confirma para 5 segundos más.');
    // confirm muestra un cuadro de diálogo con Aceptar / Cancelar
    // Devuelve true si el usuario pulsa Aceptar, false si pulsa Cancelar

    console.log(parar);
    if (parar) {
        // Si el usuario pulsa "Aceptar", vuelve a sonar dentro de 5 segundos
        desactivarAlarma();
        temporizador = setTimeout(mensajeAlarma, (5000));
    }
}

function desactivarAlarma() {
    // Detiene el temporizador de la alarma para que no vuelva a sonar
    clearTimeout(temporizador);
}