let m = 0;
let s = 0;
let mili = 0;
let crono;

function Encender() {
    
    
  if (!crono) {
    crono = setInterval(actualizar, 10);
  }
}

function actualizar() {
  mili++;
  if (mili > 100) {
    mili = 0;
    s++;
  }

  if (s > 59) {
    s = 0;
    m++;
  }

  if (m > 59) {
    m = 0;
  }

  escribir(s, m, mili);
}

function escribir(s,m,mili) {
  let segF,minF,miliF

  if (s < 10) {segF = "0" + s} else {segF = s;}
  if (m < 10) {minF = "0" + m} else {minF = m;}
  if (mili < 10) {miliF = "0" + mili} else {miliF = mili;}



  let resultado = `${minF}:${segF}:${miliF}`;
  document.getElementById("contador").innerHTML = resultado;
}

function Parar() {

  clearInterval(crono);
  crono = null;
}

function Reiniciar() {
    clearInterval(crono);
    crono = null
    m = 0
    s = 0
    mili = 0
    document.getElementById('contador').innerHTML= "00:00:00"
    
}
