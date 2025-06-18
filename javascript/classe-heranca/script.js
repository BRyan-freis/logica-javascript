// Superclasse 
class Animal {
    constructor(nome) { //Atributo
        this.nome = nome
    }

    fazerSom(){ // Método
        console.log("O animal fez um som")
    }
}

// Subclasse 
class Cachorro extends Animal {
    // Herdando
    fazerSom(){
        console.log("O Cachorro late");
    }
}

let rex = new Cachorro("Rex")
console.log(rex.nome)
rex.fazerSom();