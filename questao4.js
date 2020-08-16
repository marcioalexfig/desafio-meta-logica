const { log } = console;
const ENTRADA = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

function comparar(a, b, maiorMenor){
    if (maiorMenor == 'maior') return (a > b) ? a : b; 
    if (maiorMenor == 'menor') return  (a < b) ? a : b;
}

let calcularAgua = ( valoresEntrada ) => {
    let tamanho = valoresEntrada.length; 
    let valorSaida = 0; 

    for ( let a = 1; a < tamanho - 1; a++ )  { 
        let maiorNaEsquerda = valoresEntrada[ a ]; 
        for ( let b = 0; b < a; b++ )  { 
            maiorNaEsquerda = comparar(maiorNaEsquerda, valoresEntrada[ b ], 'maior'); 
        } 

        let maiorNaDireita = valoresEntrada[ a ]; 
        for ( let b = a + 1; b < tamanho; b++ )  { 
            maiorNaDireita = comparar(maiorNaDireita, valoresEntrada[ b ], 'maior'); 
        } 
        valorSaida = valorSaida + comparar(maiorNaEsquerda, maiorNaDireita, 'menor') - valoresEntrada[ a ]; 
    } 
    return valorSaida; 

}

log( calcularAgua( ENTRADA ) );
