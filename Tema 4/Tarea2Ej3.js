function Diputado(nombre, apellidos, dni, edad, partido) {
    //Propiedades
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dni = dni;
    this.edad = edad;
    this.partido = partido;


//Métodos
//Gets se encarga de mostrar un valor del atributo de un objeto
this.getNombre = function() {
    return this.nombre;
};

//Set ingresa un valor o modifica el valor de un atributo
this.setNombre = function(nombre) { //defino el método
    this.nombre = nombre;
};

this.getApellidos = function() {
    return this.apellidos;
};

this.setApellidos = function(apellidos) {
    this.apellidos = apellidos;
};


this.getDni = function() {
    return this.dni;
};

this.setDni = function(dni) {
    let numDni = dni.substring(0, dni.length-1);
    let letraDni = dni.charAt(dni.length-1);
    letraDni = letraDni.toUpperCase();
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let divisor = 23;
    let resto;
    let compruebaLetra;

    if (numDni < 0 || numDni > 99999999 || isNaN(numDni)) {
        this.dni = "incorrecto";
    } else {
        resto = numDni % divisor;
        compruebaLetra = letras[resto];
        
        if(compruebaLetra != letraDni) {
            this.dni = "incorrecto";
        } else {
            this.dni = dni;
        }
    }
};
this.setDni(dni);

this.getEdad = function() {
    return this.edad;
};

this.setEdad = function(edad) {
    if(edad > 17 && edad < 65) {
        this.edad = edad;
    } else {
        this.edad = "incorrecto";
    }
};
this.setEdad(edad);

this.getPartido = function() {
    return this.partido;
};

this.setPartido = function(partido) {
    this.partido = partido;
};
}

Diputado.prototype.toString = function() {
    return ("Nombre: " + this.getNombre() + ", Apellidos: " + this.getApellidos() + ", Dni: " + this.getDni() + ", Edad: " + this.getEdad() + ", Partido: " + this.getPartido());
}

let dipu1 = new Diputado("Herminio", "Cabezas", "491909885", 30, "Verde");
let dipu2 = new Diputado("Manolo", "Lopez", "52334295B", 60, "Azul");
let dipu3 = new Diputado("Jacobo", "Albertos", "31665729L", 18, "Amarillo");
let dipu4 = new Diputado("Lola", "Ramirez", "31665729P", 15, "Amarillo");

let arrayParlamento = new Array();
arrayParlamento[0] = dipu1;
arrayParlamento[1] = dipu2;
arrayParlamento[2] = dipu3;
arrayParlamento[3] = dipu4;
arrayParlamento.sort(function(a, b) {
    return a.getEdad() - b.getEdad();
});

for (let x = 0; x < arrayParlamento.length; x++) {
    console.log(arrayParlamento[x].toString()+"<br>");
}