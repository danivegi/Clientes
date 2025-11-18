window.addEventListener("DOMContentLoaded", function () {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let nif = document.getElementById("nif");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");
    let matricula = document.getElementById("matricula");
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    let entidad = document.getElementById("entidad");
    let iban = document.getElementById("iban");
    let formulario = document.getElementById("formulario");
    let errores = document.getElementById("errores");

    nombre.addEventListener("blur", () => {
        nombre.value = nombre.value.toUpperCase();
    });

    apellidos.addEventListener("blur", () => {
        apellidos.value = apellidos.value.toUpperCase();
    });

    function validarNombre() {
        let patron = /^\D{3,15}$/;

        if (!patron.test(nombre.value)) {
            errores.textContent = "Error en el NOMBRE, debe tener entre 3 y 15 caracteres y no puede contener números.";
            nombre.focus();
            return false;
        }
        return true;
    }

    function validarApellidos() {
        let patron = /^\D{3,15}$/;

        if (!patron.test(apellidos.value)) {
            errores.textContent = "Error en el APELLIDO, debe tener entre 3 y 15 carcteres y no puede contener números.";
            apellidos.focus();
            return false;
        }
        return true;
    }

    function validarNif() {
        let patron = /^\d{2}[.]\d{3}[.]\d{3}[-][A-Z]$/;

        if (!patron.test(nif.value)) {
            errores.textContent = "Error en el patrón del NIF. Debe ser NN.NNN.NNN-L  (N para numeros y L para letra)";
            nif.focus();
            return false;
        }

        let nifRec = nif.value.replace(".","").replace(".","").replace("-","");
        let numeros = parseInt(nifRec.substring(0, 8));
        let letra = nifRec.charAt(8);
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        let resto = numeros % 23;
        let letraC = letras.charAt(resto);

        if (letra != letraC) {
            errores.textContent = "Error en el NIF, el Nif no es correcto.";
            nif.focus();
            return false;
        }
        return true;
    }

    function validarTelefono() {
        let patron = /^(\d{9})|\+34\d{9}$/;

        if (!patron.test(telefono.value)) {
            errores.textContent = "Error en el TELEFONO, deben ser 9 números. El (+34) se puede poner opcional.";
            telefono.focus();
            return false;
        }
        return true;
    }

    function validarEmail() {
        let patron = /^[A-Za-z0-9.-_+%]+@cdpjosecabrera.es$/;

        if (!patron.test(email.value)) {
            errores.textContent = "Error en el EMAIL, patrón no válido";
            email.focus();
            return false;
        }
        return true;
    }

    function validarMarca() {
        let patron = /^[A-Za-z0-9]{2,45}$/;

        if (!patron.test(marca.value)) {
            errores.textContent = "Error en el campo MARCA, patrón no válido";
            marca.focus();
            return false;
        }
        return true;
    }

    function validarModelo() {
        let patron = /^[A-Za-z0-9]{2,45}$/;

        if (!patron.test(modelo.value)) {
            errores.textContent = "Error en el campo MODELO, patrón no válido.";
            modelo.focus();
            return false;
        }
        return true;
    }

    function validarMatricula() {
        let patron = /^\d{4}\s?[B-DF-HJ-NP-TV-Z]{3}$/;

        if (!patron.test(matricula.value)) {
            errores.textContent = "Error, La MATRICULA no es correcta";
            matricula.focus();
            return false;
        }
        return true;
    }

    function validarFecha() {
        let patron = /^((0[1-9])|(1[0-9])|(2[0-3]))\/(12)\/(2020)$/;

        if (!patron.test(fecha.value)) {
            errores.textContent = "Error en la FECHA, debe estar entre el 01/12/2020 y 3l 23/12/2020 y cumplir con dicho patrón";
            fecha.focus();
            return false;
        }
        return true;
    }

    function validarHora() {
        let patron = /^(1[0-7])[:]([0-5][0-9])$/;

        if (!patron.test(hora.value)) {
            errores.textContent = "Error en la HORA, debe ser emtre 10:00 y 17:00 y cumplir con dicho patrón.";
            hora.focus();
            return false;
        }
        return true;
    }

    function validarEntidad() {
        if (entidad.value == 0) {
            errores.textContent = "Por favor, seleccione una Entidad";
            entidad.focus();
            return false;
        }
        return true;
    }

    function validarIban() {
        let patron = /^(ES)\d{2}(2100|0049|2038)\d{16}$/;

        if (!patron.test(iban.value)) {
            errores.textContent = "Error en el IBAN, no cumple con el patrón";
            iban.focus();
            return false;
        }
        return true;
    }

    formulario.addEventListener("submit", function (event) {
        errores.textContent = "";

        if (!validarNombre()) {
            event.preventDefault();
            return;
        }

        if (!validarApellidos()) {
            event.preventDefault();
            return;
        }

        if (!validarNif()) {
            event.preventDefault();
            return;
        }

        if (!validarTelefono()) {
            event.preventDefault();
            return;
        }

        if (!validarEmail()) {
            event.preventDefault();
            return;
        }

        if (!validarMarca()) {
            event.preventDefault();
            return;
        }

        if (!validarModelo()) {
            event.preventDefault();
            return;
        }

        if (!validarMatricula()) {
            event.preventDefault();
            return;
        }

        if (!validarFecha()) {
            event.preventDefault();
            return;
        }

        if (!validarHora()) {
            event.preventDefault();
            return;
        }

        if (!validarEntidad()) {
            event.preventDefault();
            return;
        }

        if (!validarIban()) {
            event.preventDefault();
            return;
        }

        if (!confirm("Desea enviar el formulario?")) {
            event.preventDefault();
        }
    });
});