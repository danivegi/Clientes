function producto_Alimenticio(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
}

producto_Alimenticio.prototype.imprimeDatos = function() {
    return ("codigo: " + this.codigo + ", nombre: " + this.nombre + ", precio: " + this.precio);
}

let productoEj = new producto_Alimenticio(20, "manzana", 1);
console.log(productoEj.imprimeDatos());

let producto1 = new producto_Alimenticio(1, "pera", 0.5);
let producto2 = new producto_Alimenticio(2, "pollo asado", 8);
let producto3 = new producto_Alimenticio(3, "choco", 5);

let lista_productos = [producto1, producto2, producto3];
for (let x = 0; x < lista_productos.length; x++) {
    console.log(lista_productos[x].imprimeDatos());
}