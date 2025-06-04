// If (se condição for true or false)
const numerico = 14; 

if (numerico > 8) {
    console.log("O número informado é maior que 8")
}
else {
    console.log("Esse valor numerico é menor do que 8")
}

// else (se condição for false)
// Estrutura aninhada e complexa
// Else if - condição intermediária

const nomealuno = "Marcio"

if (nomealuno === "Juliano"){
    console.log("Olá " + nomealuno)
}
else if (nomealuno === "João rei do congo") {
    console.log("Olá João rei do congo");
} else {
    console.log("O nome não é juliano e nem maria, mais sim rei do congo")
}

// Encadeamento de condição
let idade = 18;
let temRG = true;

if (idade >= 18 && temRG) {
    console.log("Você pode votar")
}
else {
    console.log("Você não pode votar");
}

// Switch 
let novaidade = 17

switch(novaidade){
    case 18:
    console.log("O user tem dezoito")
    break;
    case 17: 
    console.log("O User tem dezessete")
    break; 
    default: 
    console.log ("Idade inválida")
}
