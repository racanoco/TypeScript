
function nombreCompleto(nombre:string, apellido:string,capitalizado:boolean = false): string{
    if (capitalizado){
        return capitalizar(nombre) + ' ' + capitalizar(apellido);
    }else{
        return nombre + " " + apellido;
    }
}

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

let nombre = nombreCompleto("raúl","cano",true);

console.log(nombre);
