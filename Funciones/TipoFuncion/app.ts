
function sumar(a:number, b:number):number{
    return a + b;
}

function saludar(nombre:string):string{
    return "I'm" + nombre;
}

function salvarMundo():void{
    console.log("El mundo esta salvado");
}

let miFuncionSumar: (a:number, b:number) => number;
let miFuncionSaludar: (nombre:string) => string;
let miFuncionSalvarMundo: () => void;

miFuncionSumar = sumar;
console.log(miFuncionSumar(5,5));

miFuncionSaludar = saludar;
console.log(miFuncionSaludar(" Raúl"));

miFuncionSalvarMundo = salvarMundo;
miFuncionSalvarMundo();

