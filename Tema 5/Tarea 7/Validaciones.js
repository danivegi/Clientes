window.addEventListener("DOMContentLoaded", function() {
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let fecha = document.getElementById("fecha");
    let dni = document.getElementById("dni");
    let genero = document.getElementById("genero");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let idSocio = document.getElementById("idSocio");
    let pin = document.getElementById("pin");
    let formulario = document.getElementById("formulario");
    let errores = document.getElementById("errores");

    //Pasar NOMBRE y APELLIDOS a Mayúsculas
    nombre.addEventListener("blur", () => {
        nombre.value = nombre.value.toUpperCase();
    });

    apellidos.addEventListener("blur", () => {
        apellidos.value = apellidos.value.toUpperCase();
    });

    //VALIDACIONES
    function validarNombre() {
        let patron = /^\D{3,45}$/; //Nombre sin números entre 3 y 45 caractéres
        if (!patron.test(nombre.value)) {
            errores.textContent = "Error en el nombre.";
            nombre.focus();
            return false;
        }
        return true;
    }

    function validarApellidos() {
        let patron = /^\D{3,45}$/; //Apellidos sin números entre 3 y 45 caractéres
        if (!patron.test(apellidos.value)) {
            errores.textContent = "Error en el apellido";
            apellidos.focus();
            return false;
        }
        return true;
    }

    function validarFecha() {
        let patron = /^((0[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))[/]((0[1-9])|(1[0-2]))[/]((19\d{2})|(20[0-1]\d{1})|(202[0-4]))$/; //Fecha válida entre 1900 y 2024
        if (!patron.test(fecha.value)) {
            errores.textContent = "Error en la fecha";
            fecha.focus();
            return false;
        }
        return true;
    }

    function validarDni() {
        let patron = /^\d{8}[A-Z]$/;
        if (patron.test(dni.value)) {
            let nifRec = dni.value.replace(".", "").replace(".","").replace("-","");
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
                dni.focus();
                return false;
            }
        } else {
            errores.textContent = "Error, el DNI no cumple el patrón establecido.";
            dni.focus();
            return false;
        }
        return true;
    }

    function validarGenero() {
        if (genero.value == "0") { //Valida si se ha seleccionado un género
            errores.textContent = "Error, seleccione un género";
            genero.focus();
            return false;
        }
        return true;
    }

    function validarEmail() {
        let patron = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
        if (!patron.test(email.value)) {
            errores.textContent = "Error, en el email.";
            email.focus();
            return false;
        }
        return true;
    }

    function validarTelefono() {
        let patron = /^\d{9}$/;
        if (!patron.test(telefono.value)) {
            errores.textContent = "Error, telefono incorrecto";
            telefono.focus();
            return false;
        }
        return true;
    }

    function validaridSocio() {
        let patron = /^\d{3}[-]\d{3}$/; //Tiene que tener 3 números, un guión y tres números.
        if (!patron.test(idSocio.value)) {
            errores.textContent = "Error, IdSocio no válido. Debe tener el patrón: XXX-XXX";
            idSocio.focus();
            return false;
        }
        return true;
    }

    function validarPin() {
        let patron = /^\d{4}$/;
        if (!patron.test(pin.value)) {
            errores.textContent = "Error en el formato del Pin.";
            pin.focus();
            return false;
        }

        let mes = fecha.value.substring(3,5);
        let year = fecha.value.substring(8,10);
        let mesPin = pin.value.substring(0,2);
        let yearPin = pin.value.substring(2,4);

        if ((mes != mesPin) || (year != yearPin)) {
            errores.textContent = "Error, Pin Incorrecto.";
            pin.focus();
            return false;
        }
        return true;
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
        
        if (!validarFecha()) {
            event.preventDefault();
            return;
        }

        if (!validarDni()) {
            event.preventDefault();
            return;
        }

        if (!validarGenero()) {
            event.preventDefault();
            return;
        }

        if (!validarEmail()) {
            event.preventDefault();
            return;
        }

        if (!validarTelefono()) {
            event.preventDefault();
            return;
        }

        if (!validaridSocio()) {
            event.preventDefault();
            return;
        }

        if (!validarPin()) {
            event.preventDefault();
            return;
        }

        if (!confirm("¿Deseas enviar el formulario?")) {
            event.preventDefault();
        }

    });
});