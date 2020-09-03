
function nombreCompleto(nombre:string, ...losDemasParametros:string[]): string{
    return nombre + " " + losDemasParametros.join(" ");
}

let superman = nombreCompleto("Clark", "Joseph", "Kent");
let ironman = nombreCompleto("Anthony","Edward","Tony", "Stark");

console.log(superman);
console.log(ironman);
