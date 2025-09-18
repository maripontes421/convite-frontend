console.log("oi");

function mensagem() {
    console.log("tudo bem?");
};

mensagem()

function escreverMensagemComNome(abacaxi) {

    console.log(`tudo bem, ${abacaxi}`);
};

escreverMensagemComNome("André")

function someOsNumeros(numeroUm, numeroDois) {
    const resultado = numeroUm + numeroDois;
    console.log(resultado);
};

someOsNumeros(8, 4)

function somaERetornaNumeros (numeroUm, numeroDois) {
    const resultado = numeroUm + numeroDois;
    return resultado;
};

const resposta = somaERetornaNumeros(10, 20);
console.log(resposta);



