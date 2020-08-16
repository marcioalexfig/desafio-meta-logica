const { log } = console;
const ENTRADA =  [7,6,2,3,1]

let compraVende = ( array ) => {
    let menor;
    let indMenor;
    let maior = 0; 
    let indMaior;
    const lista = array.map( i => {return i});

    menor = array.sort()[0];
    indMenor = lista.indexOf(menor)
    
    for ( var i = indMenor + 1; i < lista.length; i++ ) {
        if ( lista[i] > menor && lista[i] > maior ) {
            maior = lista[i];
        }
    }

    if ( maior > 0 ) { 
        indMaior = lista.indexOf( maior ) 
        return `${maior - menor} (Comprou no dia ${indMenor + 1} (preço igual a ${menor}) e vendeu no dia ${indMaior + 1} (preço igual a ${maior}), lucro foi de ${maior} - ${menor} = ${maior - menor}`
    }
    return `${maior} (Nesse caso nenhuma transação deve ser feita, lucro máximo igual a ${maior})`  
   
}
log( compraVende( ENTRADA ) );
