// Declarando a classe
class Pessoa {
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    // Declarando um metódo
    saudar(){
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Instânciando
const pessoa1 = new Pessoa ("Bryan", 78);
const pessoa2 = new Pessoa ("Luan", 25);
console.log(pessoa1.saudar());
console.log(pessoa2.saudar());

// Nova classe
class Carro {

    // Atributos
    constructor(marca, modelo, preco) {
        this.marca = marca
        this.modelo = modelo
        this.preco = preco
    }

    // Método
    exibirInfo() {
        return `Carro: ${this.marca} ${this.modelo} ${this.preco}`
    }
}

// Instância
const meuCarro = new Carro("Fusca", "1974")
console.log(meuCarro.exibirInfo())
