const { log } = console;
const CHAVES = "{}";
const COLCHETES = "[]";
const PARENSTESES = "()";
const SIM = "SIM";
const NAO = "NÃO";
const ENTRADA = "([()]}";

let verificaBalanceamento = ( texto ) => {
    let arrayChar = texto.split("");
    let balanceada = SIM;
    let par;
    bloco : {
        for (var i = 0; i < arrayChar.length/2; i++) {
            let decrecimo = i + 1;
            par = arrayChar[i] + arrayChar[ (arrayChar.length) - decrecimo ];
            if ( par != CHAVES && par != COLCHETES && par != PARENSTESES ) {
                balanceada = NAO;
                break bloco
            };
        }
    }
    return balanceada;
}

log( ENTRADA, verificaBalanceamento( ENTRADA ) );

