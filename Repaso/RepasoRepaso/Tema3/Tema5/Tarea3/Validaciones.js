window.addEventListener("DOMContentLoaded", function() {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let edad = document.getElementById("edad");
    let matricula = document.getElementById("matricula");
    let provincia = document.getElementById("provincia");
    const formulario = document.getElementById("formulario");
    const errores = document.getElementById("errores");

    nombre.addEventListener("blur", () => {
        nombre.value = nombre.value.toUpperCase();
    });

    apellidos.addEventListener("blur", () => {
        apellidos.value = apellidos.value.toUpperCase();
    });

    function validarNombre() {
        let patron = /^\D{3,45}$/;

        if (nombre.value.length <= 0) {
            errores.textContent = "Error en el NOMBRE, campo vacío.";
            nombre.focus();
            return false;
        }

        if (!patron.test(nombre.value)) {
            errores.textContent = "Error en el NOMBRE, no debe contener números y su longitud debe estar entre 3 y 45";
            nombre.focus();
            return false;
        }
        return true;
    }

        function validarApellidos() {
        let patron = /^\D{3,45}$/;

        if (apellidos.value.length <= 0) {
            errores.textContent = "Error en el APELLIDO, campo vacío.";
            apellidos.focus();
            return false;
        }

        if (!patron.test(apellidos.value)) {
            errores.textContent = "Error en el APELLIDO, no debe contener números y su longitud debe estar entre 3 y 45";
            apellidos.focus();
            return false;
        }
        return true;
    }

    function validarEdad() {
        let patron = /^(1[8-9])|([2-7][0-9])|(8[0-5])$/;

        if (!patron.test(edad.value)) {
            errores.textContent = "Error en la EDAD, debe estar comprendida entre 18 y 85.";
            edad.focus();
            return false;
        }
        return true;
    }

    function validarMatricula() {
        let patron = /^\d{4}[QWRTYPSDFGHJKLZXCVBNM]{3}$/;

        if (!patron.test(matricula.value)) {
            errores.textContent = "Error en la MATRICULA, el formato no es correcto.";
            matricula.focus();
            return false;
        }
        return true;
    }

    function validarProvincia() {
        if (provincia.value == "0") {
            errores.textContent = "Error, porfavor seleccione una PROVINCIA";
            provincia.focus();
            return false;
        }
        return true;
    }

    formulario.addEventListener("submit",  function(event) {
        errores.textContent = "";

        if(!validarNombre()) {
            event.preventDefault();
            return;
        }

        if (!validarApellidos()) {
            event.preventDefault();
            return;
        }

        if (!validarEdad()) {
            event.preventDefault();
            return;
        }

        if (!validarMatricula()) {
            event.preventDefault();
            return;
        }

        if (!validarProvincia()) {
            event.preventDefault();
            return;
        }

        if (!confirm("Desea enviar el formulario?")) {
            event.preventDefault();
        }
    });
});