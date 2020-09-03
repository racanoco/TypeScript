
function nombreCompleto(nombre:string, apellido?:string): string{
    if (apellido){
        return nombre + ' ' + apellido;
    }else{
        return nombre;
    }
}

let nombre = nombreCompleto("Raúl","Cano");
let nombre2 = nombreCompleto("Raúl",);

console.log(nombre);
console.log(nombre2);