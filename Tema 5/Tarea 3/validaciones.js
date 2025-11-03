window.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const edad = document.getElementById("edad");
    const matricula = document.getElementById("matricula") ;
    const provincia = document.getElementById("provincia");
    const errores = document.getElementById("errores");

    // Pasar a mayusculas si pierde el foco
    nombre.addEventListener("blur", () => {
        nombre.value = nombre.value.toUpperCase();
    });
    apellidos.addEventListener("blur", () => {
        apellidos.value = apellidos.value.toUpperCase();
    });

    //Validamos nombre y apellidos
    function validarNombre() {
        let patron = /^\D{3,20}$/;

        if(nombre.value.length < 3 || nombre.value.length > 20) {
            errores.textContent = "El campo NOMBRE no cumple con la longitud requerida.";
            nombre.focus();
            return false;
        }

        if (!patron.test(nombre.value)) {
            errores.textContent = "El NOMBRE no puede contener números.";
            nombre.focus();
            return false;
        }
        return true;
    }

    function validarApellidos() {

        let patron = /^\D{3,20}$/;

        if (apellidos.value.length < 3 || apellidos.value.length > 20) {
            errores.textContent = "El campo APELLIDOS no cumple con la longitud requerida.";
            apellidos.focus();
            return false;
        }

        if (!patron.test(apellidos.value)) {
            errores.textContent = "El APELLIDO no puede contener números.";
            apellidos.focus();
            return false;
        }
        return true;
    }

    function validarEdad() {

        let patron = /^(1[89]|[2-7][0-9]|8[0-5])$/;

        const edadNum = parseInt(edad.value);
        if (!patron.test(edad.value)) {
            errores.textContent = "La EDAD debe ser numérica y estar comprendida entre 18 y 85 años.";
            edad.focus();
            return false;
        }

        return true;
    }

    function validarMatricula() {
        let patron = /^\d{4}\s?[B-DF-HJ-NP-TV-Z]{3}$/;

        if(!patron.test(matricula.value)) {
            errores.textContent = "La MATRICULA no es correcta";
            matricula.focus();
            return false;
        }
        return true;
    }

    function validarProvincia() {
        if (provincia.value == "0") {
            errores.textContent = "Error, seleccione una PROVINCIA.";
            provincia.focus();
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

        if (!confirm("¿Deseas enviar el formulario?")) {
            event.preventDefault();
        }
    });
});