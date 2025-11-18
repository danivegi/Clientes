window.onload = iniciar;

function iniciar() {

    document.getElementById("botonagregar").addEventListener('click', agregar, false);
    document.getElementById("botoneliminar").addEventListener('click', eliminar, false);
    document.getElementById("botonaumentar").addEventListener('click', aumentarBorde, false);
    document.getElementById("botondisminuir").addEventListener('click', reducirBorde, false);
    document.getElementById("botonleer").addEventListener('click', leerBorde, false);

    let nodoTabla = document.getElementById("tabla1");
    document.getElementById('botoneliminar').disabled = true;
    document.getElementById('botonaumentar').disabled = true;
    document.getElementById('botondisminuir').disabled = true;
    document.getElementById('botonleer').disabled = true;

    let totalFilas = 0;
    let celdas = 0;
    let nodoFila;

    function agregar() {

        let nodoCelda;
        let valorTexto;

        document.getElementById('botoneliminar').disabled = false;
        document.getElementById('botonaumentar').disabled = false;
        document.getElementById('botondisminuir').disabled = false;
        document.getElementById('botonleer').disabled = false;

        if (totalFilas < 5) {
            totalFilas++;
            nodoFila = document.createElement("tr");
            nodoTabla.appendChild(nodoFila);
            for (celdas = 0; celdas <= 2; celdas++) {
                nodoCelda = document.createElement("td");
                nodoFila.appendChild(nodoCelda);
                valorTexto = document.createTextNode("Fila " + totalFilas + " Celda " + (celdas + 1));
                nodoCelda.appendChild(valorTexto);
            }
        }

        if (totalFilas == 5) {
            document.getElementById('botonagregar').disabled = true;
        }

        if (totalFilas == 1) {
            document.getElementById('botoneliminar').disabled = true;
        }
    }

    function eliminar() {
        if (totalFilas > 1) {
            let ultimaFila = nodoTabla.lastChild;
            nodoTabla.removeChild(ultimaFila);
            totalFilas--;
        }

        if (totalFilas == 1) {
            document.getElementById('botoneliminar').disabled = true;
        }

        if(totalFilas < 5) {
            document.getElementById('botonagregar').disabled = false;
        }
    }

    function aumentarBorde() {
        let borde = nodoTabla.border;
        if (borde < 20) {
            borde++;
            nodoTabla.border = borde;
        }

        if (borde == 20) {
            alert("El borde ha llegado a su valor máximo (20)");
        }
    }

    function reducirBorde() {
        let borde = nodoTabla.border;
        if (borde > 1) {
            borde--;
            nodoTabla.border = borde;
        } 
    }

    function leerBorde() {
        let borde = nodoTabla.border;
        alert ("El borde es " + borde);
    }
}