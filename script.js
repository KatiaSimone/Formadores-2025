document.addEventListener ('DOMContentLoaded', function(){
    const botaoDeAccessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');


    botaoDeAccessibilidade.addEventListener('click', function(){
        botaoDeAccessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    })


    let tamanhoAtualFonte = 1;


    const aumentaFonteBotao = document.getElementById ('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById ('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste')



    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste')
    })

})



