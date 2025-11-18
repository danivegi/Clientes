window.onload = iniciar;

function iniciar() {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let curso = document.getElementById("curso");
    let addSolicitud = document.getElementById("addsolicitud");

    let nodoTabla = document.getElementById("tablaDatos");
    let nodoFila;
    let nodoCelda;
    let contador = 0;
    let valorTexto = "";

    addSolicitud.addEventListener("click", add, false);

    function add() {
        if (nombre.value == "" || apellidos.value == "" || curso.value == '0') {
            alert("Error, revisa bien los campos");
        } else {


            nodoFila = document.createElement("tr");
            nodoTabla.appendChild(nodoFila);
            contador++;
            for (let x = 0; x < 5; x++) {
                nodoCelda = document.createElement("td");
                nodoFila.appendChild(nodoCelda);
                if (x == 0) { //Identificador
                    valorTexto = document.createTextNode(contador);
                    nodoCelda.appendChild(valorTexto);
                } else if (x == 1) {
                    valorTexto = document.createTextNode(nombre.value);
                    nodoCelda.appendChild(valorTexto);
                } else if (x == 2) {
                    valorTexto = document.createTextNode(apellidos.value);
                    nodoCelda.appendChild(valorTexto);
                } else if (x == 3) {
                    valorTexto = document.createTextNode(curso.value);
                    nodoCelda.appendChild(valorTexto);
                } else if (x == 4) {
                    let btn = document.createElement("input");
                    btn.type = "button";
                    btn.value = "Borrar";

                    nodoCelda.appendChild(btn);
                    btn.addEventListener("click", function () {
                        nodoTabla.removeChild(this.closest("tr"));
                    });
                }

            }
        }
        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("curso").value = "0";
    }
}