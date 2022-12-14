//Criando um sistema de venda de passagem/pacote de viagem.

console.log("Trabalhando com listas:");
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possiveis: ", salvador, saoPaulo, rioDeJaneiro);

//cada variável é declarada individualmente, o que não parece uma boa prática. Podemos imprimir estas variáveis, mas esse seria um processo muito trabalhoso, afinal teríamos de digitar muito código para apresentar todos os destinos.

//array = podemos armazenar diversos dados. A maneira de declarar um array é um pouco diferente de textos e números: utilizamos uma palavra chave new e o tipo da estrutura Array, e assim podemos criar uma nova lista com nossos destinos:

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

listaDeDestinos.push(`Vitória`); //adicionando um item na lista
console.log(listaDeDestinos);

listaDeDestinos.splice(3, 1); //o comando splice é o responsavel por deletar o dado da lista
//o numero [3] é a posicao do elemento que eu quero deletar*
//o numero [1] é a quantidade de elementos que eu quero deletar
console.log(listaDeDestinos);

//Para acessar um elemento especifico podemos chamar o nome dessa lista seguido de colchetes com o index desse elemento. Ex: lista[2]
//*As listas sempre começam a contagem de elementos a partir do 0, então o index 2 mostra o terceiro item da lista!
