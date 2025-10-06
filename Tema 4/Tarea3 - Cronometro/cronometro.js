// Variables para manejar el tiempo
let horas = 0;
let minutos = 0;
let segundos = 0;
let intervalo = null; // Guardará el setInterval

// Función para actualizar el display
function actualizarDisplay() {
    // Añadir ceros a la izquierda si es menor que 10
    let h = horas < 10 ? "0" + horas : horas;
    let m = minutos < 10 ? "0" + minutos : minutos;
    let s = segundos < 10 ? "0" + segundos : segundos;

    document.getElementById("contador").textContent = `${h}:${m}:${s}`;
}

// Función para iniciar el cronómetro
function Encender() {
    // Evitar que se creen múltiples intervalos
    if (intervalo) return;

    intervalo = setInterval(() => {
        segundos++;

        if (segundos === 60) {
            segundos = 0;
            minutos++;
        }
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }

        actualizarDisplay();
    }, 1000);
}

// Función para parar el cronómetro
function Parar() {
    clearInterval(intervalo);
    intervalo = null;
}

// Función para reiniciar el cronómetro
function ReIniciar() {
    Parar(); // Primero paramos cualquier intervalo
    horas = 0;
    minutos = 0;
    segundos = 0;
    actualizarDisplay();
}
