// Superclasse
class Ave{

    voar(){
        console.log("A ave voa")
    }
}

class Pinguin extends Ave {
    voar (){
        console.log("Pinguins não podem voar")
    }
}

// Instânciando uma ave
let ave = new Ave()
let pinguin = new Pinguin()
ave.voar() // Concatenando para executar o método atribuido direto
pinguin.voar()
