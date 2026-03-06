//let titulo= document.querySelector('h1');
//titulo.innerHTML ='Jogo do numero secreto';
//let paragrafo= document.querySelector('p');
//paragrafo.innerHTML='Escolha um número de 1 a 15';
let listaNumerosSorteados= []
let numeroMaximo= 100
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag,texto) {
let campo = document.querySelector(tag);
campo.innerHTML= texto;
responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero de um 1 a 100');
}
mensagemInicial();
function verificarChute(){
    let chute =document.querySelector('input').value
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!!');
        let mensagemTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Parabéns!! Você acertou com ${tentativas} ${mensagemTentativa} .`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('h1', 'O numero é menor, tente novamente.');
        }
        else{
            exibirTextoNaTela('h1', 'o numero é maior, tente novamente.');
        }
        //tentativas = tentativas + 1
        tentativas++;
        limparNumero() 
    
    }
}
function limparNumero() {
    chute = document.querySelector('input');
    chute.value = '';
}
function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroMaximo + 1 );
    let tamanhoDaLista =listaNumerosSorteados.length;
    console.log
    if(tamanhoDaLista== numeroMaximo){
        listaNumerosSorteados=[];
        console.log(listaNumerosSorteados);
    }
    if(listaNumerosSorteados.includes(numeroEscolhido) ){
        return gerarNumeroAleatorio();
    }
    else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparNumero();
    tentativas= 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true );
}


// html n entende template string, ele espera um texto
