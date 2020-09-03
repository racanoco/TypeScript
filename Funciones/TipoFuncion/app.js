function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return "I'm" + nombre;
}
function salvarMundo() {
    console.log("El mundo esta salvado");
}
var miFuncionSumar;
var miFuncionSaludar;
var miFuncionSalvarMundo;
miFuncionSumar = sumar;
console.log(miFuncionSumar(5, 5));
miFuncionSaludar = saludar;
console.log(miFuncionSaludar(" Raúl"));
miFuncionSalvarMundo = salvarMundo;
miFuncionSalvarMundo();
