
var frase = "Da siempre lo mejor de ti, lo que plantes ahora lo cosecharas mas tarde";

var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.write(frase+"<hr>");

frase = frase.toLowerCase();

var arrayContador = new Array(letras.length);
arrayContador.fill(0);

for(var x=0; x<frase.length;x++){

    for(var y =0; y<letras.length;y++){
        if(frase.charAt(x)==letras[y]){
            arrayContador[y]++;
        }
    }

}

for(var x=0; x<arrayContador.length;x++){

    document.write(letras[x].toUpperCase()+" : "+arrayContador[x]+"<br>");

}