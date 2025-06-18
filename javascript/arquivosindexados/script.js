// Abrindo um banco de dados IndexeDB
const request = indexedDB.open("ClienteDB", 1);

request.onupgradeneeded = function(event){
    const db = event.target.result;
    const store = db.createObjectsStore("cliente", {keypath: "id"});
    store.createIndex("nome", "nome", {unique:false});
}

request.onsuccess = function(event){
    const db = event.target.result;
    const transaction = db.transaction("cliente", "readwrite");
    const store = transaction.objectsStore("clientes");

// Adicionando um Novo cliente
store.add({ id: 1, nome: "Maria eduarda", email: "maria@email.com"})

// Lendo um cliente pelo nome
const index = store.index("nome");
const nomeindex = index.get("Maria Eduarda")

nomeindex.onsuccess = function(){
    console.log(nomeindex.result);
}
}
