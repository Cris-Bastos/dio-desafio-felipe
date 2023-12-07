// Definindo a classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar o ataque
    atacar() {
      let ataque;
  
      // Determinando o tipo de ataque com base no tipo do herói
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou um ataque desconhecido';
      }
  
      // Exibindo a mensagem do ataque
      console.log(`O ${this.tipo} ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Aragorn', 30, 'guerreiro');
  const heroi2 = new Heroi('Gandalf', 150, 'mago');
  
  // Realizando os ataques
  heroi1.atacar(); // Saída esperada: O guerreiro usou espada
  heroi2.atacar(); // Saída esperada: O mago usou magia
  