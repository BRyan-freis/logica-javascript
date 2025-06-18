// Vetores ou Array
let notas = [7.5, 6.3, 4.8, 9.2];

console.log ("Notas iniciais", notas);

// Ordenar em ordem crescente 
notas.sort((a,b) => a-b)

console.log("Notas ordenadas (De maneira crescente):", notas);

// Ordenar em ordem decrescente 
// Sistema Hierarquico 
notas.sort((a,b) => b-a)

console.log("Notas ordenadas (De maneira decrescente):", notas)

// Vetor de string
let frutas = ["banana", "maçã", "abacaxi", "laranja", "pera"]

console.log("Coleção de fruta:", frutas)

// Ordenando em ordem alfabetica
frutas.sort();
console.log("Frutas ordenadas:", frutas)