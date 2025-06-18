// Definindo registro de cliente - objeto
// Neste exemplo o nosso objeto eo cliente
const cliente = {
    nome: "João silva",
    idade: 30, 
    email: "joao.silva@gmail.com"
}

//Acessando os campos do registro
console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.email);

// Modificando registro do cliente
cliente.idade= 31;

// Adicionar um novo campo
cliente.telefone = "1234-5678";

console.log(cliente)