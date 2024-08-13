const livros = require('./MenorValor')

function MenorValor (Arrprodutos, posicaoInicial){

    let maisBarato = 0;

    for (let atual = 0;atual < Arrprodutos.length; atual++){
        if (Arrprodutos,[atual].preco < Arrprodutos, [maisBarato].preco){
            maisBarato = atual;
        }
    
    };
} 
return maisBarato;

module.exports = MenorValor;
