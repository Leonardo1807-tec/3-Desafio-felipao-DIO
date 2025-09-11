class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;
    

        if (this.tipo === "mago") {
      ataque = "magia";
        } else if (this.tipo === "guerreiro") {
      ataque = "espada";
        } else if (this.tipo === "monge") {
      ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
      ataque = "shuriken";
        } else {
      ataque = "um ataque básico";
        }
    
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi1 = new hero ("Leonardo", 58, "mago")
let heroi2 = new hero ("Bernardo", 60, "guerreiro")
let heroi3 = new hero ("Vinicius", 38, "monge")
let heroi4 = new hero ("Felipao", 46, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()

