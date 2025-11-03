

function funcion(){
    
    var texto = document.getElementById("texto").value;
    
    texto = texto.toLowerCase();
    
    var arrayTexto = texto.split(" ");
    
    document.write("Número de palabras: "+arrayTexto.length+"<br>");
    document.write("Primera palabra: "+arrayTexto[0]+"<br>");
    document.write("Última palabra: "+arrayTexto[arrayTexto.length-1]+"<br>");
    document.write("Palabras en orden inverso: "+arrayTexto.reverse()+"<br>");
    document.write("Palabras ordenadas de la a-z: "+arrayTexto.sort()+"<br>");
    document.write("Palabras ordenadas de la z-a: "+arrayTexto.sort().reverse()+"<br>");
    
}