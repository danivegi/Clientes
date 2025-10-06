String.prototype.truncar = function(longitud, cadena) {
    if (isNaN(longitud || longitud < 0)) {
        throw new Error("Error: la longitud debe ser un numero");
    }

    if(longitud >= this.length) {
        return this.toString(); //Se devuelve la cadena inicial entera
    }

    let cadenaFinal = this.substring(0, longitud) + cadena;
    if(cadena.length > longitud) {
        throw new Error("Error, la longitud de la nueva cadena es mayor de la cadena anterior.");
    } else {
        return cadenaFinal;
    }
    
}

let cadena1 = "hola mundo";

let cadena2 = cadena1.truncar(6, "xxx");
console.log(cadena2);