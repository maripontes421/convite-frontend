//const nome = "mariana";
//const idade = 17;
//console.log(`Oi, meu nome é ${nome} e tenho ${idade} anos`);
//
//const anoFuturo = 2030;
//const anoAtual = 2025;
//const diferenca = anoFuturo - anoAtual; 
//const idadeFutura = diferenca + idade;
//
//console.log(`Em ${anoFuturo}, eu terei ${idadeFutura} anos.`);
//
//let a = 3;
//let b = 6;
//
//const troca = a;
//a = b;
//b = troca;
//
//console.log(a);
//console.log(b);
//console.log(troca);

//function mensagemNome (nome) {
//  console.log(`Olá, ${nome}`);
//};
//
//mensagemNome("Mariana");
//
//function soma (a, b) {
//    const resposta = a + b;
//    console.log(resposta);
//};
//
//soma(10, 30);
//
//function multiplicacao (a, b) {
//    const resposta = a * b;
//    console.log(resposta);
//};
//
//multiplicacao(2, 5);
//
//function dobraERetornaNumeros (a) {
//    const resultado = a * 2;
//    return resultado;
//};
//
//const resposta = dobraERetornaNumeros(3);
//console.log(resposta);

function idadeEmDias(anos) {
    const resultado = 366 * anos;
    console.log(resultado);
};

idadeEmDias (42);

function mensagem(nome, idade) {
    console.log(`Olá, ${nome}, você tem ${idade} anos.`);
};

mensagem("Mariana", 17);

function maiorDeIdade(idade) {
    /*if (idade >= 18) return true;
    else return false;
    return idade > 17;*/
    const retornar = idade > 17;
    return  
    
};

const resposta = maiorDeIdade(17);
console.log(resposta);
