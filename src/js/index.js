const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderSelecionado(){
     cartoes[cartaoAtual].classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
     cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function(){
     if(cartaoAtual === cartoes.length -1) {
          esconderSelecionado();
          cartaoAtual = 0
          mostrarCartao(cartaoAtual);
     }else{
          esconderSelecionado();
          cartaoAtual++;
          mostrarCartao(cartaoAtual);
     }
     // const cartaoSelecionado = document.querySelector('selecionado');
     // cartaoSelecionado.classList.remove('selecionado')
})

btnVoltar.addEventListener('click', function(){
     if(cartaoAtual === 0) {
          esconderSelecionado();
          cartaoAtual = cartoes.length -1
          mostrarCartao(cartaoAtual);
     }else{
          esconderSelecionado();
          cartaoAtual--;
          mostrarCartao(cartaoAtual);
     }
     // const cartaoSelecionado = document.querySelector('selecionado');
     // cartaoSelecionado.classList.remove('selecionado')
})