window.addEventListener("DOMContentLoaded", function() {
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
    let errores = document.getElementById("errores");
    let formulario = document.getElementById("formulario");

    //PASAR NOMBRE Y APELLIDOS A MAYUS
    nombre.addEventListener("blur", () => {
        nombre.value = nombre.value.toUpperCase();
    });

    apellidos.addEventListener("blur", () => {
        apellidos.value = apellidos.value.toUpperCase();
    });

    function validarNombre() {
        let patron = /^\D{3,15}$/;
        if (nombre.value.length <= 0) {
            errores.textContent = "Error, el campo NOMBRE está vacío.";
            nombre.focus();
            return false;
        }

        if (nombre.length < 3 || nombre.length > 15) {
            errores.textContent = "Error, la longitud del NOMBRE debe ser mayor que 3 o menor ue 15.";
            nombre.focus();
            return false;
        }

        if (!patron.test(nombre.value)) {
            errores.textContent = "Error, el campo NOMBRE no debe contener números.";
            nombre.focus();
            return false;
        }
        return true;
    }

    function validarApellidos() {
        let patron = /^\D{3,15}$/;
        if (apellidos.value.length <= 0) {
            errores.textContent = "Error, el campo APELLIDOS está vacío.";
            apellidos.focus();
            return false;
        }

        if (apellidos.length < 3 || apellidos.length > 15) {
            errores.textContent = "Error, la longitud del APELLIDO debe ser mayor que 3 o menor ue 15.";
            apellidos.focus();
            return false;
        }

        if (!patron.test(apellidos.value)) {
            errores.textContent = "Error, el campo APELLIDOS no debe contener números.";
            apellidos.focus();
            return false;
        }
        return true;
    }

    function validarNif() {
        let patron = /^\d{2}[.]\d{3}[.]\d{3}[-][A-Z]$/;
        if (patron.test(nif.value)) {
            let nifRec = nif.value.replace(".", "").replace(".","").replace("-","");
            let numerosdni = nifRec.substring(0,8);
            let letra = nifRec.charAt(8);

            for (let x = 0; x < numerosdni.length; x++) {
                let c = numerosdni.charAt(x);
                if (isNaN(c)) {
                    errores.textContent = "Error, el NIF contiene más de 1 letra.";
                    nif.focus();
                    return false;
                }
            }

            let num = parseInt(numerosdni);
            let resto = num % 23;
            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            let letraCorrecta = letras.charAt(resto);
            if (letraCorrecta != letra) {
                errores.textContent = "Error, la letra del NIF no coincide con la que debería ser";
                nif.focus();
                return false;
            }
        } else {
            errores.textContent = "Error, el NIF no cumple con el patrón establecido: 99.999.999-X";
            nif.focus();
            return false;
        }
        return true;
    }

    function validarTelefono() {
        let patron = /^(\+34)?\d{9}$/;
        if (!patron.test(telefono.value)) {
            errores.textContent = "Error, el TELEFONO debe estar compuesto por 9 numeros y el (+34) opcional.";
            telefono.focus();
            return false;
        }
        return true;
    }

    function validarEmail() {
        let patron = /^[A-Za-z0-9._%+-]+@cdpjosecabrera.es$/;
        if (!patron.test(email.value)) {
            errores.textContent  = "Error, el EMAIL no cumple con el patrón establecido.";
            email.focus();
            return false;
        }
        return true;
    }

    function validarMarca() {
        let patron = /^[A-Za-z0-9]{2,45}$/;
        if (!patron.test(marca.value)) {
            errores.textContent = "Error, el campo MARCA es incorrecto.";
            marca.focus();
            return false;
        }
        return true;
    }

    function validarModelo() {
        let patron = /^[A-Za-z0-9]{2,45}$/;
        if (!patron.test(modelo.value)) {
            errores.textContent = "Error, el campo MODELO es incorrecto.";
            modelo.focus();
            return false;
        }
        return true;
    }

    function validarMatricula() {
        let patron = /^\d{4}\s?[B-DF-HJ-NP-TV-Z]{3}$/;

        if(!patron.test(matricula.value)) {
            errores.textContent = "Error, La MATRICULA no es correcta";
            matricula.focus();
            return false;
        }
        return true;
    }

    function validarFecha() {
        let patron = /^((0[1-9])|(1[0-9])|(2[0-3]))[/-](12)[/-](2020)$/;

        if(!patron.test(fecha.value)) {
            errores.textContent = "Error, la fecha no cumple con el patrón XX/XX/XXXX. O debe ser del 01/12/2020 al 23/12/2020";
            fecha.focus();
            return false;
        }
        return true;
    }

    function validarHora() {
        let patron = /^((1[0-7])[:]([0-5]\d))$/;

        if(!patron.test(hora.value)) {
            errores.textContent = "Error, la hora no cumple con el patrón XX:XX. O debe ser comprendida entre las 10:00 y las 17:00";
            hora.focus();
            return false;
        }
        return true;
    }

    function validarEntidad() {
        if (entidad.value == "0") {
            errores.textContent = "Error, seleccione una ENTIDAD bancaria.";
            entidad.focus();
            return false;
        }
        return true;
    }

    function validarIban() {
        let patron = /^ES\d{2}(2100|0049|2038)\d{4}\d{2}\d{10}$/;

        if (!patron.test(iban.value)) {
            errores.textContent = "Error, IBAN incorrecto";
            iban.focus();
            return false;
        }
        return true;
        //ES7021001234010123456789
    }

    formulario.addEventListener("submit", function(event) {
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
        if (!validarHora()) { 
            event.preventDefault(); 
            return; 
        }
        if (!validarFecha()) { 
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

        if (!confirm("¿Deseas enviar el formulario?")) {
            event.preventDefault();
        }
    });
});