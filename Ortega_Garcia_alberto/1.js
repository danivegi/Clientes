var numeroCorrecto = false;

do {
  var numero = prompt("Introduce un número entre el 1 y el 10: ");
  if (!isNaN(numero) && numero >= 1 && numero <= 10) {
    numeroCorrecto = true;
  }
} while (!numeroCorrecto);

var producto = 1;

for (var x = numero; x > 0; x--) {
  producto = producto * x;
}

alert("El factorial de " + numero + " es: " + producto);
