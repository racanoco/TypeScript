function nombreCompleto(nombre, apellido) {
    if (apellido) {
        return nombre + ' ' + apellido;
    }
    else {
        return nombre;
    }
}
var nombre = nombreCompleto("Raúl", "Cano");
var nombre2 = nombreCompleto("Raúl");
console.log(nombre);
console.log(nombre2);
