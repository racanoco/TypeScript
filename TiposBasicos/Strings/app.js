var batman = "Batman";
var linternaVerde = 'Linterna Verde';
var volcanNegro = "Volc\u00E1n Negro";
var concatenar = "Los héroes son: " + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concatenar);
// Mejor forma para concatenar.
var concat = "Los h\u00E9roes son: " + batman + ", " + linternaVerde + ", " + volcanNegro;
console.log(concat);
