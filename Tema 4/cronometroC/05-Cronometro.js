let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let crono;
let tiempoLimpio;

function Encender() {
  if (!crono) {
    crono = setInterval(getTiempo, 100);
  }
}

function getTiempo() {
  milisegundos += 100;

  if (milisegundos >= 1000) {
    milisegundos = 0;
    segundos++;
  }

  if (segundos >= 60) {
    segundos = 0;
    minutos++;
  }

  tiempoLimpio = `${minutos.toString().padStart(2,"0")}:${segundos.toString().padStart(2,"0")}:${milisegundos.toString().padStart(2,"0")}`;

  document.getElementById("contador").innerHTML = tiempoLimpio;
}

function Parar() {
  clearInterval(crono);
  crono = null;
}

function Reiniciar() {
  clearInterval(crono);
  crono = null;
  milisegundos = 0;
  segundos = 0;
  minutos = 0;
  document.getElementById("contador").innerHTML = "00:00:00";
}
