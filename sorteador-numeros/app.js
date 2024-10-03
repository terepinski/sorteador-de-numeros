function sortear() {
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);   

    let sorteados = [];
    let numero;

    for (let i = 0; i < qtd; i++) {
        numero = numAleatorio(de, ate);

        while(sorteados.includes(numero)) {
            numero = numAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    statusBotao();

}

function numAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function statusBotao() {
    let btnReiniciar = document.getElementById('btn-reiniciar');
    
    if  (btnReiniciar.classList.contains('container__botao-desabilitado')) {
        btnReiniciar.classList.remove('container__botao-desabilitado');
        btnReiniciar.classList.add('container__botao');

    } else {
        btnReiniciar.classList.remove('container__botao');
        btnReiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    statusBotao();

}