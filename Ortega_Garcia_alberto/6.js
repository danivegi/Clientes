function inicializar() {
  var tiempo = new Date();

  var hora = tiempo.getHours();
  var minutos = tiempo.getMinutes();
  var segundos = tiempo.getSeconds();

  var hora = hora + ":" + minutos + ":" + segundos;

  document.getElementById("hora").textContent = hora;

  setInterval("inicializar()", 1000);

  return hora;
}

function activar() {
  var activaHora = document.getElementById("horaInput").value;
  var activaMinutos = document.getElementById("minutosInput").value;
  var activaSegundos = document.getElementById("segundosInput").value;

  var activaHoraCompleta = activaHora + ":" + activaMinutos + ":" + activaSegundos;

  do {
    var horaActual = inicializar();
  } while (horaActual != activaHoraCompleta);

  alert("ALARMA!!!  Son las " + horaActual);
}

function desactivar() { }
