window.addEventListener("DOMContentLoaded", function () {

    const secciones = ["motivo", "medalla", "objetivo", "despedida"];
    const resultado = document.getElementById("resultado");

    // Diccionario para guardar el texto elegido en cada grupo
    let seleccion = {
        motivo: "",
        medalla: "",
        objetivo: "",
        despedida: ""
    };

    // Función que dibuja el resultado final
    function actualizarCarta() {
        resultado.innerHTML = "";  // Limpia

        for (let sec of secciones) {
            if (seleccion[sec] !== "") {
                const p = document.createElement("p");
                p.textContent = seleccion[sec];
                resultado.appendChild(p);
            }
        }
    }

    // Añadimos un listener al change de cada grupo de radios
    secciones.forEach(sec => {
        const radios = document.querySelectorAll(`input[name="${sec}"]`);

        radios.forEach(radio => {
            radio.addEventListener("change", e => {
                seleccion[sec] = e.target.value;
                actualizarCarta();
            });
        });
    });

});
