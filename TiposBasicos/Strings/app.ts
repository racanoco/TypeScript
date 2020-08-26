let batman:string = "Batman";
let linternaVerde:string = 'Linterna Verde';
let volcanNegro:string =`Volcán Negro`;

let concatenar:string = "Los héroes son: " + batman + ", " +  linternaVerde + ", " + volcanNegro;

console.log(concatenar);

// Mejor forma para concatenar.
let concat: string = `Los héroes son: ${batman}, ${linternaVerde}, ${volcanNegro}`;

console.log(concat);