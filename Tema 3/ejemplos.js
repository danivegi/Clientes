let cadena = "Hola buenos dias";
console.log(cadena);

console.log("Cadena en mayus: " + cadena.toUpperCase());
console.log("Cadena en minus: " + cadena.toLowerCase());
console.log("La longuitud de la cadenas es: " + cadena.length);
console.log("La palabra 'buenos' se encuentra en la posicion: " + cadena.indexOf("buenos"));
console.log("Slice: " + cadena.slice(2, 7));
console.log("Split: " + cadena.split(" "));
console.log("Includes (a): " + cadena.includes("a"));
console.log("Repeat (3): " + cadena.repeat(3));
console.log("CharAt (3): " + cadena.charAt(3));
console.log(cadena.valueOf());