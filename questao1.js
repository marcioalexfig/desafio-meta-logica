const { log } = console;

let retornaIndices = (array, alvo) => {
    let primeiro = 0;
    let segundo = 0;
    bloco : {
        for ( let j = 0; j < array.length; j++) {
            primeiro = j;
            for ( let i = 0; i < array.length; i++ ) {
                if ( i != j ) {
                    if (array[j] + array[i] == alvo ) {
                        segundo = i;
                        break bloco;
                    }
                }
            }
        }
    }
    return [primeiro, segundo];
}

log( retornaIndices([11, 2, 15, 7], 9) );

