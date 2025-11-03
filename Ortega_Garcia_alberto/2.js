var fraseCorrecto = false;

do {
  var frase = prompt("Introduce una frase:");
  if (isNaN(frase) && frase.length != 0) {
    fraseCorrecto = true;
  }
} while (!fraseCorrecto);

var cadenaCorrecto = false;

do {
  var cadena = prompt("Introduce la cadena a buscar: ");
  if (isNaN(cadena) && cadena.length != 0) {
    cadenaCorrecto = true;
  }
} while (!cadenaCorrecto);

var contador = 0;
var sigue = 0;

do {
  sigue = frase.indexOf(cadena);
  frase = frase.replace(cadena, "");

  if (sigue >= 0) {
    contador++;
  }
} while (sigue >= 0);

alert("La cadena se repite " + contador + " veces");
